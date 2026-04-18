function StudentCard({ course }) {
    return (
        <div
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

            {course.grade < 50 && course.attending === false && <p>At risk</p>}
            {course.grade >= 85 && <p>Eligible for distinction</p>}
        </div>
    );
}

export default StudentCard;