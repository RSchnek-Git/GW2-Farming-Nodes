import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="navlink">
                        <Link to="/home">
                            Home
                        </Link>
                        <Link to="/nodes">
                            Ore Nodes
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapState = state => {
    return {

    }
}

const mapDispatch = dispatch => {
    return {

    }
}

export default connect(mapState, mapDispatch)(Navbar)