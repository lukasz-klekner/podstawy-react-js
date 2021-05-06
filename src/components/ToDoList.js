import { Component } from 'react';

import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';

class ToDoList extends Component {
    static defaultProps ={
        tasks: [
            { text: 'Learn redux', done: false },
            { text: 'Go for a walk', done: true},
            { text: 'Play tennis <3', done: false},
          ],
        title: 'My stuff'
    }
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
          <ToDoForm
            onSubmit={this.addNewTask}
            onChange={this.updateDraft}
            draft={draft}
          />
        </div>
      )
    }
  }

export default ToDoList;