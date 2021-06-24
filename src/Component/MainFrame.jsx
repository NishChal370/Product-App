import React, { Component } from 'react'
import CardsFrame from './CardsFrame'

class MainFrame extends Component {
    render() {
        return (
            <div>
                <h1 className="header">Product List</h1>
                <CardsFrame
                    key='00CF'
                    fetchedData ={this.props.stateData}
                />
            </div>
        )
    }
}
export default MainFrame