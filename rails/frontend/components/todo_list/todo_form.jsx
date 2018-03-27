import React from 'react';
import uniqueId from '../../../util.js';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.click = this.click.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
  }


  setTitle(e){
    const title = e.target.value;
    this.setState({ title });
  }

  setBody(e){
    const body = e.target.value;
    this.setState({ body });
  }

  resetFields() {
    this.setState({ title: '', body: ''});
  }

  click(e) {
    e.preventDefault();
    this.props.receiveTodo(uniqueId(),
                           this.state.title,
                           this.state.body
                         );
  this.resetFields();
  }

  render() {
    const {title, body} = this.state;
    return (
      <form>
        <h3>Create a New Todo</h3>
        <label>Title
          <input onChange={this.setTitle} value={title} />
        </label>
        <br/>
        <label>Body
          <input onChange={this.setBody} value={body} />
        </label>
        <br/>
        <button onClick={this.click}>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
