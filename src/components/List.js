import React from 'react';
import Card from './Card';


class List extends React.Component {
    render(){
        return (
            <section className="List">
                <h2 className="List-header">First List</h2>
                
                <Card />
                <h2 className="List-header">Second List</h2>
                <Card />
                <h2 className="List-header">Third List</h2>
                <Card />
            </section>
        );
    }
}

export default List;