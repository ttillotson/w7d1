import React from 'react';
import uniqueId from '../../util/util.js';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      completed: false,
    };
    this.click = this.click.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    this.setComplete = this.setComplete.bind(this);
  }


  setTitle(e){
    const title = e.target.value;
    this.setState({ title });
  }

  setComplete(e){
    const completed = Boolean(e.target.checked);
    this.setState({ completed });
  }

  setBody(e){
    const body = e.target.value;
    this.setState({ body });
  }

  resetFields() {
    this.setState({ title: '', body: '', completed: false });
  }

  click(e) {
    e.preventDefault();

    this.props.createTodo({ title: this.state.title,
                           body: this.state.body,
                           completed: this.state.completed
                         })
    .then(() => this.resetFields());
  }

  render() {
    const {title, body, completed} = this.state;
    return (
      <form onSubmit={this.click}>
        <h3>Create a New Todo</h3>
        <label>Title
          <input onChange={this.setTitle} value={title} />
        </label>
        <br/>
        <label>Body
          <input onChange={this.setBody} value={body} />
        </label>
        <br/>
        <label>Completed
          <input type="checkbox" onChange={this.setComplete} checked={completed} />
        </label>
        <br/>
        <button>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
