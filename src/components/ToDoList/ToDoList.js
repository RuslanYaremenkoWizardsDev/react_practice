import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToDoItem from '../ToDoItem'

class ToDoList extends Component {
    render(){
        const { items = [] } = this.props
        return (
        <div className="list">
            {items.length ?
                items.map((item)=>(
                    <ToDoItem item={item}/>
                ))
            : <h5>There are no ToDos</h5>}
        </div>)
    }
} 

ToDoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, text: PropTypes.string }))
}

ToDoList.defaultProps = {
    items: []
}

export default ToDoList;