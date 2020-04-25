import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getIronThunk} from '../store/nodes'
import {Link} from 'react-router-dom'

class NodeList extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.getIronNodes()
    }

    handleClick(event) {
        event.preventDefault()
        const strToCopy = event.target.alt
        const el = document.createElement('textarea')
        el.value = strToCopy
        el.setAttribute('readonly', '')
        el.style = {position: 'absolute', left: '-9999px'}
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        event.target.src = "waypointT.png"
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
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    getIronNodes: () => {
        dispatch(getIronThunk())
    }
})

const mapStateToProps = state => ({
    nodes: state.nodes.nodes
})

const IronNodes = connect(mapStateToProps, mapDispatchToProps)(NodeList)

export default IronNodes