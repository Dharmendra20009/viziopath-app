import React from 'react';

const techServices: string[] = [
  'Software & App Development',
  'Web Development & Design',
  'Cloud & DevOps Solutions',
  'AI, Data Science & Analytics',
  'Cybersecurity & IT Infrastructure',
  'ERP, CRM & Digital Transformation',
  'IoT, Blockchain, AR/VR Solutions',
];

const managementServices: string[] = [
  'Business Strategy & Consulting',
  'Project & Operations Management',
  'Financial Planning & Risk Management',
  'HR Management & Talent Acquisition',
  'Marketing, Branding & Growth Strategy',
  'Market Research & Competitor Analysis',
];

const blendedServices: string[] = [
  'Digital Transformation Consulting',
  'Business Analytics & Decision Support',
  'Product Management & Innovation',
  'IT Strategy & Governance',
  'Customer Experience (CRM, Chatbots, AI)',
  'HR Tech & Employee Engagement Platforms',
  'Fintech & Digital Banking Solutions',
];

const Section: React.FC<{ title: string; items: string[]; anchor: string }> = ({ title, items, anchor }) => (
  <section id={anchor} className="mt-12 sm:mt-16">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition group hover:shadow-md hover:-translate-y-0.5"
          >
            <h3 className="text-base font-semibold text-gray-900">{item}</h3>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Services: React.FC = () => {
  return (
    <section className="relative isolate w-full bg-white pt-28 pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Explore our offerings across Technology, Management, and Blended solutions.
          </p>
        </div>

        <Section title="Tech Services" items={techServices} anchor="tech-services" />
        <Section title="Management Services" items={managementServices} anchor="management-services" />
        <Section title="Tech + Management (Blended)" items={blendedServices} anchor="blended-services" />

        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
          >
            Talk to us
          </a>
          <a
            href="/apply"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 transition-colors hover:bg-indigo-50"
          >
            Explore programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;


