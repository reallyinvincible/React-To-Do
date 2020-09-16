import React from 'react'
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

class NewTask extends React.Component {

    constructor() {
        super()
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            task: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Input type="text" value={this.state.task} name="taskText" placeholder="Enter task description"
                       onChange={this.handleChange}/>
                <Button variant="raised" color="primary" name="addTask" onClick={() => {
                    if (this.state.task.length > 0) {
                        this.props.handleAddTask(this.state.task)
                    }
                    this.setState({
                        task: ""
                    })
                }}>Add new task</Button>
                <br/>
            </div>
        )
    }
}

export default NewTask