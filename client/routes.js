import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route} from 'react-router-dom'
import Nodes from './components/nodes'

class Routes extends Component {
    render(){
        return (
            <div>
                <Route exact path="/nodes" component={Nodes} />
            </div>
        )
    }
}

export default withRouter(connect(null, null)(Routes))