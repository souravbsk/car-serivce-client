import React from "react";
import { FiCalendar, FiMapPin, FiPhoneCall } from "react-icons/fi";

const ContactSection = () => {
  return (
    <div className="py-24 grid mt-32 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-black rounded-md px-16">
      
      <div className="text-white flex items-center gap-3">
        <FiCalendar className="text-5xl"></FiCalendar>
        <div className="space-y-1">
          <p>We are open monday-friday</p>
          <h4 className="text-2xl font-bold">7:00 am - 9:00 pm</h4>
        </div>
      </div>
      <div className="text-white flex items-center gap-3">
        <FiPhoneCall className="text-5xl"></FiPhoneCall>
        <div className="space-y-1">
          <p>Have a question?</p>
          <h4 className="text-2xl font-bold">+2546 251 2658</h4>
        </div>
      </div>
      <div className="text-white flex items-center gap-3">
        <FiMapPin className="text-5xl"></FiMapPin>
        <div className="space-y-1">
          <p>Need a repair? our address</p>
          <h4 className="text-2xl font-bold">Liza Street, New York</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
