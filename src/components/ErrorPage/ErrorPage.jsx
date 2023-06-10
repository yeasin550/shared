import { Link, useRouteError } from "react-router-dom";
// import useTitle from "../../hooks/useTitle";
const ErrorPage = () => {
//   useTitle("Error");
  const { error, status } = useRouteError();
  return (
    <>
      <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="">
            <img
              src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1684682793~exp=1684683393~hmac=244a1e675609818bc5178d6843df6c8b2a5d87b0ec51c3d1e635dc671514903f"
              alt=""
              className=" w-96"
            />
          </div>

          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600 hidden">
              <span className="sr-only">Error</span> {status || 404}
            </h2>
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
            <Link
              to="/"
              className="bg-green-500 text-white font-bold px-3 py-2 rounded-lg"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
