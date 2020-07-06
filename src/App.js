import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'
// import Search from './components/Search';

const todo = [
  {
    task: 'make your bed',
    id: 1,
    completed: false
  },

]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo,

    };
  }

  addTask = taskItem => {
    const newTask = {
      task: taskItem,
      id: new Date(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  toggleTask = taskId => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }
  clearComplete = (e) => {
    e.preventDefault()
    const todo = this.state.todo.filter(todo => !todo.completed)
    this.setState({ todo })
  }



  render() {
    return (
      <div>
        <h2>To Do List</h2>
        {/* <input
          className="search-bar"
          type="search"
          name="searchbar"
          placeholder="Serach Task"
        /> */}
        {/* <Search /> */}
        <TodoForm
          taskSearch={this.taskSearch}
          clearComplete={this.clearComplete}
          addTask={this.addTask}
        />
        <TodoList
          toggleTask={this.toggleTask}
          todo={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
