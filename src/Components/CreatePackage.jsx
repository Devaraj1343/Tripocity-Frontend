import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { X } from "lucide-react";
import countries from "i18n-iso-countries";
import axios from "axios";
import enLocale from "i18n-iso-countries/langs/en.json";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3100/api";
countries.registerLocale(enLocale);

// Yup Schema
const schema = yup.object().shape({
  title: yup.string().required("Package name is required"),
  country: yup.string().required("Country is required"),
  destination: yup.string().required("Destination is required"),
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
  places: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Place name is required"),
      description: yup.string().required("Description is required"),
      duration: yup.string().required("Day count is required"),
      imageType: yup.string().oneOf(["file", "url"]).required("Choose image type"),
      imageFile: yup
        .mixed()
        .when("imageType", {
          is: "file",
          then: (schema) => schema.required("Image file is required"),
          otherwise: (schema) => schema.notRequired(),
        }),
      imageUrl: yup
        .string()
        .url("Must be a valid URL")
        .when("imageType", {
          is: "url",
          then: (schema) => schema.required("Image URL is required"),
          otherwise: (schema) => schema.notRequired(),
        }),
    })
  ),
});

export default function CreatePackage({ onClose }) {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      places: [
        {
          name: "",
          description: "",
          duration: "",
          imageType: "file",
          imageFile: null,
          imageUrl: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "places",
  });

  const countryOptions = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map(([code, name]) => ({
    label: name,
    value: code,
  }));

  const onSubmit = async (data) => {
     console.log("Form data:", data);
    const formData = new FormData();

    formData.append("packageType", data.packageType);
    formData.append("price", data.price);

    data.places.forEach((place, index) => {
      formData.append(`places[${index}][name]`, place.name);
      formData.append(`places[${index}][description]`, place.description);
      formData.append(`places[${index}][duration]`, place.duration);
      formData.append(`places[${index}][imageType]`, place.imageType);

      if (place.imageType === "file") {
        formData.append(`places[${index}][imageFile]`, place.imageFile[0]);
      } else {
        formData.append(`places[${index}][imageUrl]`, place.imageUrl);
      }
    });

    try {
      const response = await axios.post(`${apiUrl}/packages/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const watchPlaces = watch("places");

  return (
    <div className="backdrop-blur-sm top-0 left-0 right-0 bottom-0 z-10 dark:text-white text-md font-medium text-gray-700 mb-1">
      <div
        className="max-w-3xl m-auto p-6 border rounded shadow-md bg-white dark:bg-gray-800 dark:border-gray-500 z-40 animate-slideDown"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            New Tourism Package
          </h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Country</label>
            <select
              {...register("country")}
              className="w-full p-2 border rounded text-black"
              defaultValue=""
            >
              <option value="" disabled>
                -- Select Country --
              </option>
              {countryOptions.map((country, idx) => (
                <option key={idx} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            <p className="text-red-500 text-sm">{errors.country?.message}</p>
          </div>

          <div>
            <label>Title</label>
            <input
              {...register("title")}
              className="w-full p-2 border rounded text-black"
              placeholder="e.g., Kerala Delight"
            />
            <p className="text-red-500 text-sm">{errors.title?.message}</p>
          </div>

          <div>
            <label>Duration</label>
            <input
              {...register("duration")}
              className="w-full p-2 border rounded text-black"
              placeholder="e.g., 5 days"
            />
            <p className="text-red-500 text-sm">{errors.duration?.message}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
            <select
              {...register("packageType")}
              className="w-full p-2 border border-gray-300 rounded text-black focus:outline-none  "
              defaultValue=""
            >
              <option value="" disabled className="text-gray-400">
                -- Select Package Type --
              </option>
              <option value="Honeymoon" className="text-black">
                Honeymoon
              </option>
              <option value="Family" className="text-black">
                Family
              </option>
              <option value="Friends" className="text-black">
                Friends
              </option>
              <option value="Adventure" className="text-black">
                Adventure
              </option>
              <option value="Custom" className="text-black">
                Custom
              </option>
            </select>
            <p className="text-red-500 text-sm mt-1">{errors.packageType?.message}</p>
          </div>
          <div>
            <label>Price per Person</label>
            <input
              type="number"
              min="100"
              {...register("price")}
              className="w-full p-2 border rounded text-black"
              placeholder="e.g., 15000"
            />
            <p className="text-red-500 text-sm">{errors.price?.message}</p>
          </div>

          <div>
            <label className="font-semibold">Places</label>
            {fields.map((field, index) => (
              <div key={field.id} className="border p-4 rounded mb-4 text-black m-3">
                <div className="flex justify-between items-center mb-2 mr-2">
                  <h4 className="font-medium">Place {index + 1}</h4>
                  <button
                    type="button"
                    className="text-red-500"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
                </div>

                <input
                  {...register(`places.${index}.name`)}
                  placeholder="Place Name"
                  className="w-full p-2 border rounded mb-2"
                />
                <p className="text-red-500 text-sm">
                  {errors.places?.[index]?.name?.message}
                </p>

                <input
                  {...register(`places.${index}.description`)}
                  placeholder="Description"
                  className="w-full p-2 border rounded mb-2"
                />
                <p className="text-red-500 text-sm">
                  {errors.places?.[index]?.description?.message}
                </p>

                <div className="relative w-full mb-4">
                  <input
                    type="number"
                    min="1"
                    {...register(`places.${index}.duration`)}
                    placeholder="e.g., 2"
                    className="w-full p-2 pr-20 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    days
                  </span>
                </div>

                <p className="text-red-500 text-sm">
                  {errors.places?.[index]?.duration?.message}
                </p>

                {/* Image Type Radio */}
                <div className="mb-2">
                  <label className="mr-4">Image Type:</label>
                  <label className="mr-4">
                    <input
                      type="radio"
                      value="file"
                      {...register(`places.${index}.imageType`)}
                      checked={watchPlaces?.[index]?.imageType === "file"}
                    />{" "}
                    File
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="url"
                      {...register(`places.${index}.imageType`)}
                      checked={watchPlaces?.[index]?.imageType === "url"}
                    />{" "}
                    URL
                  </label>
                  <p className="text-red-500 text-sm">
                    {errors.places?.[index]?.imageType?.message}
                  </p>
                </div>

                {/* Conditionally render File or URL input */}
                {watchPlaces?.[index]?.imageType === "file" ? (
                  <>
                    <input
                      type="file"
                      {...register(`places.${index}.imageFile`)}
                      className="w-full p-2 border rounded mb-2"
                    />
                    <p className="text-red-500 text-sm">
                      {errors.places?.[index]?.imageFile?.message}
                    </p>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      {...register(`places.${index}.imageUrl`)}
                      placeholder="https://example.com/image.jpg"
                      className="w-full p-2 border rounded mb-2"
                    />
                    <p className="text-red-500 text-sm">
                      {errors.places?.[index]?.imageUrl?.message}
                    </p>
                  </>
                )}
              </div>
            ))}

            <button
              type="button"
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-3"
              onClick={() =>
                append({
                  name: "",
                  description: "",
                  duration: "",
                  imageType: "file",
                  imageFile: null,
                  imageUrl: "",
                })
              }
            >
              + Add Place
            </button>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              className="w-full py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              onClick={() => onClose()}
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
