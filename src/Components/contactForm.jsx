

import { useState } from "react";

export default function ContactForm(){

   

    const [formData, setFormData] = useState({
      name: "",
      city: "",
      email: "",
      phone: "",
      whatsapp: "",
      destination: "",
      travelDate: "",
      people: 0,
      vacationType: "",
    });

    const handleChange =(e)=>{
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));  
    }

    return (
      <div className="w-[50%]">
        <h2>Book Your Dream Vacay Today!</h2>
        <form className="flex flex-col gap-2 ">
          <input
            type="text"
            placeholder="Name*"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City of Residence*"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone Number*"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="phone"
            name="whatsapp"
            placeholder="WhatsApp Number*"
            required
            value={formData.whatsapp}
            onChange={handleChange}
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination*"
            required
            value={formData.destination}
            onChange={handleChange}
          />
          <input
            type="date"
            name="travelDate"
            placeholder="Travel Date*"
            required
            value={formData.travelDate}
            onChange={handleChange}
          />
          <input
            type="number"
            name="people"
            placeholder="Number of People*"
            required
            value={formData.people}
            onChange={handleChange}
          />
       <select
          name="vacationType"
          value={formData.vacationType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Vacation Type
          </option>
          <option value="honeymoon">Honeymoon</option>
          <option value="friends Trip">Friends Trip</option>
          <option value="group trip">Group Trip</option>
          <option value="corporate">Corporate</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}