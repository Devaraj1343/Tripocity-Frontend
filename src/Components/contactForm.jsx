

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
      vacationType: "Vacation Type",
    });

    return (
      <div className="w-[100%]">
        <h2>Book Your Dream Vacay Today!</h2>
        <form className="flex flex-col gap-2 ">
          <input
            type="text"
            placeholder="Name*"
            value={formData.name}
            required
          />
          <input
            type="email"
            placeholder="Email*"
            value={formData.email}
            required
          />
          <input
            type="text"
            placeholder="City of Residence*"
            value={formData.city}
            required
          />
         <input type="phone" placeholder="Phone Number*" required value={formData.phone} />
          <input type="phone" placeholder="WhatsApp Number*" required value={formData.whatsapp}  />
          <input type="text" placeholder="Destination*" required value={formData.destination}  />
          <input type="date" placeholder="Travel Date*" required value={formData.travelDate}  />
          <input type="number" placeholder="Number of People*" required value={formData.people}  />
        <select name="vacationType" id="">
            <option value="vacationType" disabled selected>Vacation Type</option>
            <option value="honeymoon">Honeymoon</option>
            <option value="friends Trip">Friends Trip</option>
            <option value="group trip">Group Trip</option>
            <option value="corporate">corporate</option>
        </select>
          <button type="submit">Submit</button>
          </form>
      </div>
           
    );
}