import BlogPreview from "../components/BlogPreview";
import Form from "../components/Form";
import PropTypes from "prop-types";

const Home = ({ categories, filtered, setFiltered, addFour }) => {
  return (
    <div className="flex gap-4 justify-center px-24">
      <Form
        categories={categories}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      <BlogPreview filtered={filtered} addFour={addFour} />
    </div>
  );
};

Home.propTypes = {
  categories: PropTypes.array,
  filtered: PropTypes.array,
  setFiltered: PropTypes.func,
  addFour: PropTypes.func,
};

export default Home;
