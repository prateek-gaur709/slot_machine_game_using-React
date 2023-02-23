import React from 'react';

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

export default SlotM;
