import BlogPreview from "../components/BlogPreview";
import Button from "../components/Button";
import PropTypes from "prop-types";

const Home = ({ categories, filtered, addFour }) => {
  const createPost = () => {
    event.preventDefault();
    console.log("hellooooo");
  };

  return (
    <div className="flex gap-4 justify-center px-24">
      <div id="form" className="bg-white p-8 h-full w-1/3">
        <form action="" className="flex flex-col gap-5">
          <p className="text-2xl font-bold">Plaats een blog bericht</p>
          <label htmlFor="name" className="flex flex-col">
            <p className="text-base">Berichtnaam</p>
            <input
              className="bg-gray-50 p-3"
              type="text"
              id="name"
              name="name"
              placeholder="Geen titel"
              required
            />
          </label>

          <label htmlFor="category" className="flex flex-col">
            <p className="text-base">Categorie</p>
            <select
              name="category"
              id="category"
              className="bg-gray-50 p-3"
              placeholder="Geen categorie"
              required
            >
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="header-img">
            <p className="text-base">Header afbeelding</p>
            {/* TODO: add another button or div to style like in prototype */}
            <input
              type="file"
              name="header-img"
              id="header-img"
              className="hidden"
              //   required
            />
          </label>

          <label htmlFor="content">
            <p className="text-base">Bericht</p>
            <textarea
              name="content"
              id="content"
              rows={20}
              className="bg-gray-50 w-full"
              required
            />
          </label>

          <Button text="Bericht aanmaken" func={createPost} />
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
