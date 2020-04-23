import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPlatinumThunk} from '../store/nodes'
import {Link} from 'react-router-dom'

class NodeList extends Component {
    componentDidMount() {
        this.props.getPlatNodes()
    }

    render() {
        const nodes = this.props.nodes
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
                                <h4>{node.area} *{node.oreType}*</h4>
                                <p>{node.waypoint}</p>
                            </li>
                        ))}
                    </ol>
                </div>
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