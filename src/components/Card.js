import React from 'react';


function Card(props){
    return (
        <div className="card_container">
            <h3>
                {props.title}
            </h3>
            <p>{props.content}</p>
        </div>
    );
}



export default Card;