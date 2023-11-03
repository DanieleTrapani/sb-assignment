import BlogPreview from "../components/BlogPreview";
import PropTypes from "prop-types";

const Home = ({ categories, filtered, addFour }) => {
  return (
    <div className="flex gap-4 justify-center px-24">
      <div id="form" className="bg-white p-8 h-full w-1/3">
        <form action="">
          <p className="text-2xl font-bold">Plaats een blog bericht</p>
          <label htmlFor="name" className="flex flex-col">
            <p className="text-xl">Titel</p>
            <input
              className="bg-gray-50"
              type="text"
              id="name"
              name="name"
              placeholder="Geen titel"
            />
          </label>

          <label htmlFor="category" className="flex flex-col">
            <p className="text-xl">Categorie</p>
            <select
              name="category"
              id="category"
              className="bg-gray-50"
              placeholder="Geen categorie"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <BlogPreview filtered={filtered} addFour={addFour} />
    </div>
  );
};

Home.propTypes = {
  categories: PropTypes.array,
  filtered: PropTypes.array,
  addFour: PropTypes.func,
};

export default Home;
