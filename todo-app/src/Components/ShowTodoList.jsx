import axios from "axios";
import React from "react";

const TodoCard = (props) => {
    const {_id,title,description} = props.data;
    return (
        <li key={_id}>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div>
                <button>edit</button>
                <button name={_id} onClick={props.handleDelete}>delete</button>
            </div>
        </li>
    );
}

export class ShowTodoList extends React.Component{
    constructor(){
        super();
        this.state ={
            todos: []
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        console.log(e.target);
        axios.delete(`http://localhost:8000/api/todo/${e.target.name}`);

        this.setState((state) =>({
            todos: state.todos.filter((todo)=>todo._id!==e.target.name)
        }));
    }
    
    componentDidMount(){
        axios.get("http://localhost:8000/api/todo/")
             .then((res)=>{
                this.setState({todos:res.data});
             })
    }

    render(){
        return (
        <section>
            <section>
                <h1>TODO</h1>
                <ul>
                    {this.state.todos.map((data)=>{
                        return <TodoCard data={data} handleDelete = {this.handleDelete}/>
                    })}
                </ul>
            </section>
        </section>
        );
    }
}
