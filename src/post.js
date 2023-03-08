import axios from "axios";
import React, {Component} from 'react';
import './App.css';

class Request extends Component {
    constructor(props) {
      super(props);
      this.state = {
            id:'',
            department:'',
            age:'',
            name:'',
            role:'',
      };
    }
  
    handleidChange=(event)=>{
        this.setState({id: event.target.value});
    };
    handledepartmentChange=(event)=>{
        this.setState({department: event.target.value});
    };
    handleageChange=(event)=>{
        this.setState({age: event.target.value});
    };
    handlenameChange=(event)=>{
        this.setState({name: event.target.value});
    };
    handleroleChange=(event)=>{
        this.setState({role: event.target.value});
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            department: this.state.department,
            age: this.state.age,
            name: this.state.name,
            role: this.state.role,
        };
        axios.post('http://localhost:8080/post', data)
    };
    render(){
        return (
            <div className="body">
                    <div><h1 id="a">EMPLOYEE ROLE MANAGEMENT</h1></div>
                <form className="hello" onSubmit={this.handleSubmit}>
                    <br/>
                    <div id="d">
                        <div id="b">Id : </div>
                        <input type="text" id="c" value={this.state.id} onChange={this.handleidChange}/>
                    </div>

                    <div id="d">
                        <div id="b">Department : </div>
                        <input type="tel" id="c" value={this.state.department} onChange={this.handledepartmentChange}/>
                    </div>

                    <div id="d">
                        <div id="b">Age : </div>
                        <input id="c" value={this.state.age} onChange={this.handleageChange}/>
                    </div>

                    <div id="d">
                        <div id="b">Name : </div>
                        <input id="c" value={this.state.name} onChange={this.handlenameChange}/>
                    </div>
                   
                    
                    <div id="d">
                        <div id="b">Role : </div>
                        <input id="c" value={this.state.role} onChange={this.handleroleChange}/>
                    </div>
                  
                    
                    <br/> 
                    <button type="submit">Submit</button>
                     {/* <button type="reset">Reset</button>  */}
                    <br/>
                    <br/>
                </form>
            </div>
        );
    }
}
export default Request;