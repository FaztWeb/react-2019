import React, { Component } from 'react'

export default class addTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.title);
        this.setState({title: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Write a task"
                    onChange={this.onChange}
                    value={this.state.title}
                />
                <input type="submit" value="submit" />
            </form>
        )
    }
}
