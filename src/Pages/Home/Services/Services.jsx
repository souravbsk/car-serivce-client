import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setService] = useState([]);
  const [ase, setAse] = useState(true);
  const searchRef = useRef(null);
  const [search,setSearch] = useState('');
  useEffect(() => {
    fetch(`https://car-doctor-server-souravbsk.vercel.app/services?search=${search}&sort=${ase ? "ase" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [ase,search]);



  const handleSearch = () => {
console.log(searchRef.current);
setSearch(searchRef.current.value)
  }

  return (
    <div>
      <div className="md:w-6/12 space-y-4 mx-auto">
        <h3 className="text-red-500 text-center text-3xl font-bold">Service</h3>
        <h1 className="text-center text-5xl font-semibold">Our Service Area</h1>
        <p className="text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <div className="text-center">
          <div className="form-control">
            <div className="input-group justify-center mb-5">
              <input
              ref={searchRef}
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button onClick={handleSearch} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button onClick={() => setAse(!ase)} className="btn btn-primary">
            Price: {ase ? "High to Low" : "Low to High"}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
