import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
          </div>
          <div className="lg:w-1/2 p-5">
            <h3 className="text-3xl font-bold text-orange-600">About Us</h3>
            <br />
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <br />
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <br />
            <button className="btn bg-red-500">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
