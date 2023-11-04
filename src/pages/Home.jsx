import BlogPreview from "../components/BlogPreview";
import Form from "../components/Form";
import PropTypes from "prop-types";

const Home = ({ categories, filtered, addFour }) => {
  return (
    <div className="flex gap-4 justify-center px-24">
      <Form categories={categories} />
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
