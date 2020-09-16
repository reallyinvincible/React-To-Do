import React from 'react'
import Note from './components/Note'
import todoData from "./todoData";
import NewTask from "./components/NewTask";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            todoData: todoData
        }
        this.handleCompletedChange = this.handleCompletedChange.bind(this)
        this.handleAddTask = this.handleAddTask.bind(this)
    }

    handleCompletedChange(id) {
        this.setState(prevState => {
            const updatedToDoData = prevState.todoData.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item
            })
            return {todoData: updatedToDoData}
        })
        console.log("Changed", id)
    }

    handleAddTask(taskText) {
        this.setState(prevState => {
            let newTodoData = prevState.todoData
            const task = {
                id: newTodoData.length + 1,
                text: taskText,
                completed: false
            }
            newTodoData.push(task)
            return {todoData: newTodoData}
        })
        console.log(this.state.todoData)
        console.log("Added", taskText)
    }

    render() {
        const components = this.state.todoData.map((item) => <Note handleChange={this.handleCompletedChange} data={item}
                                                                   key={item.id}/>)
        return (
            <div className="todo-list">
                <NewTask handleAddTask={this.handleAddTask}/>
                {components}
            </div>
        )
    }
}

export default App