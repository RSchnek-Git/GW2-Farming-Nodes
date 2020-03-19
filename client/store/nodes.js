import axios from 'axios'

// ACTION TYPES
const GOT_ALL_NODES = 'GOT_ALL_NODES';
const GOT_IRON_NODES = 'GOT_IRON_NODES';
const GOT_PLATINUM_NODES = 'GOT_PLATINUM_NODES';
const GOT_SINGLE_NODE = 'GOT_SINGLE_NODE'

// INITIAL STATE
const initialState = {
    nodes: [],
    selectedNode: {}
}

// ACTION CREATORS
const gotAllNodes = nodes => ({type: GOT_ALL_NODES, nodes});
const gotIronNodes = nodes => ({type: GOT_IRON_NODES, nodes});
const gotPlatinumNodes = nodes => ({type: GOT_PLATINUM_NODES, nodes});
const gotSingleNode = selectedNode => ({type: GOT_SINGLE_NODE, selectedNode})

// THUNKS
export const getAllThunk = () => {
    return async dispatch => {
        try {
            let {data} = await axios.get('/api/nodes')
            dispatch(gotAllNodes(data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const getIronThunk = () => {
    return async dispatch => {
        try {
            let {data} = await axios.get('/api/nodes/iron')
            dispatch(gotIronNodes(data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const getPlatinumThunk = () => {
    return async dispatch => {
        try {
            let {data} = await axios.get('/api/nodes/platinum')
            dispatch(gotPlatinumNodes(data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const getSingleThunk = id => {
    return async dispatch => {
        try {
            let {data} = await axios.get(`/api/nodes/'${id}`)
            dispatch(gotSingleNode(data))
        } catch (error) {
            console.log(error)
        }
    }
}

// REDUCER

export default function(state = initialState, action) {
    switch(action.type){
        case GOT_ALL_NODES:
            return {...state, nodes: action.nodes}
        case GOT_IRON_NODES:
            return {...state, nodes: action.nodes}
        case GOT_PLATINUM_NODES:
            return {...state, nodes: action.nodes}
        case GOT_SINGLE_NODE:
            return {...state, selectedNode: action.selectedNode}
    }
}