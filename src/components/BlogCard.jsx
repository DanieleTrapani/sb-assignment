import PropTypes from "prop-types";

const BlogCard = ({ blog }) => {
  return (
    <div className="relative flex max-w-[18rem] min-h-[12rem] flex-col text-gray-700 shadow-lg hover:shadow-2xl duration-300">
      <div className="relative overflow-hidden max-h-[4rem] text-gray-200 text-xs">
        <img
          src={`https://frontend-case-api.sbdev.nl/storage/${blog.img_url}`}
          className="w-full h-full object-cover"
        />
        <p className="absolute bottom-3 left-3">
          {new Date(blog.created_at)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "-")}
        </p>
        <p className="absolute bottom-3 right-3">{blog.category.name}</p>
      </div>
      <div className="p-6">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
          {blog.title}
        </h4>
        <p className="mt-3 block font-sans text-xs font-normal leading-relaxed text-gray-400">
          {blog.content}
        </p>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
};

export default BlogCard;
