import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const EmployeeGetPage = () => {
  const [employee, setemployee] = useState([]);

  useEffect(() => {
    const fetchemployee = async () => {
      const response = await axios.get('http://localhost:8080/get');
      setemployee(response.data);
    };
    fetchemployee();
  }, []);

  
    return (
        <div className="body">
            <div>
                <h1>
                    EMPLOYEE DETAILS
                </h1>
            </div>
            <div className="table">
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Department</th>
                            <th>Age</th>
                            <th>Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map(quote =>(
                            <tr key={quote.id}>
                            <td>{quote.id}</td>
                            <td>{quote.department}</td>
                            <td>{quote.age}</td>
                            <td>{quote.name}</td>
                            <td>{quote.role}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default EmployeeGetPage;