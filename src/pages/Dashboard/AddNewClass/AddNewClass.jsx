/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AddNewCard = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target.value;
    const name = form.name.value;
    const class_email = form.class_email.value;
    const instructor_name = form.instructor_name.value;
    const instructor_image = form.instructor_image.value;
    


console.log(name, class_email, instructor_name, instructor_image);
 

  };

  return (
    <div className="w-2/3 ml-10">
      <h1 className="text-center font-bold text-4xl my-12">Add New Card</h1>
      <form className="w-full  mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="class-name"
          >
            Class Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="class-name"
            name="name"
            type="text"
            placeholder="Enter class name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="class-image"
          >
            Class Image
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="class-image"
            type="file"
            name="class_image"
            placeholder="Enter class image URL"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Instructor Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100"
            id="instructor-name"
            type="text"
            name="instructor-name"
            value={user?.name}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="instructor-email"
          >
            Instructor Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100"
            id="instructor-email"
            type="email"
            name="instructor_email"
            value={user?.email}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="available-seats"
          >
            Available Seats
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="available-seats"
            type="number"
            name="available_seats"
            placeholder="Enter available seats"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            name="price"
            step="0.01"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCard;
