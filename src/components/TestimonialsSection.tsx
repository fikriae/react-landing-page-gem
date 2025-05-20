
import React from "react";

const testimonials = [
  {
    quote: "This product has completely transformed how our team works. The features are intuitive and powerful.",
    name: "Sarah Johnson",
    role: "Product Manager, TechCo",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote: "I've tried many similar products, but this one stands out for its ease of use and excellent support team.",
    name: "Michael Chen",
    role: "CTO, StartupX",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    quote: "The analytics features have helped us make data-driven decisions that boosted our revenue by 30%.",
    name: "Emma Rodriguez",
    role: "Marketing Director, GrowthInc",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">Trusted by businesses worldwide</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. See what our customers have to say about their experience with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-grow">
                <svg className="h-10 w-10 text-brand-500 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {["Airbnb", "Netflix", "Google", "Microsoft", "Spotify"].map((company) => (
              <div key={company} className="text-xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
