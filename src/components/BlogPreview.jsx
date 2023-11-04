import BlogCard from "./BlogCard";
import Button from "./Button";
import PropTypes from "prop-types";

const BlogPreview = ({ filtered, addFour }) => {
  return (
    <div
      id="blog-preview"
      className="flex flex-col justify-between bg-white p-8 h-full"
    >
      <div className="grid grid-cols-2 gap-8 max-h-[30rem] overflow-auto pb-5">
        {filtered.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <Button text="Laad meer" func={addFour} />
    </div>
  );
};

BlogPreview.propTypes = {
  filtered: PropTypes.array,
  addFour: PropTypes.func,
};

export default BlogPreview;
