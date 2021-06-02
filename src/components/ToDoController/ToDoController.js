import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ToDoController extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }

    handleChangeText = (e) => {
        this.setState({ text: e.target.value })
    }
    
    handleAddItem = () => {
        const {  onAddItem } = this.props
        onAddItem(this.state.text)
        this.setState(()=>({ text: '' }))
    }

    render(){
        return (
            <div className="controller">
                <input value={this.state.text} onChange={this.handleChangeText}></input>
                <button onClick={this.handleAddItem}>Add ToDo</button>
            </div>
        )
    }
} 

ToDoController.propTypes = {
    onAddItem: PropTypes.func.isRequired
}

export default ToDoController;