import React, { Component } from 'react'
import { BiDollar } from "react-icons/bi"; 
class Card extends Component {
    
    render() {
        const {itemsData} = this.props;
        return (
        <>
        <div className="card" style={{width: '24rem'}}>
            <img  src={itemsData.image} className="card-img-top" alt="product-image"/>
            <p className="price-text"><BiDollar/>{itemsData.price}</p>
            <div className="card-body">
                <h5 className="card-title">{itemsData.title}</h5>
                <p className="card-text">{itemsData.description}</p>
                
            </div>
        </div>
        </>
        )
    }
}
export default Card;