import { useState } from "react";
import './NewForm.css'

function UpdateForm(props) {
    const id = props.card._id;
    const [front, setFront] = useState(props.card.front)
    const [back, setBack] = useState(props.card.back)
    const [color, setColor] = useState(props.card.color)
    const [error, setError] = useState(null)
    
    const handleSubmit = async(e)=> {
        e.preventDefault();

        const card = {front, back, color}
        const response = await fetch('http://localhost:4000/api/cards/' + id, {
            method: 'PATCH',
            body: JSON.stringify(card),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        const json = await response.json() 
        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setError(null)
            console.log("card updated: ", json)
          }
    }

    return ( 
        <div>
            <form className="submit-form" onSubmit={handleSubmit}>
                <label>front</label>
                <input  type="text" value={front}  onChange={(e)=>setFront(e.target.value)} ></input>
                <label>back</label>
                <input  type="text" value={back}  onChange={(e)=>setBack(e.target.value)} ></input>
                {error && <div className="error">{error}</div>}      
                <div className="color-pick-container">

                <label className="checkmark-container">
                    <input className="input-1" type="radio"  name="radio" checked={color === "red"} onChange={(e) => {setColor("red")}}></input>
                    <span className="checkmark checkmark1"></span>
                </label>
                <label className="checkmark-container">
                    <input className="input-2" type="radio" name="radio" checked={color === "blue"} onChange={e => {setColor("blue")}} ></input>
                    <span className="checkmark checkmark2"></span>
                </label>
                <label className="checkmark-container">
                    <input className="input-3" type="radio" name="radio" checked={color === "green"} onChange={e => {setColor("green")}}></input>
                    <span className="checkmark checkmark3"></span>
                </label>
                <label className="checkmark-container">
                    <input className="input-4" type="radio" name="radio" checked={color === "yellow"} onChange={e => setColor("yellow")}></input>
                    <span className="checkmark checkmark4"></span>
                </label>
                </div>
                <button>submit</button>
            </form>
        </div>
     );
}

export default UpdateForm;