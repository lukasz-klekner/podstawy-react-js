import { Component } from 'react';

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

      return (
        <div onClick={this.toggleDone} className={done ? 'doneToDo': ''}>
          <p>{text}</p>
        </div>
      )
    }
  }

  export default ToDoItem;