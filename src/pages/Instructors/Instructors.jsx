import { useEffect, useState } from "react";
import InstructorsDetails from "./InstructorsDetails";

const Instructors = () => {
  const [instructor, setInstructor] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
        // console.log(data);
      });
}, [])

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {
          instructor.map(ins => <InstructorsDetails key={ins._id} ins={ins}></InstructorsDetails>)
        }
      
      </div>
    );
};

export default Instructors;