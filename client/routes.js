import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route} from 'react-router-dom'
import Nodes from './components/nodes'
import IronNodes from './components/ironNodes'
import PlatNodes from './components/platNodes'

class Routes extends Component {
    render(){
        return (
            <div>
                <Route exact path="/nodes" component={Nodes} />
                <Route exact path="/iron" component={IronNodes} />
                <Route exact path="/plat" component={PlatNodes} />
            </div>
        )
    }
}

export default withRouter(connect(null, null)(Routes))