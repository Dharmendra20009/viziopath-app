import React from 'react';

const resumeFeatures: string[] = [
  'Modern, ATS-friendly templates',
  'Step-by-step guided form',
  'Real-time preview while you edit',
  'One-click download as PDF or DOCX',
  'Multiple resumes and versions',
  'Shareable public link (optional)',
  'Save progress and continue later',
  'Custom sections: Summary, Skills, Experience, Projects, Education',
  'Import from existing resume data',
  'Mobile-friendly editor',
];

const howItWorks: { title: string; desc: string }[] = [
  { title: 'Choose a template', desc: 'Pick from clean, professional designs optimized for ATS.' },
  { title: 'Fill the resume form', desc: 'Enter your details in a guided flow with helpful examples.' },
  { title: 'Preview and refine', desc: 'See changes live as you edit. Tweak sections and styling.' },
  { title: 'Download or share', desc: 'Export as PDF/DOCX or share a secure link.' },
];

const FeatureGrid: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((item) => (
      <article key={item} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition group hover:shadow-md hover:-translate-y-0.5">
        <h3 className="text-base font-semibold text-gray-900">{item}</h3>
      </article>
    ))}
  </div>
);

const HowItWorks: React.FC = () => (
  <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {howItWorks.map((step) => (
      <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
      </div>
    ))}
  </div>
);

const ResumeBuilder: React.FC = () => {
  return (
    <section className="relative isolate w-full bg-white pt-0 pb-20 sm:pt-0">
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-20 text-center text-white">
        <h1 className="text-4xl font-bold sm:text-5xl">Resume Builder</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Create a professional, ATS-friendly resume in minutes using modern templates and a guided form.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-1 shadow-2xl">
            <div className="rounded-3xl bg-white px-8 py-10 sm:px-12 sm:py-14">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Build Your Resume, Fast</h2>
                <p className="mt-3 text-base leading-7 text-gray-600 sm:mt-4">
                  Use the builder or jump straight into the form. Download as PDF/DOCX or share online.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center">
                  <a href="https://www.careerhubs.info/resume-builder" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 sm:text-lg">
                    Open Resume Builder
                  </a>
                  <a href="https://www.careerhubs.info/resume-form" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-base font-semibold text-indigo-700 ring-2 ring-inset ring-indigo-200 transition-colors hover:bg-indigo-50 sm:text-lg">
                    Fill Resume Form
                  </a>
                  <div className="flex flex-col items-center">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfGE3mcREhM0VatrbUXHupROarHAPa7Pp6YO3hXCHUPuoeGpQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-purple-500 sm:text-lg">
                      Order Your Premium Resume
                    </a>
                    <div className="mt-2 text-xs sm:text-sm text-gray-700">
                      <span className="line-through text-gray-400 mr-2">₹2000</span>
                      <span className="text-purple-700 font-semibold">Today ₹349</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl mt-12 sm:mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Key Features</h2>
          <FeatureGrid items={resumeFeatures} />
        </div>

        <div className="mx-auto max-w-7xl mt-12 sm:mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">How it works</h2>
          <HowItWorks />
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="https://www.careerhubs.info/resume-builder" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500">
            Open Resume Builder
          </a>
          <a href="https://www.careerhubs.info/resume-form" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 transition-colors hover:bg-indigo-50">
            Fill Resume Form
          </a>
          <div className="flex flex-col items-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfGE3mcREhM0VatrbUXHupROarHAPa7Pp6YO3hXCHUPuoeGpQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-purple-500">
              Order Your Premium Resume
            </a>
            <div className="mt-1 text-xs text-gray-700">
              <span className="line-through text-gray-400 mr-2">₹2000</span>
              <span className="text-purple-700 font-semibold">For Today ₹349</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilder;


