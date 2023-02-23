import React from 'react';
import './App.css';

const SlotM = (props) => {
  // let x = props.x;
  // let y = props.y;
  // let z = props.z;

  //object destructuring
  let { x, y, z } = props;

  var res = '';
  x === y && y === z
    ? (res = 'Hurrah!! You are winner!!')
    : (res = 'Alas!! You are not a winner! ');

  return (
    <>
      <div className='slot_inner'>
        <h1>
          {props.x} {props.y} {props.z}
        </h1>
        <h1>{res}</h1>
        <hr />
      </div>
    </>
  );
};

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
