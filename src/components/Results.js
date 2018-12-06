import React, { Component } from 'react';
// import { updateFood, updateBand, updateBook, updateName, updateAge } from './../ducks/reducer'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { resetState } from './../ducks/reducer';

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name1: '',
            name2: '',
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log(this.state)
        const { name, age, fav1, fav2, fav3, resetState } = this.props
        return (
            <div>
                <Link to='/'><button onClick={resetState}>Restart</button></Link>
                <h1>Name</h1>
                {name}
                <h1>Age</h1>
                {age}
                <h1>Favorite Food</h1>
                {fav1}
                <h1>Favorite Band</h1>
                {fav2}
                <h1>Favorite Book</h1>
                {fav3}
                <input name='input1' onChange={this.handleInput} />
                <input name='input2' onChange={this.handleInput} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { ...state }
}

export default connect(mapStateToProps, {resetState})(Results)