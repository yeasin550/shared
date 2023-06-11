/* eslint-disable no-unused-vars */
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddNewClass = () => {
  const {user} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const {
    register,
    handleSubmit,
    reset,
     formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        // console.log(imgResponse)
        
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, instructorName, instructorEmail, seats } = data;
          const newClass = {
            name,
            price: parseFloat(price),
            instructorName,
            instructorEmail,
            seats: parseFloat(seats),
            image: imgURL,
          };

          // axiosSecure.post("/menu", newItem).then((data) => {
          axiosSecure
            .post(
              "https://summer-camp-school-server-khaki.vercel.app/classes",
              newClass
            )
            .then((data) => {
              console.log("after posting menu item", data.data);
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your class item added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          console.log(newClass);
        }
      });
  };

  return (
    <div className="w-[700px] mx-auto mb-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-gray-200 p-8 rounded-md"
      >
        <div className="form-control my-3 w-full">
          <label className="label">
            <span className="label-text font-semibold">Class name</span>
          </label>
          <input
            type="text"
            placeholder="Class name"
            className="input input-bordered w-full"
            {...register("name", { required: true, maxLength: 120 })}
          />
        </div>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex gap-5 my-3">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              {...register("instructorName", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Instructor Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              {...register("instructorEmail", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-5 my-3">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Available Seats</span>
            </label>
            <input
              type="number"
              placeholder="Available Seats"
              {...register("seats", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <button className="bg-[#835D23] w-full text-center py-2 px-3 flex text-white items-center gap-2 mt-4 rounded-md">
          Add Item
          <span>
            <FaUtensils></FaUtensils>
          </span>
        </button>
      </form>
    </div>
  );
};

export default AddNewClass;
