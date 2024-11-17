import './Card.css'
import React, { useState } from 'react';
import Modal from './Modal';
import UpdateForm from './UpdateForm'


function Card(props) {

    const [showModal, setShowModal] = useState(false)
    const handleClose = () => {
        setShowModal(false)
    }
    

    return (
        <div className='flip-card'>
        
            <div className='flip-card-inner' >
            
                <div className='flip-card-front' style={{background: props.card.color}}>
                    <p className='card-content'> {(props.card.front).toUpperCase()} </p>
                </div>
                <div className='flip-card-back' style={{background: props.card.color}}>
                    <span onClick={() => {setShowModal(true)}} class="material-symbols-outlined" >edit</span>
                    <p className='card-content'> {(props.card.back).toUpperCase()} </p>
                </div>
            </div>
        
        {showModal && <Modal handleClose={handleClose}> <UpdateForm card={props.card}></UpdateForm> </Modal>}
        
        </div>
    )
    
}

export default Card;