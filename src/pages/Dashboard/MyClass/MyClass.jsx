import { FaRegEdit } from "react-icons/fa";

const MyClass = () => {
    return (
      <div className="w-full ml-8">
        <h1 className=" text-3xl font-semibold ">Total Enrolled Students : </h1>
        <div className=" w-full overflow-x-auto mt-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
                <th>X</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td> Yeasin </td>
                <td>yeasin@gmail.com</td>
                <td>Pending</td>

                <td>
                  <button className="bg-[#F4C152] hover:bg-[#F4C100] rounded p-3">
                    <FaRegEdit className="text-2xl text-white"></FaRegEdit>
                  </button>
                </td>
                <td>
                  <button className="bg-red-600 hover:bg-red-400 rounded px-3 py-2 text-white">
                    Feedback
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyClass;