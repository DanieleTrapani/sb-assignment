import BlogCard from "./BlogCard";
import PropTypes from "prop-types";

const BlogPreview = ({ filtered, addFour }) => {
  return (
    <div id="blog-preview" className="flex flex-col bg-white p-8">
      <div className="grid grid-cols-2 gap-8">
        {filtered.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <button
        className="bg-orange-500 text-white rounded-full px-8 py-3 w-[12rem] self-center mt-32 hover:bg-orange-400 duration-300"
        onClick={addFour}
      >
        Laad meer
      </button>
    </div>
  );
};

BlogPreview.propTypes = {
  filtered: PropTypes.array,
  addFour: PropTypes.func,
};

export default BlogPreview;
