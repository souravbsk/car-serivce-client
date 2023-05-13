/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel h-[600px] w-full">
      <div
        id="slide1"
        className="carousel-item rounded-md overflow-hidden relative w-full"
      >
        <img src={img1} className="w-full" />
        <div className="absolute bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21, 21, 21, 0)] flex justify-start  h-full">
          <div className="w-3/5 pl-28 space-y-7">
            <h2 className="text-5xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn mr-8 bg-red-500">Discover More</button>
              <button className="btn bg-transparent border-white text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 bottom-0 right-5 ">
          <a href="#slide4" className="btn mr-4 btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item rounded-md overflow-hidden relative w-full"
      >
        <img src={img2} className="w-full" />
        <div className="absolute bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21, 21, 21, 0)] flex justify-start  h-full">
          <div className="w-3/5 pl-28 space-y-7">
            <h2 className="text-5xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn mr-8 bg-red-500">Discover More</button>
              <button className="btn bg-transparent border-white text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 bottom-0 right-5 ">
          <a href="#slide1" className="btn mr-4 btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item rounded-md overflow-hidden relative w-full"
      >
        <img src={img3} className="w-full" />
        <div className="absolute bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21, 21, 21, 0)] flex justify-start  h-full">
          <div className="w-3/5 pl-28 space-y-7">
            <h2 className="text-5xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn mr-8 bg-red-500">Discover More</button>
              <button className="btn bg-transparent border-white text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 bottom-0 right-5 ">
          <a href="#slide2" className="btn mr-4 btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item rounded-md overflow-hidden relative w-full"
      >
        <img src={img4} className="w-full" />
        <div className="absolute bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21, 21, 21, 0)] flex justify-start  h-full">
          <div className="w-3/5 pl-28 space-y-7">
            <h2 className="text-5xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn mr-8 bg-red-500">Discover More</button>
              <button className="btn bg-transparent border-white text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 bottom-0 right-5 ">
          <a href="#slide3" className="btn mr-4 btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
