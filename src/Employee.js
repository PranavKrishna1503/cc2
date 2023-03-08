import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      
      {employee.map(employee => (
        <div key={employee.id}>
          {employee.id}
          {employee.department}
          {employee.age}
          {employee.name}
          {employee.role}
        </div>
      ))}
    </div>
  );
};