import { Component } from 'react';

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: '',
  }

  updateDraft = event => this.setState({ draft: event.target.value })

  addNewTask = () => {
    const { tasks, draft} = this.state;
    const list = tasks;
    list.push(draft);
    this.setState({
      tasks: list,
      draft: '',
    })
  }

  render(){
    const { tasks, draft } = this.state;

    return (
      <div>
        <h1>{this.props.title}</h1>
        {tasks.map(task => <div key={task}><p>{task}</p></div>)}
        <input type="text" value={draft} onChange={this.updateDraft} />
        <button onClick={this.addNewTask}>Dodaj task do listy</button>
      </div>
    )
  }
}

class App extends Component {
  myTask = [
    'Learn redux',
    'Go for a walk',
    'Play tennis <3'
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
