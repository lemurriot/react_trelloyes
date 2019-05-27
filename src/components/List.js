import React from 'react';
import Card from './Card';


function List(props){

    // const cardList = props.cardContent.map(card => {
    //         <Card key={card.id} title={card.title} content={card.content} />
    // })
     
        return (
            <section className="List">
                <h2 className="List-header">{props.header}</h2>
                <div className="List-cards">
                    {props.cardContent.map(card => 
                        <Card key={card.id} title={card.title} content={card.content} />
                    )}
                   <button type="button">Delete</button>
                </div>
            </section>
        )
 
}

export default List