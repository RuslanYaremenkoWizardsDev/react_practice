import React, { Component } from 'react';
import Header from '../Header';
import ToDo from '../ToDo';

class App extends Component {
    render(){
        return (
            <>
                <Header/>
                <ToDo/>
            </>
        )
    }
} 

export default App;