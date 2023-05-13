import React, { useContext } from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { AuthContent } from "../../providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const {_id, title, price,img } = service;
  const {user} = useContext(AuthContent)
  const handleBookService = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const  order = {
      customerName: name,
      email,
      date,
      img,
      service:title,
      service_id: _id,
      price: price
    }


    fetch(`http://localhost:5000/bookings`,{
      method:"POST",
      headers:{
        'content-type' : "application/json"
      },
      body:JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })

    console.log(order);

  }
  return (
    <div>
      <h1 className="text-center text-3xl">Book Service {title}</h1>
        <form onSubmit={handleBookService}>
      <div className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            defaultValue={user?.displayName}
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
            defaultValue={user?.email}
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$"+price}
              placeholder="password"
              className="input input-bordered"
            />
          </div>
      </div>
          <div className="form-control mt-6">
          <input className="btn btn-block bg-red-500" type="submit" value="Order confirm" />
          </div>
        </form>
        <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default BookService;
