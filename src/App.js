import React from 'react'
import Note from './components/Note'
import todoData from "./todoData";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            todoData: todoData
        }
    }

    render() {
        const components = this.state.todoData.map((item) => <Note data={item} key={item.id}/>)
        return (
            <div className="todo-list">
                {components}
            </div>
        )
    }
}

export default App