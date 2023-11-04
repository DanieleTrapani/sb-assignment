import BlogPreview from "../components/BlogPreview";
import Button from "../components/Button";
import PropTypes from "prop-types";

const Home = ({ categories, filtered, addFour }) => {
  const createPost = (event) => {
    event.preventDefault();
    // const headers = {
    //   token: "pj11daaQRz7zUIH56B9Z",
    //   accept: "application/json",
    // };
    const body = {
      title: event.target[0].value,
      category_id: event.target[1].value,
      image: event.target[2].files[0],
      content: event.target[3].value,
    };
    console.log(body);
    // fetch("https://frontend-case-api.sbdev.nl/api/posts", {
    //   method: "POST",
    //   headers,
    //   body,
    // });
  };

  return (
    <div className="flex gap-4 justify-center px-24">
      <div id="form" className="bg-white p-8 h-full w-1/3">
        <form action="" className="flex flex-col gap-5" onSubmit={createPost}>
          <p className="text-2xl font-bold">Plaats een blog bericht</p>
          <label htmlFor="name" className="flex flex-col">
            <p className="text-base">Berichtnaam</p>
            <input
              className="bg-gray-50 p-3"
              type="text"
              id="title"
              name="title"
              placeholder="Geen titel"
              required
            />
          </label>

          <label htmlFor="category_id" className="flex flex-col">
            <p className="text-base">Categorie</p>
            <select
              name="category_id"
              id="category_id"
              className="bg-gray-50 p-3"
              placeholder="Geen categorie"
              required
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="image">
            <p className="text-base">Header afbeelding</p>
            {/* TODO: add another button or div to style like in prototype */}
            <input
              type="file"
              name="image"
              id="image"
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

          <Button text="Bericht aanmaken" />
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
