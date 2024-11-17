import './App.css';
import React, { useState } from 'react';
import Container from './components/Container';
import NewForm from './components/NewForm';
import Modal from './components/Modal';


function App() {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => {
    setShowModal(false)
  }
  

  return (
            <div className="App" >
              <Container></Container>
              {showModal && (<Modal handleClose={handleClose}> <NewForm></NewForm> </Modal>)}
              <div>
                <button className='button_plus' onClick={() => setShowModal(true)}>+</button>
              </div>
            </div>
            
  );
}

export default App;
