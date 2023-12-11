import { useState } from "react";
import { useId } from 'react';

let myId = 0;
const AddArticle = (props) =>{
    const [formData, setFormDate] = useState({
        id: '',
        title: '',
        description: ''
    })

    const handleChange = (event)=>{
        setFormDate(
            {
                ...formData,
                [event.target.name]:event.target.value
            }
        )
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        myId += 1
        props.onSave({...formData, id: myId});
    }
    const passwordHintId = useId();
    return(
        <form className="form" onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" name="title" placeholder="Naujienos pavadinimas" className="m-1 form-control" onChange={handleChange} value={formData.title}></input>
            </div>
            <div className="form-group">
                <textarea placeholder="Naujienos tekstas" name="description" className="m-1 form-control" onChange={handleChange} value={formData.description}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Saugoti</button>
            </div>
        </form>
    );
}
export default AddArticle;