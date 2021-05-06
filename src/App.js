import { Component } from 'react';
import './App.css';

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: '',
  }

  updateDraft = event => this.setState({ draft: event.target.value })

  addNewTask = () => {
    const { tasks, draft} = this.state;
    // console.log(tasks);
    // const list = tasks;
    // list.push({text: draft});
    this.setState({
      tasks: [...tasks, {text: draft}],
      draft: '',
    })
  }

  render(){
    const { tasks, draft } = this.state;

    return (
      <div>
        <h1>{this.props.title}</h1>
        {tasks.map(task => <ToDoItem key={task.text} task={task} />)}
        <input type="text" value={draft} onChange={this.updateDraft} />
        <button onClick={this.addNewTask}>Dodaj task do listy</button>
      </div>
    )
  }
}

class ToDoItem extends Component {
  static defaultProps = {
    done: false,
  }

  state = {
    done: this.props.task.done,
  }

  toggleDone = () => {
    this.setState({
      done: !this.state.done
    })
  }

  render(){
    const {text} = this.props.task;
    const {done} = this.state;

    const propsy = this.props.task;
    console.log(propsy);

    return (
      <div onClick={this.toggleDone} className={done ? 'doneToDo': ''}>
        <p>{text}</p>
      </div>
    )
  }
}

class App extends Component {
  myTask = [
    { text: 'Learn redux', done: false },
    { text: 'Go for a walk', done: true},
    { text: 'Play tennis <3', done: false},
  ]
  render(){
  return (
    <div>
      <ToDoList title='My stuff' tasks={this.myTask} />
    </div>
  );
  }
}

export default App;
