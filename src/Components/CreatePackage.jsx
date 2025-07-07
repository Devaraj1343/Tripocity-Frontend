import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Sample country list (you can expand this or fetch dynamically)
const countryOptions = [
  "India",
  "Switzerland",
  "France",
  "Thailand",
  "Japan",
  "Australia",
];

// 🧪 Validation Schema
const schema = yup.object().shape({
  title: yup.string().required("Package name is required"),
  country: yup.string().required("Country is required"),
  destination: yup.string().required("Destination is required"),
  places: yup.string().required("At least one place is required"),
  duration: yup
    .string()
    .required("Duration is required")
    .matches(/^[0-9]+\s(days|nights|Nights|Days)/, 'Use format like "5 days"'),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be positive"),
  startDate: yup.date().required("Start date is required"),
});

export default function CreatePackage({ setCanCreaetePackage }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Package:", data);
    alert("Tourism package submitted successfully!");
    // Send `data` to API or DB
  };

  return (
    <div
      className="backdrop-blur-sm fixed  top-0 left-0 right-0 bottom-0 z-10 dark:text-white"
      onClick={() => setCanCreaetePackage(false)}
    >
      <div
        className="max-w-3xl m-auto p-6 border rounded shadow-md bg-white dark:bg-gray-800 dark:border-gray-500 z-40 animate-slideDown "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          New Tourism Package
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Country Dropdown */}
          <div className="">
            <div className="dark:text-gray-300">
              <label>Country</label>
              <select
                {...register("country")}
                className="w-full p-2 border rounded"
                defaultValue=""
              >
                <option value="" disabled>
                  -- Select Country --
                </option>
                {countryOptions.map((country, idx) => (
                  <option key={idx} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <p className="text-red-500 text-sm">{errors.country?.message}</p>
            </div>

            <div>
              <label>Package Title</label>
              <input
                {...register("title")}
                className="w-full p-2 border rounded"
                placeholder="e.g., Kerala Delight"
              />
              <p className="text-red-500 text-sm">{errors.title?.message}</p>
            </div>

            <div>
              <label>Destination</label>
              <input
                {...register("destination")}
                className="w-full p-2 border rounded"
                placeholder="e.g., Kerala"
              />
              <p className="text-red-500 text-sm">
                {errors.destination?.message}
              </p>
            </div>

            <div>
              <label>Places (comma separated)</label>
              <input
                {...register("places")}
                className="w-full p-2 border rounded"
                placeholder="e.g., Munnar, Alleppey, Kochi"
              />
              <p className="text-red-500 text-sm">{errors.places?.message}</p>
            </div>

            <div>
              <label>Duration</label>
              <input
                {...register("duration")}
                className="w-full p-2 border rounded"
                placeholder="e.g., 5 days"
              />
              <p className="text-red-500 text-sm">{errors.duration?.message}</p>
            </div>

            <div>
              <label>Price (INR)</label>
              <input
                type="number"
                {...register("price")}
                className="w-full p-2 border rounded"
                placeholder="e.g., 15000"
              />
              <p className="text-red-500 text-sm">{errors.price?.message}</p>
            </div>

            <div>
              <label>Start Date</label>
              <input
                type="date"
                {...register("startDate")}
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500 text-sm">
                {errors.startDate?.message}
              </p>
            </div>
            <div>
              <input type="file" name="" id="" />
            </div>
          </div>
          <div className="flex  gap-4">
            <button
              className="w-full py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 "
              onClick={() => setCanCreaetePackage(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full py-2 bg-primary text-white rounded hover:bg-black"
            >
              Create Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
