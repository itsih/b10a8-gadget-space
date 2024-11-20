/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 shadow-sm border bg-white p-4 rounded-3xl">
      {categories.map((category) => (
        <NavLink key={category.category} to={`/category/${category.category}`}  className={({isActive}) => `btn text-2xl font-bold rounded-badge ${isActive ? 'bg-purple-600 text-white':'hover:bg-purple-600'}`}>
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
// text-gray-500 font-bold text-lg bg-gray-100 p-2 rounded-badge text-center