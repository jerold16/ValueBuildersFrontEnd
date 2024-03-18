import React from "react";

const TittleBanner = (props) => {
  let img = `url("${props.img}")`;
  let bg = {
    backgroundImage: 'url("../Asset/banner1.jpg")',
  };
  bg.backgroundImage = img;
  console.log(img);
  return (
    <div
      style={bg}
      className="h-[40vh] xl:h-[70vh] bg-cover bg-center relative"
    >
      <div
        style={{
          backgroundColor: "rgb(0,0,0,.5)",
        }}
        className="absolute w-100 h-100 top-0 align-items-center text-slate-50 text-center justify-center flex"
      >
        <div className="">
          <p className="text-3xl md:text-7xl poppins fw-bold mb-1">
            {props.name}
          </p>
          <p className="sourcesan">{props.line}</p>
        </div>
      </div>
    </div>
  );
};

export default TittleBanner;
