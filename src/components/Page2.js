import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { updateFood, updateBand, updateBook } from './../ducks/reducer'
import { connect } from 'react-redux'

class Page2 extends Component {
    render(){
        return(
            <div>
                <h1>Favorite Food</h1>
                <input onChange={(e)=>this.props.updateFood(e.target.value)}/>
                <h1>Favorite Band</h1>
                <input onChange={(e)=>this.props.updateBand(e.target.value)}/>
                <h1>Favorite Book</h1>
                <input onChange={(e)=>this.props.updateBook(e.target.value)}/>
                <Link to='/results'>
                    <button>Next Page</button>
                </Link>
            </div>
        )
    }
}
export default connect(null, {updateFood, updateBand, updateBook})(Page2)