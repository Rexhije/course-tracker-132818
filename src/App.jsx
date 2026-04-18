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
            <div
                key={course.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "8px",
                }}
            >
              <p>ID: {course.id}</p>
              <p>Course Name: {course.name}</p>
              <p>Credits: {course.credits}</p>
              <p>Grade: {course.grade}</p>
              <p>Attending Regularly: {course.attending ? "Yes" : "No"}</p>
              <p>Difficulty: {course.difficulty}</p>
            </div>
        ))}
      </div>
  );
}

export default App;