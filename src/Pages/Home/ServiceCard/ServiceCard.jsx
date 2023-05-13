import React from "react";
import {FiArrowRight} from "react-icons/fi"
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { title, img, price,_id } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions">
          <p className="text-red-500 font-semibold">Price: ${price}</p>
          <Link to={`/book/${_id}`}><button className="text-2xl text-red-500">
           <FiArrowRight></FiArrowRight>
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
