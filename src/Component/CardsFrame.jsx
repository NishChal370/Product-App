import React, { Component } from 'react'
import Card from './Card';

class CardsFrame extends Component {
    
    render() {
        const {data}= this.props.fetchedData;
        const MensItem = data.map((items, index)=>
            (items.category === 'men\'s clothing')  // if item is for mens
                ?<>
                    <Card key= {index+"mn"} itemsData={items}/>
                </>
                : ''
            
        );
        const WomenItem = data.map((items, index)=>
            (items.category === 'women\'s clothing')// if item is for womens
                ?<Card key= {(index.toString()+"wm")} itemsData={items}/>
                : ''
        );
        const jeweleryItem = data.map((items, index)=>// if item is for jeweller
            (items.category === 'jewelery')
                ?<Card key= {(index.toString()+'je')} itemsData={items}/>
                : ''
        );
        const electronicsItem = data.map((items, index)=>// if item is for ekectoemices
            (items.category === 'electronics')
                ?<Card key= {(index.toString()+"el")} itemsData={items}/>
                : ''
        );
        return (
            <>
            <h5 key='tit1' className="card-category">Men's clothing</h5>
            <div key='d1' className ="box">
                {MensItem}
            </div>
            <h5 key='tit2' className="card-category">Women's clothing</h5>
            <div key='d2' className ="box">
                {WomenItem}
            </div>
            <h5 key='tit3' className="card-category">Jewellery Items</h5>
            <div key='d3' className ="box">
                {jeweleryItem}
            </div>
            <h5 key='tit4' className="card-category">Electronics Items</h5>
            <div key='d4' className ="box">
                {electronicsItem}
            </div>
            </>
        )
    }
}

export default CardsFrame
