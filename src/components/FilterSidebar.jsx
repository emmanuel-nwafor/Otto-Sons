import React from "react";

const FilterSidebar = () => {
  return (
    <aside className="bg-gray-800 w-1/2 p-4 hidden lg:block">
      <h2 className="text-xl font-bold mb-4">Filter</h2>
      <div>
        <h3 className="font-medium mb-2">Price Range</h3>
        <ul>
          {["€0 - €50", "€50 - €100", "€100 - €150", "€200+"].map((range) => (
            <li key={range} className="mb-2">
              <input type="checkbox" className="mr-2" />
              {range}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="font-medium mb-2">Vehicle Category</h3>
        <ul>
          {["SUV", "Coupe", "Cabriolet", "Family Car", "Electric Vehicle"].map(
            (category) => (
              <li key={category} className="mb-2">
                <input type="checkbox" className="mr-2" />
                {category}
              </li>
            )
          )}
        </ul>
      </div>
    </aside>
  );
};

export default FilterSidebar;
