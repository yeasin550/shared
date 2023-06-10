import { useEffect, useState } from "react";
import ClassesDetails from "./ClassesDetails";

const Classes = () => {
  const [enrolClasses, setEnrolClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setEnrolClasses(data);
        console.log(data);
      });

  }, [])
  return (
    <div className="mt-5 md:mx-10 grid grid-cols-1 md:grid-cols-3 gap-5">
      {enrolClasses.map((enrol) => (
        <ClassesDetails key={enrol._id} enrol={enrol}></ClassesDetails>
      ))}
    </div>
  );
}
export default Classes;
