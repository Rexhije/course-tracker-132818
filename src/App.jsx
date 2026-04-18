import StudentCard from "./components/StudentCard.jsx";

const courses = [
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
  return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Rexhije Dehari</h1>
        <h2>Student ID: 132818</h2>
        <p>The courses below are my enrolled courses for this semester.</p>

        {courses.map((course) => (
            <StudentCard key={course.id} course={course} />
        ))}
      </div>
  );
}

export default App;