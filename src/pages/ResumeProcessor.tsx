import { useState, useRef, useCallback, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload, FileText, CheckCircle, Download,
  RefreshCw, AlertCircle, Loader2, Cpu,
  ShieldCheck, Zap, Briefcase, Info,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import config from '../config';

type JobStatus =
  | 'idle'
  | 'uploading'
  | 'uploaded'
  | 'parsing'
  | 'parsed'
  | 'generating'
  | 'completed'
  | 'failed';

interface DownloadLinks {
  pdfUrl: string | null;
  docxUrl: string | null;
}

interface LogEntry {
  step?: string;
  message?: string;
  timestamp: string;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
];
const ALLOWED_EXTENSIONS = ['.pdf', '.docx', '.doc'];

const PIPELINE_STEPS = [
  { key: 'uploading', label: 'Uploading & validating file...', icon: Upload },
  { key: 'parsing', label: 'Extracting resume data via AI...', icon: Cpu },
  { key: 'generating', label: 'Building ATS-optimized resume...', icon: FileText },
  { key: 'completed', label: 'Ready for download!', icon: CheckCircle },
];

function getActiveStep(status: JobStatus): number {
  switch (status) {
    case 'uploading':
    case 'uploaded':
      return 0;
    case 'parsing':
    case 'parsed':
      return 1;
    case 'generating':
      return 2;
    case 'completed':
      return 3;
    default:
      return -1;
  }
}

function validateFile(file: File): string | null {
  const ext = '.' + file.name.split('.').pop()?.toLowerCase();
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return `Invalid file type "${ext}". Please upload a PDF or DOCX file.`;
  }
  if (!ALLOWED_TYPES.includes(file.type) && file.type !== '') {
    return `Unrecognized file type. Please upload a PDF or DOCX file.`;
  }
  if (file.size > MAX_FILE_SIZE) {
    const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
    return `File is too large (${sizeMB} MB). Maximum allowed size is 10 MB.`;
  }
  if (file.size === 0) {
    return 'The selected file is empty. Please choose a valid resume file.';
  }
  return null;
}

const ResumeProcessor = () => {
  const { user } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [status, setStatus] = useState<JobStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [downloads, setDownloads] = useState<DownloadLinks | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const backendUrl = config.backendURL || '';

  const stopPolling = useCallback(() => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => stopPolling();
  }, [stopPolling]);

  const pollStatus = useCallback(
    (id: string) => {
      pollingRef.current = setInterval(async () => {
        try {
          const res = await fetch(`${backendUrl}/api/resume/status/${id}`);
          if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(errData.error || 'Failed to check processing status');
          }
          const data = await res.json();

          setStatus(data.status as JobStatus);
          if (data.logs) setLogs(data.logs);

          if (data.status === 'completed') {
            stopPolling();
            const dlRes = await fetch(`${backendUrl}/api/resume/download/${id}`);
            if (dlRes.ok) {
              const dlData = await dlRes.json();
              setDownloads(dlData);
            }
          }

          if (data.status === 'failed') {
            stopPolling();
            setError(
              data.errorMessage ||
              'Processing failed. The file may be corrupted or in an unsupported format. Please try again with a different file.'
            );
          }
        } catch (err) {
          stopPolling();
          const message = err instanceof Error ? err.message : 'Unknown error';
          setError(
            message.includes('fetch')
              ? 'Cannot reach the server. Please check your connection and try again.'
              : message
          );
          setStatus('failed');
        }
      }, 2000);
    },
    [backendUrl, stopPolling],
  );

  const handleUpload = async (selectedFile: File) => {
    const validationError = validateFile(selectedFile);
    if (validationError) {
      setError(validationError);
      setStatus('failed');
      setFile(selectedFile);
      return;
    }

    setFile(selectedFile);
    setError(null);
    setDownloads(null);
    setLogs([]);
    setStatus('uploading');

    try {
      const formData = new FormData();
      formData.append('resume', selectedFile);
      formData.append('userId', user?.id || 'anonymous');

      const res = await fetch(`${backendUrl}/api/resume/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(
          errData.error || `Upload failed (HTTP ${res.status}). Please try again.`
        );
      }

      const { jobId: newJobId } = await res.json();
      setJobId(newJobId);
      setStatus('uploaded');
      pollStatus(newJobId);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Upload failed';
      setError(
        message.includes('Failed to fetch') || message.includes('NetworkError')
          ? 'Cannot connect to the processing server. Please ensure the server is running and try again.'
          : message
      );
      setStatus('failed');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleUpload(e.target.files[0]);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files?.[0]) {
      handleUpload(e.dataTransfer.files[0]);
    }
  };

  const reset = () => {
    stopPolling();
    setFile(null);
    setJobId(null);
    setStatus('idle');
    setError(null);
    setDownloads(null);
    setLogs([]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const isProcessing = ['uploading', 'uploaded', 'parsing', 'parsed', 'generating'].includes(status);
  const activeStep = getActiveStep(status);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <SEO
        title="AI Resume Processor - Upload & Get ATS-Optimized Resume"
        description="Upload your resume and get an ATS-optimized version in PDF and DOCX formats. Powered by AI-driven NLP processing."
        keywords="resume processor, ats resume, resume converter, ai resume, viziopath resume"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Resume Processor</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Upload your resume and our AI pipeline will parse, restructure, and deliver an ATS-optimized version in seconds.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-10">
        <AnimatePresence mode="wait">

          {/* ---------- IDLE: Upload ---------- */}
          {status === 'idle' && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <div
                className="bg-white rounded-3xl shadow-xl border-2 border-dashed border-blue-200 p-12 hover:border-blue-400 transition-all cursor-pointer group relative overflow-hidden"
                onDragOver={onDragOver}
                onDrop={onDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Upload className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Upload your Resume</h3>
                  <p className="text-slate-500 mb-2">Drag & drop your PDF or DOCX file here</p>
                  <p className="text-xs text-slate-400 mb-8">Maximum file size: 10 MB</p>

                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Select File to Process
                  </button>

                  <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
                    <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> Secure Upload</span>
                    <span className="flex items-center gap-1"><Zap className="h-4 w-4" /> AI-Powered</span>
                  </div>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </div>

              {/* How It Works */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: 'Upload', desc: 'Drop your resume file' },
                  { step: '2', title: 'Parse', desc: 'AI extracts your data' },
                  { step: '3', title: 'Generate', desc: 'ATS template applied' },
                  { step: '4', title: 'Download', desc: 'Get PDF & DOCX' },
                ].map((item) => (
                  <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ---------- PROCESSING ---------- */}
          {isProcessing && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <Loader2 className="h-12 w-12 text-blue-500 animate-spin mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Processing {file?.name}</h3>
                <p className="text-slate-500">Our AI pipeline is working on your resume...</p>
              </div>

              {/* Stepper */}
              <div className="max-w-lg mx-auto space-y-4">
                {PIPELINE_STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  const isDone = idx < activeStep;
                  const isActive = idx === activeStep;

                  return (
                    <div
                      key={step.key}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                        isActive
                          ? 'bg-blue-50 border border-blue-200'
                          : isDone
                            ? 'bg-green-50 border border-green-200'
                            : 'bg-gray-50 border border-gray-100'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isActive
                          ? 'bg-blue-500 text-white'
                          : isDone
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-400'
                      }`}>
                        {isDone ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : isActive ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <Icon className="h-5 w-5" />
                        )}
                      </div>
                      <span className={`font-medium ${
                        isActive
                          ? 'text-blue-700'
                          : isDone
                            ? 'text-green-700'
                            : 'text-gray-400'
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Processing Logs */}
              {logs.length > 0 && (
                <div className="mt-8 max-w-lg mx-auto">
                  <details className="group">
                    <summary className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
                      <Info className="h-4 w-4" />
                      <span>View processing log ({logs.length} entries)</span>
                    </summary>
                    <div className="mt-3 bg-slate-50 rounded-xl p-4 max-h-40 overflow-y-auto border border-slate-200">
                      {logs.map((log, i) => (
                        <div key={i} className="text-xs text-slate-500 py-0.5 font-mono">
                          <span className="text-slate-400">{new Date(log.timestamp).toLocaleTimeString()}</span>
                          {' '}
                          {log.message || log.step}
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              )}

              <div className="text-center mt-8">
                <p className="text-xs text-gray-400">
                  Job ID: {jobId} &mdash; This usually takes 5-15 seconds
                </p>
              </div>
            </motion.div>
          )}

          {/* ---------- COMPLETED ---------- */}
          {status === 'completed' && downloads && (
            <motion.div
              key="completed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-400" />

                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-2">Resume Ready!</h3>
                <p className="text-slate-500 mb-2">
                  Your ATS-optimized resume has been generated from <span className="font-medium text-slate-700">{file?.name}</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  {downloads.pdfUrl && (
                    <a
                      href={downloads.pdfUrl}
                      download="resume.pdf"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2"
                    >
                      <Download className="h-5 w-5" />
                      Download PDF
                    </a>
                  )}
                  {downloads.docxUrl && (
                    <a
                      href={downloads.docxUrl}
                      download="resume.docx"
                      className="bg-white text-blue-600 border-2 border-blue-200 px-8 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md hover:border-blue-400 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2"
                    >
                      <Download className="h-5 w-5" />
                      Download DOCX
                    </a>
                  )}
                </div>
              </div>

              {/* Log summary */}
              {logs.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <details>
                    <summary className="flex items-center gap-2 text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-800 transition-colors">
                      <Info className="h-4 w-4" />
                      Processing Log ({logs.length} steps completed)
                    </summary>
                    <div className="mt-3 bg-slate-50 rounded-xl p-4 max-h-48 overflow-y-auto border border-slate-200">
                      {logs.map((log, i) => (
                        <div key={i} className="text-xs text-slate-500 py-0.5 font-mono">
                          <span className="text-slate-400">{new Date(log.timestamp).toLocaleTimeString()}</span>
                          {' '}
                          <span className={log.step === 'completed' ? 'text-green-600 font-semibold' : ''}>
                            {log.message || log.step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              )}

              <div className="flex justify-center">
                <button
                  onClick={reset}
                  className="text-sm font-medium text-gray-500 hover:text-blue-600 flex items-center gap-1 transition-colors bg-white px-6 py-3 rounded-lg border border-gray-200 shadow-sm"
                >
                  <RefreshCw className="h-4 w-4" /> Process Another Resume
                </button>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-300">
                  <p className="font-semibold text-white mb-1">Privacy Guarantee</p>
                  Your files are automatically deleted from our servers within 7 days.
                </div>
                <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" /> Secure Processing
                </div>
              </div>
            </motion.div>
          )}

          {/* ---------- ERROR ---------- */}
          {status === 'failed' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center"
            >
              <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-10 w-10" />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-2">Processing Failed</h3>
              <p className="text-slate-500 mb-2 max-w-md mx-auto">
                {error || 'An unexpected error occurred while processing your resume.'}
              </p>

              {file && (
                <p className="text-xs text-slate-400 mb-6">
                  File: {file.name} ({(file.size / 1024).toFixed(1)} KB)
                </p>
              )}

              {/* Error-specific guidance */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-md mx-auto mb-6 text-left">
                <p className="text-sm font-medium text-amber-800 mb-2">Troubleshooting tips:</p>
                <ul className="text-sm text-amber-700 space-y-1 list-disc list-inside">
                  {error?.toLowerCase().includes('text') && (
                    <li>Ensure the PDF contains selectable text (not a scanned image)</li>
                  )}
                  {error?.toLowerCase().includes('server') || error?.toLowerCase().includes('connect') || error?.toLowerCase().includes('fetch') ? (
                    <li>Check that the processing server is running</li>
                  ) : null}
                  <li>Try a different PDF or DOCX file</li>
                  <li>Make sure the file is under 10 MB</li>
                  <li>Avoid password-protected documents</li>
                </ul>
              </div>

              {/* Logs if available */}
              {logs.length > 0 && (
                <div className="max-w-md mx-auto mb-6">
                  <details>
                    <summary className="flex items-center justify-center gap-2 text-xs text-gray-400 cursor-pointer hover:text-gray-600">
                      <Info className="h-3 w-3" />
                      View processing log
                    </summary>
                    <div className="mt-2 bg-slate-50 rounded-lg p-3 max-h-32 overflow-y-auto text-left border border-slate-200">
                      {logs.map((log, i) => (
                        <div key={i} className="text-xs text-slate-500 py-0.5 font-mono">
                          <span className="text-slate-400">{new Date(log.timestamp).toLocaleTimeString()}</span>
                          {' '}
                          <span className={log.message?.startsWith('FAILED') ? 'text-red-500 font-semibold' : ''}>
                            {log.message || log.step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              )}

              <button
                onClick={reset}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 mx-auto"
              >
                <RefreshCw className="h-5 w-5" />
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ResumeProcessor;
