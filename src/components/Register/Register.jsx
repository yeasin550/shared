
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
// import { FaGoogle } from "react-icons/fa";
import SocialLogin from "../../pages/Shared/SocialLogin/SocialLogin";


const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
     const navigate = useNavigate();
    //  const location = useLocation();
    //  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

// const handleGoogleSignIn = () => {
//   googleSignIn()
//     .then((result) => {
//       const loggedUser = result.user;
//       console.log(loggedUser);
//       const saveUser = {
//         name: loggedUser.displayName,
//         email: loggedUser.email,
//         role: "student",
//         profile: loggedUser.photoURL,
//       };
//       updateUserProfile(loggedUser.name, loggedUser.photoURL);
//        fetch("http://localhost:5000/users", {
//          method: "POST",
//          headers: {
//            "content-type": "application/json",
//          },
//          body: JSON.stringify(saveUser),
//        })
//          .then((res) => res.json())
//          .then((data) => {
//            if (data.insertedId) {
//              reset();
//              Swal.fire("Good job!", "Login successfully", "success");
     
//               navigate(from, { replace: true });
//            }
//          });



//       // Swal.fire("Good job!", "Login successfully", "success");
     
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };


const onSubmit = (data) => {
  createUser(data.email, data.password).then((result) => {
    const loggedUser = result.user;
    console.log(loggedUser);

    updateUserProfile(data.name, data.photoURL)
      .then(() => {
        const saveUser = {
          name: data.name,
          email: data.email,
          role: "student",
          profile: data.photoURL,
        };
        fetch("https://summer-camp-school-server-khaki.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
      })
      .catch((error) => console.log(error));
  });
};


  // const onSubmit = (data) => {
  //   console.log(data);
  //   //  registration 
  //   createUser(data.email, data.password)
  //     .then(result => {
  //       const loggedUser = result.user;
  //       console.log(loggedUser)
  //       const saveUser = { name: data.name, email: data.email}
  //       fetch(`/http://localhost:5000/users`, {
  //         method: 'POST',
  //         headers: {
  //           'content-type': 'application/json'
  //         },
  //         body: JSON.stringify(saveUser)
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.insertedId) {
  //             Swal.fire("Good job!", "Register successfully", "success");
  //           }
  //         });
        
  //     })
    

               

  // };

  const password = watch("password"); 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register a New Account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  {...register("name", {
                    required: true,
                  })}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                  })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="text-red-500 text-xs mt-1">
                    Please enter a password.
                  </p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="text-red-500 text-xs mt-1">
                    Password must be at least 6 characters long.
                  </p>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <p className="text-red-500 text-xs mt-1">
                    Password must contain at least one capital letter, one
                    special character, and one digit.
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === password,
                  })}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.confirmPassword &&
                  errors.confirmPassword.type === "required" && (
                    <p className="text-red-500 text-xs mt-1">
                      Please confirm your password.
                    </p>
                  )}
                {errors.confirmPassword &&
                  errors.confirmPassword.type === "validate" && (
                    <p className="text-red-500 text-xs mt-1">
                      Passwords do not match.
                    </p>
                  )}
              </div>
            </div>

            <div>
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>
              <div className="mt-1">
                <input
                  {...register("photoURL", {
                    required: true,
                  })}
                  id="photoURL"
                  name="photoURL"
                  type="text"
                  autoComplete="off"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.photoURL && (
                  <p className="text-red-500 text-xs mt-1">
                    Please enter photoURL.
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className=" text-center">
                <p className=" text-gray-600">
                  Already have an account?
                  <Link
                    to="/login"
                    href="/registration"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Login now
                  </Link>
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </div>
            </div>
           <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
