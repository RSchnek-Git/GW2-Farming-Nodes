import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllThunk} from '../store/nodes'
import {Link} from 'react-router-dom'

class NodeList extends Component {
    componentDidMount() {
        this.props.getAllNodes()
    }

    render() {
        const nodes = this.props.nodes
        return (
            <div>
                <ol>
                    {nodes.map(node => (
                        <li key={node.id}>
                            <h4>{node.area} *{node.oreType}*</h4>
                            <p>{node.waypoint}</p>
                        </li>
                    ))}
                </ol>
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