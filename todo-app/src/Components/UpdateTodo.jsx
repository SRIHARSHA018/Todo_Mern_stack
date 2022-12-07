import {useState} from "react";
import axios from "axios";

export const UpdateTodo = ({_id,handleClose,handleEdited})=>{
    const [data,setData] = useState({title:"",description:""});

    const handleChange = (e) =>{
        setData((data)=>({...data,[e.target.name]:e.target.value}));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log({_id},{data});

        axios.put(`http://localhost:8000/api/todo/${_id}`,data)
             .then((res)=>{
                setData({title:"",description:""});
                console.log(res.data.message);
             })
             .catch((err)=>{
                console.log("Failed to update Todo");
                console.log(err.message);
             })
    }

    return (
        <form
        onSubmit = {(e)=>{
            handleSubmit(e);
            handleEdited();
            handleClose();
        }}
        >
            <label htmlFor="title"> Title</label>
            <input type="text" name="title" onChange={handleChange}></input>
            <label htmlFor="description"> Title</label>
            <input type="text" name="description" onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    )
}