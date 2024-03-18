import React from "react";

const ContentSection2 = (props) => {
    let {content}=props
  return (
    <div className="my-20 flex align-items-center xl:my-5 xl:min-h-[85vh] ">
      <div className="my-auto container">
        <h2 className="text-2xl fw-bold md:text-4xl w-5/6 poppins"> {content.title}
        </h2>
        <p className="sourcesan md:text-2xl">
          {content.para1}
        </p>
        <p className="sourcesan md:text-2xl">
          {content.para2}
        </p>
      </div>
    </div>
  );
};

export default ContentSection2;
