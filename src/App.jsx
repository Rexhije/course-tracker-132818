import { useState } from "react";
import StudentCard from "./components/StudentCard";
import RegisterCourse from "./components/RegisterCourse";

const initialCourses = [
  {
    id: 1,
    name: "Client Side Programming",
    credits: 6,
    grade: 9,
    attending: true,
    difficulty: "Moderate",
  },
  {
    id: 2,
    name: "Operating Systems",
    credits: 6,
    grade: 8,
    attending: true,
    difficulty: "Hard",
  },
  {
    id: 3,
    name: "Applied Probability and Statistics",
    credits: 6,
    grade: 7,
    attending: false,
    difficulty: "Moderate",
  },
];

function App() {
  const [courses, setCourses] = useState(initialCourses);

  return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Rexhije Dehari</h1>
        <h2>Student ID: 132818</h2>
        <p>The courses below are my enrolled courses for this semester.</p>

        {courses.map((course) => (
            <StudentCard key={course.id} course={course} />
        ))}

        <RegisterCourse setCourses={setCourses} />
      </div>
  );
}

export default App;