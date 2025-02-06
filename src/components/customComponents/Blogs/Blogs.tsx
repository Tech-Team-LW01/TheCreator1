import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      title: "Unlocking Bancassurance Horizons: A Diverse Exploration of Strategic Models.",
      description: "Embark on a transformative journey through the dynamic terrain of bancassurance models. In this exploration, we delve into the intricacies of strategic insights that not only redefine financial partnerships but also play a pivotal...",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      colSpan: "md:col-span-2", // Span 2 columns for this item
    },
    {
      title: "Revolutionizing Finance: A Closer Look at How Open Finance Sparks Product Innovation.",
      description: "Embark on a journey through the financial frontier as we dissect the revolutionary impact of Open Finance, delving into the intricacies of how it ignites product innovation. Explore real-world examples, transformative...",
      bgColor: "bg-gray-50",
      textColor: "text-green-600",
      colSpan: "md:col-span-1", // Span 1 column for this item
    },
    {
      title: "Cracking the Code: The Crucial Link Between Transparency, Trust, and Open Data.",
      description: "Dive into the intricate web of transparency, trust, and open data, exploring how the symbiotic relationship among these elements becomes the key to unlocking new dimensions of reliability and credibility in various...",
      bgColor: "bg-[#ff908f]",
      textColor: "text-white",
      colSpan: "md:col-span-1", // Span 1 column for this item
    },
    {
      title: "Innovation Echo: Charting the Unseen Waves of Transformation by FIDA & PSD3.",
      description: "Embark on a journey through the dynamic world of financial innovation as we explore the seismic shifts ushered in by FIDA & PSD3. Dive into the unseen waves of transformation, unraveling how these regulatory forces...",
      bgColor: "bg-[#fed28f]",
      textColor: "text-green-600",
      colSpan: "md:col-span-2", // Span 2 columns for this item
    },
  ];

  return (
    <section className="bg-[#000000] py-6 ">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-[#111111] border p-10 border-gray-600 rounded-2xl shadow-lg">
          {/* Header Section */}
          <div className="text-center mb-8 ">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white ">
              Our Latest Blog
            </h1>
            <p className="text-white text-lg">
              A Gateway to Insightful Stories and Expertise, Unveiling a Tapestry of Ideas and Inspiration.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className={`${blog.bgColor} ${blog.colSpan} rounded-lg p-6  flex flex-col justify-between shadow-md`}
              >
                <div>
                  <h2 className={`text-xl font-semibold mb-2 text-gray-800`}>
                    {blog.title}
                  </h2>
                  <p className="mb-2 text-gray-600 text-sm">
                    {blog.description.substring(0, 100)}...
                  </p>
                </div>
                <button className={`${blog.textColor} font-medium hover:underline`}>
                  Read More...
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;