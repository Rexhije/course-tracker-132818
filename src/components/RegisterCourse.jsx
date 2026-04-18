import { useState } from "react";

function RegisterCourse({ setCourses }) {
    const [form, setForm] = useState({
        name: "",
        credits: "",
        grade: "",
        attending: false,
        difficulty: "Easy",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name.trim()) {
            alert("Course name cannot be empty.");
            return;
        }

        const gradeNumber = Number(form.grade);

        if (gradeNumber < 5 || gradeNumber > 10 || Number.isNaN(gradeNumber)) {
            alert("Grade must be a number from 5 to 10.");
            return;
        }

        setCourses((prevCourses) => [
            ...prevCourses,
            {
                id: Date.now(),
                name: form.name,
                credits: Number(form.credits),
                grade: gradeNumber,
                attending: form.attending,
                difficulty: form.difficulty,
            },
        ]);

        setForm({
            name: "",
            credits: "",
            grade: "",
            attending: false,
            difficulty: "Easy",
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <h2>Register Course</h2>

            <div>
                <label>Course name: </label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Credit hours: </label>
                <input
                    type="number"
                    name="credits"
                    value={form.credits}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Current grade: </label>
                <input
                    type="number"
                    name="grade"
                    value={form.grade}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Attending regularly: </label>
                <input
                    type="checkbox"
                    name="attending"
                    checked={form.attending}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Difficulty: </label>
                <select
                    name="difficulty"
                    value={form.difficulty}
                    onChange={handleChange}
                >
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>

            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterCourse;