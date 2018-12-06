import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { updateName, updateAge } from './../ducks/reducer'
import { connect } from 'react-redux'

class Page1 extends Component {

    render() {
        return (
            <div>
                <h1>Name</h1>
                <input onChange={(e)=>this.props.updateName(e.target.value)}/>
                <h1>Age</h1>
                <input onChange={(e)=>this.props.updateAge(e.target.value)}/>
                <Link to='/page2'>
                    <button>Next Page</button>
                </Link>
            </div>
        )
    };
}

export default connect(null, {updateName, updateAge})(Page1)