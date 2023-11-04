import ReactPaginate from "react-paginate";
import BlogCard from "../components/BlogCard";
import "./BlogList.css";
import PropTypes from "prop-types";
import { useState } from "react";

const BlogList = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const offset = currentPage * itemsPerPage;
  const currentItems = blogs.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <div className="px-24">
      <div className="grid grid-cols-4 grid-rows-2 auto-cols-max gap-5 mb-4">
        {currentItems.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={""}
        nextLabel={"Volgende pagina →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination "}
        nextLinkClassName={"text-orange-400"}
        activeClassName={"pagination-active bg-gray-300 py-1 px-4 rounded-2xl"}
        pageClassName="py-1 px-4"
        className="flex gap-3 justify-center items-center"
      />
    </div>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
};
export default BlogList;
