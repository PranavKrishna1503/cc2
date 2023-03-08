import React, { useState, useEffect } from "react";
import axios from "axios";


function TodoItem() {
    const [todo, setTodo] = useState({
        id:'',
        department:'',
        age:'',
        name:'',
        role:'',
   
    });

    const handleChange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8080/put`, todo)
            .then((res) => {
                console.log(res.data);
                alert('Update Successful!');
                setTodo({ id:'', department:'', age:'',name:'', role:''});
            })
            .catch(error => {
                alert('Update Failed.');
                console.error(error);
            });
    };
    return (
        <div className="body">
            <div><h1 id="a">Update Details</h1></div>
            <form className="hello" onSubmit={handleSubmit}>
                
                <div id="d">
                    <div id="b">Id : </div>
                    <input name="id" type="text" id="c" value={todo.id} onChange={handleChange}/>
                </div>
                
                <div id="d">
                    <div id="b">Name : </div>
                    <input name="name" type="text" id="c" value={todo.name} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">Department : </div>
                    <input name="department" type="text" id="c" value={todo.department} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">Age : </div>
                    <input name="age" type="text" id="c" value={todo.age} onChange={handleChange}/>
                </div>
                
                
                <div id="d">
                    <div id="b">Role : </div>
                    <input name="role" id="c" value={todo.role} onChange={handleChange}/>
                </div>

                
                
                <br/>
                <button type="submit" onClick="window.location.reload();">Update</button>
                <br/>
                
            </form>
        </div>
    );
  }
export default TodoItem;