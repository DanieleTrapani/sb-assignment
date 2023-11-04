import Button from "./Button";
import PropTypes from "prop-types";

const Form = ({ categories, filtered, setFiltered }) => {
  const createPost = (event) => {
    event.preventDefault();
    const headers = {
      token: "pj11daaQRz7zUIH56B9Z",
      accept: "application/json",
    };
    const body = new FormData();
    body.append("title", event.target[0].value);
    body.append("category_id", event.target[1].value);
    body.append("image", event.target[2].files[0]);
    body.append("content", event.target[3].value);
    console.log(body);
    fetch("https://frontend-case-api.sbdev.nl/api/posts", {
      method: "POST",
      headers,
      body,
    }).then((response) => {
      response.json().then((data) => {
        setFiltered([data, ...filtered.slice(0, filtered.length - 1)]);
      });
    });
  };

  return (
    <div id="form" className="bg-white p-8 h-full w-1/3">
      <form action="" className="flex flex-col gap-5" onSubmit={createPost}>
        <p className="text-2xl font-bold">Plaats een blog bericht</p>
        <label htmlFor="title" className="flex flex-col">
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
            required
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
  );
};

Form.propTypes = {
  categories: PropTypes.array.isRequired,
  filtered: PropTypes.array.isRequired,
  setFiltered: PropTypes.func.isRequired,
};

export default Form;