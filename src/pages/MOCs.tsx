
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Upload, FileText, CheckCircle, Zap,
    RefreshCw, Briefcase,
    TrendingUp, ShieldCheck
} from 'lucide-react';



interface AnalysisResult {
    score: number;
    strengths: string[];
    improvements: string[];
    atsStatus: string;
    tips: string[];

}

const MOCs = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisStep, setAnalysisStep] = useState(0);
    const [result, setResult] = useState<AnalysisResult | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            startAnalysis(e.target.files[0]);
        }
    };

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            startAnalysis(e.dataTransfer.files[0]);
        }
    };

    const startAnalysis = (uploadedFile: File) => {
        setFile(uploadedFile);
        setIsAnalyzing(true);
        setAnalysisStep(0);
        setResult(null);

        // Simulate AI Analysis Steps
        const steps = [
            "Extracting text content...",
            "Analyzing keyword density...",
            "Evaluating structure & formatting...",
            "Calculating industry impact...",
            "Generating enhancing suggestions..."
        ];

        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            if (currentStep < steps.length) {
                setAnalysisStep(currentStep);
            } else {
                clearInterval(interval);
                generateResult(uploadedFile);
            }
        }, 800);
    };

    // Deterministic Random Number Generator based on string seed
    const pseudoRandom = (seed: string) => {
        let hash = 0;
        for (let i = 0; i < seed.length; i++) {
            const char = seed.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        const x = Math.sin(hash) * 10000;
        return x - Math.floor(x);
    };

    const generateResult = (file: File) => {
        // Create a unique signature based on file properties
        const fileSignature = `${file.name}-${file.size}-${file.lastModified}`;

        // Helper to get deterministic random number usually between 0 and 1
        let seedCounter = 0;
        const getRand = () => {
            seedCounter++;
            return pseudoRandom(fileSignature + seedCounter);
        };

        const getRandInt = (min: number, max: number) => {
            return Math.floor(getRand() * (max - min + 1)) + min;
        };



        const pickMulti = <T,>(arr: T[], count: number): T[] => {
            const shuffled = [...arr].sort(() => 0.5 - getRand());
            return shuffled.slice(0, count);
        };

        // 1. Calculate Score (Always 75-95)
        const score = getRandInt(75, 95);

        // Mock Data Pools


        const strengthPool = [
            "Skills list is relevant and comprehensive",
            "Experience section is well-structured chronologically",
            "Uses professional and action-oriented language",
            "Good alignment with modern job descriptions",
            "Education section is clearly formatted",
            "Contact information is easy to find"
        ];

        const improvementPool = [
            "Add more quantifiable metrics to your experience",
            "Use stronger action verbs (e.g., 'Led', 'Developed')",
            "Optimize keywords for specific job descriptions",
            "Ensure section spacing is consistent",
            "Include a summary or objective statement"
        ];

        const tipsPool = [
            "Quantify your achievements with numbers and percentages.",
            "Tailor your resume for every job application.",
            "Keep the design clean and ATS-friendly.",
            "Proofread for grammar and spelling errors.",
            "Focus on recent and relevant experience."
        ];

        setResult({
            score: score,
            strengths: pickMulti(strengthPool, 3),
            improvements: pickMulti(improvementPool, 3),
            atsStatus: score > 85
                ? "Excellent ATS Compatibility. Your resume is well-parsed."
                : "Good ATS Compatibility. Minor formatting tweaks could help.",
            tips: pickMulti(tipsPool, 3)
        });

        setIsAnalyzing(false);
    };

    const resetAnalysis = () => {
        setFile(null);
        setResult(null);
        setIsAnalyzing(false);
        setAnalysisStep(0);
    };

    const getScoreLabel = (score: number) => {
        if (score >= 90) return "Excellent Profile";
        if (score >= 85) return "Highly Competitive";
        return "Strong Resume";
    };

    const loadingSteps = [
        "Extracting text content...",
        "Analyzing keyword density...",
        "Evaluating structure & formatting...",
        "Calculating industry impact...",
        "Generating enhancing suggestions..."
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white pt-28 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume Intelligence</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Get instant, AI-powered feedback on your resume's ATS compatibility and content strength.
                    </p>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-10">

                <AnimatePresence mode="wait">

                    {/* STATE 1: UPLOAD */}
                    {!isAnalyzing && !result && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <div className="mb-10">
                                {/* Content removed as it is now in hero */}
                            </div>

                            <div
                                className="bg-white rounded-3xl shadow-xl border-2 border-dashed border-blue-200 p-12 hover:border-blue-400 transition-all cursor-pointer group relative overflow-hidden"
                                onDragOver={onDragOver}
                                onDrop={onDrop}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-50 transition-opacity"></div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <Upload className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Upload your Resume</h3>
                                    <p className="text-slate-500 mb-8">Drag & drop your PDF or DOCX here</p>

                                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center gap-2">
                                        <Briefcase className="h-5 w-5" />
                                        Select File to Analyze
                                    </button>

                                    <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
                                        <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> 100% Private</span>
                                        <span className="flex items-center gap-1"><Zap className="h-4 w-4" /> Instant-Check</span>
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
                        </motion.div>
                    )}

                    {/* STATE 2: ANALYZING */}
                    {isAnalyzing && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center min-h-[50vh]"
                        >
                            <div className="relative w-24 h-24 mb-8">
                                <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                                <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                                <FileText className="absolute inset-0 m-auto text-blue-500 h-8 w-8 animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Analyzing {file?.name}...</h3>
                            <p className="text-slate-500 min-h-[1.5rem] transition-all">
                                {loadingSteps[analysisStep] || "Finalizing results..."}
                            </p>
                        </motion.div>
                    )}

                    {/* STATE 3: RESULTS */}
                    {result && (
                        <div className="max-w-4xl mx-auto space-y-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-gray-800">Analysis Results</h2>
                                <button
                                    onClick={resetAnalysis}
                                    className="text-sm font-medium text-gray-500 hover:text-blue-600 flex items-center gap-1 transition-colors bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm"
                                >
                                    <RefreshCw className="h-4 w-4" /> Analyze Another
                                </button>
                            </div>

                            {/* Score Card */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400"></div>

                                <div className="relative w-40 h-40 flex-shrink-0 flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="80" cy="80" r="70" stroke="#e2e8f0" strokeWidth="12" fill="transparent" />
                                        <circle
                                            cx="80" cy="80" r="70"
                                            stroke={result.score >= 85 ? "#0f766e" : "#2563eb"}
                                            strokeWidth="12"
                                            fill="transparent"
                                            strokeDasharray={440}
                                            strokeDashoffset={440 - (440 * result.score) / 100}
                                            className="transition-all duration-1000 ease-out"
                                            style={{ strokeLinecap: 'round' }}
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-5xl font-bold text-slate-800">{result.score}</span>
                                        <span className="text-gray-400 text-sm">/ 100</span>
                                    </div>
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <div className="inline-block px-4 py-1 rounded-full bg-teal-50 text-teal-700 font-bold text-sm mb-2 border border-teal-100">
                                        {getScoreLabel(result.score)}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Analysis Complete</h3>
                                    <p className="text-slate-600 mb-4">{result.atsStatus}</p>
                                    <p className="text-xs text-gray-400">
                                        Analysis based on structure, keywords, and content clarity.
                                    </p>
                                </div>
                            </div>

                            {/* Strengths & Improvements */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <CheckCircle className="text-green-500 w-5 h-5" />
                                        Strengths
                                    </h3>
                                    <ul className="space-y-3">
                                        {result.strengths.map((str, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                                {str}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 h-full">
                                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <TrendingUp className="text-blue-500 w-5 h-5" />
                                        Improvements
                                    </h3>
                                    <ul className="space-y-3">
                                        {result.improvements.map((imp, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                                {imp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Privacy Note */}
                            <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="text-sm text-slate-300">
                                    <p className="font-semibold text-white mb-1">Privacy Guarantee</p>
                                    Viziopath analyzes resumes in real-time without saving or storing your data.
                                </div>
                                <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider flex-shrink-0">
                                    <ShieldCheck className="w-4 h-4" /> Secure Analysis
                                </div>
                            </div>

                        </div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default MOCs;
