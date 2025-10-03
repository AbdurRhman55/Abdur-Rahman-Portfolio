import React from "react";
import { FaCheck, FaStar, FaRocket, FaCrown, FaGem } from "react-icons/fa";

export default function PricingPlans() {
  const plans = [
    {
      name: "Basic",
      icon: <FaGem className="w-6 h-6" />,
      price: "$299",
      description: "Perfect for personal portfolios and single-page presentations",
      gradient: "bg-gradient-to-r from-[#1A2A80] to-[#000B58]",
      features: [
        "1 Page Portfolio Website",
        "Responsive Design",
        "Contact Form",
        "Basic SEO Optimization",
        "1 Revision Round",
        "7 Days Delivery"
      ],
      popular: false
    },
    {
      name: "Standard",
      icon: <FaRocket className="w-6 h-6" />,
      price: "$599",
      description: "Ideal for small businesses and professional websites",
      gradient: "bg-gradient-to-r from-[#1A2A80] to-[#000B58]",
      features: [
        "5 Page Website",
        "Responsive Design",
        "Contact Form + Integration",
        "Advanced SEO Setup",
        "3 Revision Rounds",
        "CMS Integration",
        "14 Days Delivery",
        "1 Month Support"
      ],
      popular: true
    },
    {
      name: "Premium",
      icon: <FaCrown className="w-6 h-6" />,
      price: "$999",
      description: "Complete custom solutions for growing businesses",
      gradient: "bg-gradient-to-r from-[#1A2A80] to-[#000B58]",
      features: [
        "Full-Stack Application",
        "Custom Design",
        "Database Integration",
        "API Development",
        "Unlimited Revisions",
        "E-commerce Features",
        "30 Days Delivery",
        "3 Months Support",
        "Priority Handling"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 lg:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-4">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-2"></span>
            <span className="text-sm font-medium text-gray-300">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-800 bg-clip-text ">
              Affordable Plans
            </span>
            <br />
            <span className="text-white">For Every Need</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose the perfect plan that matches your requirements and budget. 
            All plans include quality work and professional delivery.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold shadow-lg">
                    <FaStar className="w-3 h-3 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Pricing Card */}
              <div className={`relative bg-gray-800/50 backdrop-blur-sm border ${
                plan.popular ? 'border-blue-500/50' : 'border-gray-700'
              } rounded-2xl p-8 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl h-full`}>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300`}></div>

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-4 mx-auto`}>
                      <div className="text-white">
                        {plan.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <FaCheck className={`w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${plan.gradient} text-white font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform`}>
                    Get Started
                  </button>
                </div>

                {/* Hover Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-[2px] rounded-2xl bg-gray-900"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-400 text-sm inline-flex items-center px-4 py-2 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            All plans include source code and lifetime updates
          </p>
        </div>
      </div>
    </section>
  );
}