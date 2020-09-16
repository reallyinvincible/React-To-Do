import React from 'react'
import Checkbox from 'muicss/lib/react/checkbox';

function Note(props) {

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (

        <div className="todo-item">
            <Checkbox className="checkbox" type="checkbox" onChange={() => props.handleChange(props.data.id)} checked={props.data.completed}/>
            <p style={props.data.completed? completedStyle: null}>{props.data.text}</p>
        </div>
    );
}

export default Note