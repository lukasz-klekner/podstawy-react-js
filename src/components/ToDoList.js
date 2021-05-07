import { Component } from 'react';
import styled from 'styled-components';

import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';

const Container = styled.div`
    background: #2b2e39;
    margin: 0 auto;
    width: 80%;
    max-width: 600px;
    padding: 14px;
    border-radius: 14px;
    margin-top: 14px;
`

const Header = styled.h1`
    color: #fff;
`

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
        <Container>
          <Header>{this.props.title}</Header>
          {tasks.map(task => <ToDoItem key={task.text} task={task} />)}
          <ToDoForm
            onSubmit={this.addNewTask}
            onChange={this.updateDraft}
            draft={draft}
          />
        </Container>
      )
    }
  }

export default ToDoList;