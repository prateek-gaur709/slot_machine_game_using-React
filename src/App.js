import React from 'react';
import './App.css';
import SlotM from './SlotM';

function App() {
  return (
    <>
      <h1 className='heading_style'>
        🎰 Welcome to
        <span style={{ fontWeight: 'bold' }}>Slot Machine Game </span> 🎰
      </h1>
      <div className='slotMachine'>
        <SlotM x='❤️' y='❤️' z='🙋‍♂️' />
        <SlotM x='❤️' y='❤️' z='❤️' />
        <SlotM x='😂' y='❤️' z='🙋‍♂️' />
        <SlotM x='😊' y='😊' z='😊' />
      </div>
    </>
  );
}

export default App;
