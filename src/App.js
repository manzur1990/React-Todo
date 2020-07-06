import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'
// import Search from './components/Search';

const initialValue = [
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
      todo: initialValue,

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
      todo: this.state.todo.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task
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
      
        {/* <Search 
        items={this.state.todo}
        /> */}
        <TodoForm
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


// import React from 'react';
// import Search from './components/Search';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       list: ["Go to the store", "Wash the dishes", "Learn some code"]
//     };
//     this.addItem = this.addItem.bind(this);
//     this.removeItem = this.removeItem.bind(this);
//   }

//   addItem(e) {
//     // Prevent button click from submitting form
//     e.preventDefault();

//     // Create variables for our list, the item to add, and our form
//     let list = this.state.list;
//     const newItem = document.getElementById("addInput");
//     const form = document.getElementById("addItemForm");

//     // If our input has a value
//     if (newItem.value != "") {
//       // Add the new item to the end of our list array
//       list.push(newItem.value);
//       // Then we use that to set the state for list
//       this.setState({
//         list: list
//       });
//       // Finally, we need to reset the form
//       newItem.classList.remove("is-danger");
//       form.reset();
//     } else {
//       // If the input doesn't have a value, make the border red since it's required
//       newItem.classList.add("is-danger");
//     }
//   }

//   removeItem(item) {
//     // Put our list into an array
//     const list = this.state.list.slice();
//     // Check to see if item passed in matches item in array
//     list.some((el, i) => {
//       if (el === item) {
//         // If item matches, remove it from array
//         list.splice(i, 1);
//         return true;
//       }
//     });
//     // Set state to list
//     this.setState({
//       list: list
//     });
//   }

//   render() {
//     return (
//       <div className="content">
//         <div className="container">
//           <section className="section">
// 						<Search items={this.state.list} delete={this.removeItem} />
//           </section>
//           <hr />
//           <section className="section">
//             <form className="form" id="addItemForm">
//               <input
//                 type="text"
//                 className="input"
//                 id="addInput"
//                 placeholder="Something that needs ot be done..."
//               />
//               <button className="button is-info" onClick={this.addItem}>
//                 Add Item
//               </button>
//             </form>
//           </section>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
