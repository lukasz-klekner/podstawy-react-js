import { Component } from 'react';
import styled from 'styled-components'

const Item = styled.div`
  background: #343744;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 7px;
  color: ${props => props.done ? '#1fd84d' : '#c7c8cb'};
  text-decoration: ${props => props.done ? 'line-through' : 'auto'};
`

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
        <Item onClick={this.toggleDone} done={done}>
          <p>{text}</p>
        </Item>
      )
    }
  }

  export default ToDoItem;