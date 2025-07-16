import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { X } from 'lucide-react';

export default function ContactForm({onClose}) {
  const [formErrors, setFormErrors] = useState({});
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

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log("Input changed:", e.target);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log("name:", name, "value:", value);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    if (!formData.city.trim()) errors.city = "City is required";

    // Phone number validation
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = "Phone number must be numbers only";
    } else if (formData.phone.length < 10) {
      errors.phone = "Phone number must be at least 10 digits";
    }

    // WhatsApp number validation
    if (!formData.whatsapp.trim()) {
      errors.whatsapp = "WhatsApp number is required";
    } else if (!/^\d+$/.test(formData.whatsapp)) {
      errors.whatsapp = "WhatsApp number must be numbers only";
    } else if (formData.whatsapp.length < 10) {
      errors.whatsapp = "WhatsApp number must be at least 10 digits";
    }

    if (!formData.destination.trim())
      errors.destination = "Destination is required";

    if (!formData.travelDate.trim())
      errors.travelDate = "Travel date is required";

    // People validation
    if (!formData.people) {
      errors.people = "Number of people is required";
    } else if (!/^\d+$/.test(formData.people)) {
      errors.people = "Enter numbers only";
    } else if (formData.people <= 0) {
      errors.people = "Must be at least 1 person";
    }

    if (!formData.vacationType || formData.vacationType === "") {
      errors.vacationType = "Select a vacation type";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const submitForm = () => {
    if (validateForm()) {
      // Submit the form data
      console.log("Form submitted successfully:", formData);
    } else {
      console.log("Form submission failed:", formErrors);
    }
  }

  return (
    <div className="w-[100%] flex flex-col justify-center dark:bg-bg-dark dark:text-text-dark  ">
      <form className="flex flex-col gap-3">
        <div className="flex justify-between"> 
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center dark:text-text-dark">
          Plan Your Trip
        </h2>

        <X onClick={onClose} className="cursor-pointer"/>
        </div>
       

        <div>
          <input
            type="text"
            placeholder="Name*"
            name="name"
            value={formData.name}
            required
            className={`px-4 py-2 border ${
              formErrors.name ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:bg-bg-dark `}
            onChange={handleChangeInput}
          />
          {formErrors.name && (
            <span className="text-red-500 text-sm">{formErrors.name}</span>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            required
            className={`px-4 py-2 border ${
              formErrors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:bg-bg-dark`}
            onChange={handleChangeInput}
          />
          {formErrors.email && (
            <span className="text-red-500 text-sm">{formErrors.email}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            name="city"
            placeholder="City of Residence*"
            value={formData.city}
            required
            className={`px-4 py-2 border ${
              formErrors.city ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:bg-bg-dark`}
            onChange={handleChangeInput}
          />
          {formErrors.city && (
            <span className="text-red-500 text-sm">{formErrors.city}</span>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number*"
            required
            value={formData.phone}
            className={`px-4 py-2 border ${
              formErrors.phone ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:bg-bg-dark`}
            onChange={handleChangeInput}
            name="phone"
          />
          {formErrors.phone && (
            <span className="text-red-500 text-sm">{formErrors.phone}</span>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="WhatsApp Number*"
            required
            value={formData.whatsapp}
            className={`px-4 py-2 border ${
              formErrors.whatsapp ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:bg-bg-dark`}
            onChange={handleChangeInput}
            name="whatsapp"
          />
          {formErrors.whatsapp && (
            <span className="text-red-500 text-sm">{formErrors.whatsapp}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Destination*"
            required
            value={formData.destination}
            className={`px-4 py-2 border ${
              formErrors.destination ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:bg-bg-dark`}
            onChange={handleChangeInput}
            name="destination"
          />
          {formErrors.destination && (
            <span className="text-red-500 text-sm">
              {formErrors.destination}
            </span>
          )}
        </div>

        <div>
          <input
            type="date"
            placeholder="Travel Date*"
            required
            value={formData.travelDate}
            className={`px-4 py-2 border ${
              formErrors.travelDate ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:bg-bg-dark`}
            onChange={handleChangeInput}
            name="travelDate"
          />
          {formErrors.travelDate && (
            <span className="text-red-500 text-sm">
              {formErrors.travelDate}
            </span>
          )}
        </div>

        <div>

        <input
          type="number"
          placeholder="Number of People*"
          required
          value={formData.people}
          className={`px-4 py-2 border ${
            formErrors.people ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:bg-bg-dark`}
          onChange={handleChangeInput}
          name="people"
        />

        {formErrors.people && (
          <span className="text-red-500 text-sm">{formErrors.people}</span>
        )}

        </div>

        <div>
          <div className="relative">
            <select
              name="vacationType"
              required
              className={`appearance-none px-4 py-2 border ${
                formErrors.vacationType ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:bg-bg-dark`}
              value={formData.vacationType}
              onChange={handleChangeInput}
            >
              <option value="" disabled>
                Vacation Type
              </option>
              <option value="honeymoon">Honeymoon</option>
              <option value="friends Trip">Friends Trip</option>
              <option value="group trip">Group Trip</option>
              <option value="corporate">Corporate</option>
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <ChevronDown className="w-5 h-5 text-black" />
            </div>
          </div>

          {formErrors.vacationType && (
            <span className="text-red-500 text-sm">
              {formErrors.vacationType}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            console.log("Form submitted with data:", formData);
            submitForm()
            // Here you can handle the form submission, e.g., send data to an API
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
