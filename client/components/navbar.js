import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="navlink-container">
                <nav>
                    <div className="navlink">
                        <Link to="/home">
                            <img src="home.jpg"
                                alt="home"
                                height="22px"
                                width="22px"
                            />
                            Home
                        </Link>
                        <Link to="/nodes">
                            <img src="miningIcon.png"
                                alt="miningIcon"
                                height="22px"
                                width="22px"
                            />
                            Ore Farming
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