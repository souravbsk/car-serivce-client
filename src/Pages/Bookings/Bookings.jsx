import React, { useContext, useEffect, useState } from "react";
import { AuthContent } from "../../providers/AuthProvider";
import BookRow from "./BookRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContent);
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url,{
      method:"GET",
      headers:{
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
          setBookings(data)
        }
        else{
          // logout and then navigate 
          navigate("/")
        }

      });
  }, [url,navigate]);

  const handleDelete = id => {
    const proceed = confirm("Are You sure");
    if(proceed){
      fetch(`http://localhost:5000/bookings/${id}`,{
        method:"DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){

          alert("Deleted Success")
          const remaining = bookings.filter(booking => booking._id !== id);
          setBookings(remaining)
        }
      })
    }
  }



  const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`,{
    method:"PATCH",
    headers:{
      'content-type':"application/json"
    },
    body:JSON.stringify({status:"confirm"})
  })
  .then(res => res.json())
  .then(data => {
    if(data.modifiedCount){

      const remainingData = bookings.filter(book => book._id !== id);
      const confirmBook = bookings.find(book => book._id === id)
      confirmBook.status = "confirm";
      const updateBookingData = [confirmBook,...remainingData]
     setBookings(updateBookingData)
    }
  })
  }

  return (
    <div>
      <h2 className="text-5xl">Your Bookings: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                bookings.map(booking => <BookRow
                   key={booking._id}
                    booking={booking}
                    handleBookingConfirm={handleBookingConfirm}
                    handleDelete={handleDelete}
                    ></BookRow>)
            }
          </tbody>
          {/* foot */}
          
        </table>
      </div>
    </div>
  );
};

export default Bookings;
