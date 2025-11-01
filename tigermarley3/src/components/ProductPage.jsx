
import React, { useState } from "react";
import { GeekTshirts } from "./geekTshirts";

const ProductPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    color: [],
    size: [],
    availability: [],
    tag: [],
    price: [],
  });

  const [openSections, setOpenSections] = useState({
    price: true,
    productType: true,
    color: false,
    size: false,
    availability: false,
    moreFilters: false,
  });

  // Toggle open/close for each section
  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Toggle filter selections
  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => {
      const current = prev[type];
      const newValues = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [type]: newValues };
    });
  };

  // Filter Logic
  const filteredProducts = geekTshirts.filter((product) => {
    const matchesColor =
      selectedFilters.color.length === 0 ||
      selectedFilters.color.includes(product.color);
    const matchesSize =
      selectedFilters.size.length === 0 ||
      selectedFilters.size.includes(product.size);
    const matchesAvailability =
      selectedFilters.availability.length === 0 ||
      selectedFilters.availability.includes(product.availability);
    const matchesTag =
      selectedFilters.tag.length === 0 ||
      selectedFilters.tag.some((tag) => product.tags?.includes(tag));
    const matchesPrice =
      selectedFilters.price.length === 0 ||
      selectedFilters.price.some(([min, max]) => product.price >= min && product.price <= max);

    return matchesColor && matchesSize && matchesAvailability && matchesTag && matchesPrice;
  });

  return (
    <div className="flex gap-6 p-6">
      {/* ---------------- Sidebar Filters ---------------- */}
      <aside className="w-1/4 bg-gray-50 p-4 rounded-2xl shadow-md">
        <h2 className="font-bold text-xl mb-4">Filter</h2>

        {/* PRICE FILTER */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("price")}
            className="flex justify-between w-full font-semibold"
          >
            Price
            <span>{openSections.price ? "▲" : "▼"}</span>
          </button>
          {openSections.price && (
            <div className="mt-2 space-y-1">
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("price", [0, 599])}
                />{" "}
                ₹0 — ₹599
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("price", [600, 999])}
                />{" "}
                ₹600 — ₹999
              </label>
            </div>
          )}
        </div>

        {/* PRODUCT TYPE */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("productType")}
            className="flex justify-between w-full font-semibold"
          >
            Product Type
            <span>{openSections.productType ? "▲" : "▼"}</span>
          </button>
          {openSections.productType && (
            <div className="mt-2">
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("tag", "T-Shirt")}
                />{" "}
                T-Shirts (96)
              </label>
            </div>
          )}
        </div>

        {/* COLOR */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("color")}
            className="flex justify-between w-full font-semibold"
          >
            Color
            <span>{openSections.color ? "▲" : "▼"}</span>
          </button>
          {openSections.color && (
            <div className="mt-2 space-y-1">
              {["Black", "Navy", "Red", "White"].map((color) => (
                <label key={color} className="block">
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("color", color)}
                  />{" "}
                  {color}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* SIZE */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("size")}
            className="flex justify-between w-full font-semibold"
          >
            Size
            <span>{openSections.size ? "▲" : "▼"}</span>
          </button>
          {openSections.size && (
            <div className="mt-2 space-y-1">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <label key={size} className="block">
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("size", size)}
                  />{" "}
                  {size}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* AVAILABILITY */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("availability")}
            className="flex justify-between w-full font-semibold"
          >
            Availability
            <span>{openSections.availability ? "▲" : "▼"}</span>
          </button>
          {openSections.availability && (
            <div className="mt-2">
              {["In stock", "Out of stock"].map((status) => (
                <label key={status} className="block">
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("availability", status)}
                  />{" "}
                  {status}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* MORE FILTERS */}
        <div>
          <button
            onClick={() => toggleSection("moreFilters")}
            className="flex justify-between w-full font-semibold"
          >
            More Filters
            <span>{openSections.moreFilters ? "▲" : "▼"}</span>
          </button>
          {openSections.moreFilters && (
            <div className="mt-2 h-48 overflow-y-scroll border-t border-gray-200 pt-2">
              {[
                "AI",
                "AWS",
                "Coder",
                "Funny",
                "Geek",
                "Java",
                "Linux",
                "Machine Learning",
                "Motivational",
                "Tester",
              ].map((tag) => (
                <label key={tag} className="block">
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("tag", tag)}
                  />{" "}
                  {tag}
                </label>
              ))}
            </div>
          )}
        </div>
      </aside>

      {/* ---------------- Product Grid ---------------- */}
      <main className="grid grid-cols-3 gap-6 flex-1">
        {filteredProducts.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded-2xl shadow">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3 className="mt-2 font-semibold">{p.title}</h3>
            <p className="text-gray-600">₹{p.price}</p>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="col-span-3 text-center text-gray-500">
            No products found for the selected filters.
          </p>
        )}
      </main>
    </div>
  );
};

export default ProductPage;
