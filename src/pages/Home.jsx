import BlogCard from "../components/BlogCard";
import PropTypes from "prop-types";

const Home = ({ categories }) => {
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
              <option selected disabled>
                Geen categorie
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <div id="blog-preview" className="flex flex-col bg-white p-8">
        <div className="grid grid-cols-2 gap-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <button className="bg-orange-500 text-white rounded-full px-8 py-3 w-[12rem] self-center mt-32 hover:bg-orange-400 duration-300">
          Laad meer
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  categories: PropTypes.array,
};

export default Home;
