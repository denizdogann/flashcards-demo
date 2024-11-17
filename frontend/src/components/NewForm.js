import { useState } from "react";
import './NewForm.css'

function NewForm() {
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')
    const [color, setColor] = useState("#ffd966")
    const [error, setError] = useState(null)
    
    const handleSubmit = async(e)=> {
        e.preventDefault();

        const card = {front, back, color}
        const response = await fetch('http://localhost:4000/api/cards', {
            method: 'POST',
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
            setBack('')
            setFront('')
            console.log('new workout added:', json)
          }
    }

    return ( 
        <div>
            <form className="submit-form" onSubmit={handleSubmit}>
                <label>front</label>
                <input required type="text" value={front} onChange={(e)=>setFront(e.target.value)} ></input>
                <label>back</label>
                <input required type="text" value={back} onChange={(e)=>setBack(e.target.value)} ></input>
                {error && <div className="error">{error}</div>}      
                <div className="color-pick-container">

                <label className="checkmark-container">
                    <input className="input-1" type="radio"  name="radio" checked={color === "#DE6961"} onChange={(e) => {setColor("#DE6961")}}></input>
                    <span className="checkmark checkmark1"></span>
                </label>
                <label className="checkmark-container">
                    <input className="input-2" type="radio" name="radio" checked={color === "#69ABCE"} onChange={e => {setColor("#69ABCE")}} ></input>
                    <span className="checkmark checkmark2"></span>
                </label>
                <label className="checkmark-container">
                    <input className="input-3" type="radio" name="radio" checked={color === "#97B247"} onChange={e => {setColor("#97B247")}}></input>
                    <span className="checkmark checkmark3"></span>
                </label>
                <label className="checkmark-container">
                    <input className="input-4" type="radio" name="radio" checked={color === "#ffd966"} onChange={e => setColor("#ffd966")}></input>
                    <span className="checkmark checkmark4"></span>
                </label>
                </div>
                <button>submit</button>
            </form>
        </div>
     );
}

export default NewForm;