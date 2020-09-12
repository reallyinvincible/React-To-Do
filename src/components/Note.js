import React from 'react'

function Note(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.data.completed}/>
            <p>{props.data.text}</p>
        </div>
    );
}

export default Note