const BlogCard = () => {
  return (
    <div className="relative flex max-w-[30rem] max-h-[22rem] min-h-[22rem] flex-col bg-white bg-clip-border text-gray-700 shadow-lg hover:shadow-2xl duration-300">
      <div className="relative m-0 overflow-hidden bg-transparent bg-clip-border text-gray-700 max-h-[8rem]">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" />
      </div>
      <div className="p-6">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
          UI/UX Review Check
        </h4>
        <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quia
          cumque? Maiores enim asperiores obcaecati ab.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
