import React from 'react';

function MenuButton(props) {

  return (
    <>

          <div className="col" onClick = {props.click}>
            <img src={props.icono} alt={props.alt} />
            <p className="img-text">{props.text}</p>
          </div>

    </>
  );
}

export default MenuButton;
