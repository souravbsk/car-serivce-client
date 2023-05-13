import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div className="md:w-6/12 space-y-4 mx-auto">
        <h3 className="text-red-500 text-center text-3xl font-bold">Service</h3>
        <h1 className="text-center text-5xl font-semibold">Our Service Area</h1>
        <p className="text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">{services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}</div>
    </div>
  );
};

export default Services;
