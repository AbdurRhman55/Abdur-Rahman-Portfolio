import React, { useState } from "react";

const categories = [
  "All",
  "Web Development",
  "PHP",
  "React",
  "UI/UX",
  "Database",
];

const ProjectFilters = () => {
  const [active, setActive] = useState("All");

  return (
    <section className="py-12 bg-white bg-gradient-to-l from-blue-50 to-blue-100 
      dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">
          Filter by Category
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all 
                ${
                  active === category
                    ? "bg-gradient-to-r from-[#1A2A80] to-[#000B58]"
                    : "bg-slate-100 text-white hover:bg-blue-100  dark:bg-slate-800 hover:text-white dark:hover:bg-slate-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFilters;
