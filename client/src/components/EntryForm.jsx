import React from 'react';

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      description: ' '
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addACow({
      ['name']:this.state.name,
      ['description']:this.state.description
    });
  }

  render () {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          <input
            name="name"
            type="text"
            placeholder="cow name"
            value={this.state.name}
            onChange={this.handleInputChange} />
          <input
            name="description"
            type="text"
            placeholder="cow description"
            value={this.state.description}
            onChange={this.handleInputChange} />
            <input type="submit" value="AddCow" />
        </label>
      </form>
    )
  }
}

export default EntryForm;