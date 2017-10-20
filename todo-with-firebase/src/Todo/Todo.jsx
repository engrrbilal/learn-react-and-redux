import React, { Component } from 'react';
import './Todo.css';
import PropTypes from 'prop-types';

class Todo extends Component{

    constructor(props){
        super(props);
        this.noteContent = props.noteContent; 
        this.noteId = props.noteId; 
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(){
        return(
            <div className="note fade-in">
                <span className="closebtn" 
                      onClick={() => this.handleRemoveNote(this.noteId)}>
                      &times;
                </span>
                <p className="noteContent">{ this.noteContent }</p>
            </div>
        )
    }
}

Todo.propTypes = {
    noteContent: PropTypes.string
}

export default Todo;
