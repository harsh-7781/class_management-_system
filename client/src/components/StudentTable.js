import React, { useState, useEffect } from "react";
import './StudentTable.css';  
import './Shimmer.css'; 

const StudentTable = () => {
  const loadStudents = () => {
    // const savedStudents = JSON.parse(localStorage.getItem("students"));
    const savedStudents = [
        { id: 103, name: "John Doe", age: 20, department: "Computer Science" },
        { id: 103, name: "Jane Smith", age: 22, department: "Mathematics" }];
    return savedStudents 
  }
  const [students, setStudents] = useState(loadStudents());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  
  const [newStudent, setNewStudent] = useState({ id: '', name: '', age: '', department: '' });
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

 
  const handleEditClick = (student) => {
    setIsLoading(true);  
    setTimeout(() => { 
      setCurrentStudent(student);
      setIsModalOpen(true);
      setIsLoading(false);  
    }, 1000);  
  };

 
  const handleAddStudent = () => {
    if (students.some((student) => student.id === newStudent.id)) {
      setError("ID already exists. Please use a unique ID.");
      return;
    }
    setStudents((prev) => [...prev, newStudent]);
    setIsAddModalOpen(false);
    setNewStudent({ id: '', name: '', age: '', department: '' });
    setError(""); 
  };

  const handleUpdate = async () => {
    if (students.some((student) => student.id === currentStudent.id && student.id !== currentStudent.id)) {
      setError("ID already exists. Please use a unique ID.");
      return;
    }

try {
    const response = await fetch(`http://localhost:9998/update_students/${currentStudent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(currentStudent),
        
      });
      console.log("response",response)

} catch (error) {
    console.log("Error in update",error)
}
    setStudents((prev) =>
      prev.map((student) =>
        student.id === currentStudent.id ? currentStudent : student
      )
    );
    setIsModalOpen(false);
    setError("");
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (currentStudent) {
      setCurrentStudent({ ...currentStudent, [name]: value });
    } else {
      setNewStudent({ ...newStudent, [name]: value });
    }
  };

  
  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <div className="student-table-container">
      <h1 className="header">Student List</h1>

      <button
        onClick={() => setIsAddModalOpen(true)}
        className="add-button"
      >
        Add New Student
      </button>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <table className="student-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.department}</td>
              <td>
                <button onClick={() => handleEditClick(student)}>Edit</button>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Student Details</h2>

            {isLoading ? (
              <div className="shimmer-container">
                <div className="shimmer"></div>
              </div>
            ) : (
              <form>
                <div>
                  <label>ID:</label>
                  <input
                    type="text"
                    value={currentStudent.id}
                    disabled
                  />
                </div>
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={currentStudent.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Age:</label>
                  <input
                    type="number"
                    name="age"
                    value={currentStudent.age}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Department:</label>
                  <input
                    type="text"
                    name="department"
                    value={currentStudent.department}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            )}

            <div className="modal-actions">
              <button onClick={handleUpdate}>Save</button>
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Student Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Student</h2>
            <form>
              <div>
                <label>ID:</label>
                <input
                  type="text"
                  name="id"
                  value={newStudent.id}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newStudent.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={newStudent.age}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Department:</label>
                <input
                  type="text"
                  name="department"
                  value={newStudent.department}
                  onChange={handleInputChange}
                />
              </div>
            </form>
            <div className="modal-actions">
              <button onClick={handleAddStudent}>Add Student</button>
              <button onClick={() => setIsAddModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentTable;
