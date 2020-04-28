import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPlatinumThunk} from '../store/nodes'
import {Link} from 'react-router-dom'
import CopyToClipboard from './Functions'

class NodeList extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.getPlatNodes()
    }

    handleClick(event) {
        event.preventDefault()
        CopyToClipboard(event.target.alt)
        event.target.src = "waypointT.png"
    }

    render() {
        const nodes = this.props.nodes
        return (
            <div className="main">
                <nav className="sublink-container">
                    <Link to="/nodes">
                        All
                    </Link>
                    <Link to="/iron">
                        Iron Only
                    </Link>
                    <Link to="/plat" className="selected-link">
                        Platinum Only
                    </Link>
                </nav>
                <div className="body">
                    <div className="start">
                    <h4>Start at Lion's Arch</h4>
                    </div>
                    <ol>
                        {nodes.map(node => (
                            <li key={node.id}>
                                <h4>{node.area}</h4>
                                <p>
                                    <img 
                                        src={node.oreType + ".png"}
                                        alt={node.oreType}
                                        style={{verticalAlign: "middle"}}
                                    />
                                    <img className="cursorButton"
                                        src="waypointF.png"
                                        alt={node.code}
                                        style={{verticalAlign: "middle"}}
                                        onClick={this.handleClick}
                                    /> 
                                {node.waypoint}
                                </p> 
                            </li>
                        ))}
                    </ol>
                </div>
                <p id="copy-toast">Waypoint Copied!</p>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    getPlatNodes: () => {
        dispatch(getPlatinumThunk())
    }
})

const mapStateToProps = state => ({
    nodes: state.nodes.nodes
})

const PlatNodes = connect(mapStateToProps, mapDispatchToProps)(NodeList)

export default PlatNodes