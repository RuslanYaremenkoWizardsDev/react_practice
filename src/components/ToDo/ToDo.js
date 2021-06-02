import React, { Component } from 'react'
import ToDoController from "../ToDoController"
import ToDoList from "../ToDoList"

class ToDo extends Component {
    constructor(props){
        super(props)
        this.state = {
            listItems: []
        }
    }

    handleAddItem = (text) => {
        this.setState((state) => ({ listItems: [...state.listItems, { text, id: new Date() }] }))
    }

    render(){
        return (
            <>
                <ToDoController onAddItem={this.handleAddItem}/>
                <ToDoList items={this.state.listItems}/>
            </>
        )
    }
} 

export default ToDo;