
import React from "react";
import { Check } from "lucide-react";

const features = [
  {
    title: "Easy Integration",
    description: "Our product integrates seamlessly with your existing workflow, saving you time and resources.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Powerful Analytics",
    description: "Gain valuable insights with our advanced analytics tools that help you make informed decisions.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Top Security",
    description: "Your data is secured with enterprise-grade security features and protocols.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
    ),
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is always ready to assist you whenever you need help.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Flexible Pricing",
    description: "Choose from a variety of pricing plans that fit your budget and business needs.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Regular Updates",
    description: "We continuously improve our product with regular updates and new features.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">Everything you need to succeed</h2>
          <p className="text-lg text-gray-600">
            Our platform provides all the tools and features you need to boost your 
            productivity and achieve your business goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-brand-50 rounded-2xl p-8 border border-brand-100">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h3 className="heading-3 mb-4 text-gray-900">Why customers love our platform</h3>
              <ul className="space-y-4">
                {[
                  "Improve productivity by 40%",
                  "Reduce operational costs by 30%",
                  "Increase customer satisfaction by 50%",
                  "Streamline your workflow efficiently"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="text-brand-600 mr-3 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/3 lg:pl-8 lg:border-l border-brand-100">
              <div className="text-center lg:text-left">
                <p className="text-4xl font-bold text-brand-600">93%</p>
                <p className="text-lg text-gray-700 mt-2">of customers see results within the first month</p>
                <p className="text-sm text-gray-500 mt-4">Based on a survey of 1,000+ customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
