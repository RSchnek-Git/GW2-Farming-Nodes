import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllThunk} from '../store/nodes'
import {Link} from 'react-router-dom'

class NodeList extends Component {
    constructor(props){
        super(props)
        this.state = {
            status: this.props.nodes.status
        }
    }

    componentDidMount() {
        this.props.getAllNodes()
    }

    render() {
        const nodes = this.props.nodes
        const waypointurl = this.state.status ? "waypointT.png" : "waypointF.png"
        return (
            <div>
                <nav className="sublink">
                    <Link to="/nodes">
                        All
                    </Link>
                    <Link to="/iron">
                        Iron Only
                    </Link>
                    <Link to="/plat">
                        Platinum Only
                    </Link>
                </nav>
                <div>
                    <ol>
                        {nodes.map(node => (
                            <li key={node.id}>
                                <h4>{node.area}</h4>
                                <p><img src={node.oreType + ".png"} alt={node.oreType} style={{verticalAlign: "middle"}} /> <img src={waypointurl} alt={node.code} style={{verticalAlign: "middle"}} /> {node.waypoint}</p> 
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    getAllNodes: () => {
        dispatch(getAllThunk())
    }
})

const mapStateToProps = state => ({
    nodes: state.nodes.nodes
})

const Nodes = connect(mapStateToProps, mapDispatchToProps)(NodeList)

export default Nodes