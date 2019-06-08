import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Tasks from './components/Tasks';
import Navbar from './components/Navbar'
import TaskForm from './components/TaskForm';
import About from './components/About';
import Posts from './components/Posts';

// data
import tasks from './sample/tasks.json';

class App extends React.Component {

  state = {
    tasks: tasks
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    })
    this.setState({ tasks: newTasks })
  }

  deleteTask = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks })
  }

  addTask = title => {
    const newTask = {
      id: this.state.tasks.length,
      title,
      done: false
    }
    this.setState({ tasks: [...this.state.tasks, newTask] });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <TaskForm addTask={this.addTask} />
              <Tasks
                tasks={this.state.tasks}
                checkDone={this.checkDone}
                deleteTask={this.deleteTask}
              />
            </React.Fragment>
          )}>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/posts" component={Posts}/>
        </div>
      </Router>
    );
  }
}


export default App;
