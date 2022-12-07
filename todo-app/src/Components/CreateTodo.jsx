import axios from "axios";
import React from "react";

import {Link} from 'react-router-dom';


export class CreateTodo extends React.Component{
    constructor(){
        super();
        this.state = {title:"",description:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const todo = {
            title:this.state.title,
            description:this.state.description
        };
        axios.post('http://localhost:8000/api/todo/',this.state)
             .then((res)=> {
                this.setState({title:"",description:""});
                console.log(res.data.message);
             })
             .catch((err)=>{
                console.log("Error Creating a Todo");
                console.log(err.message);
             });
    }

    render(){
        return (
            <div>
                <section>
                    <Link to='/'>
                        <button type="button">Back</button>
                    </Link>
                </section>
                <section>
                    <form
                        onSubmit={this.handleSubmit}
                        noValidate
                    >
                        <label htmlFor="title">Title</label>
                        <input type="text" onChange={this.handleChange} name="title" value={this.state.title}/>
                        <label htmlFor="description">Description</label>
                        <input type="text" onChange={this.handleChange} name="description" value={this.state.description}/>
                        <button type="submit">Create Todo</button>
                    </form>
                </section>

            </div>
        );
    }
}