import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ToDoItem extends Component {
    render(){
        const { item } = this.props
        return (
            <div className="list__item">
                <p>{item.text}</p>
                <button>Delete</button>
                <button>Edit</button>
            </div>
        )
    }
} 

ToDoItem.propTypes = {
    item: PropTypes.shape({ id: PropTypes.string, text: PropTypes.string }).isRequired
}

export default ToDoItem;