import React from "react";
const blogData = [
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 1, 2020",
    views: "2.1K views",
    imgSrc: "https://images.pexels.com/photos/18855021/pexels-photo-18855021/free-photo-of-scenic-view-of-mount-rundle-reflecting-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Convenire",
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 2, 2020",
    views: "2.2K views",
    imgSrc: "https://images.pexels.com/photos/3555988/pexels-photo-3555988.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Convenire",
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 3, 2020",
    views: "2.3K views",
    imgSrc: "https://images.pexels.com/photos/1592461/pexels-photo-1592461.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Convenire",
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 4, 2020",
    views: "2.4K views",
    imgSrc: "https://images.pexels.com/photos/415471/pexels-photo-415471.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Convenire",
  },
];

const Resources = () => {
  return (
    <section className="px-6 lg:px-12 py-20">
      <h1
        className="text-3xl text-center mb-8 font-semibold
         text-secondary sm:text-5xl sm:leading-relaxed"
      ></h1>
      <article className="py-6 sm:py-12">
        <div className="container p-6 mx-8 auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">
              The true resources of Foof recipe are pro
            </h2>
            <p className="text-sm mb-16">
              Qualisque error usu at, duo te agam soluta mucius;
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {blogData.map((blog, index) => (
              <article
                key={index}
                className="flex flex-col border rounded-md mt-8"
              >
                <a rel="noopener noreferrer" href="#" aria-label={blog.title}>
                  <img
                    src={blog.imgSrc}
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                  />
                </a>

                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    area-label={blog.title}
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                  >
                    {blog.category}
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    {blog.title}
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>{blog.date}</span>
                    <span>{blog.views}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Resources;
