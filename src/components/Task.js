import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Task extends Component {

    StyleComplete() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.task;
        return (
            <p style={this.StyleComplete()}>
                {title}
                <input type="checkbox" onChange={this.props.checkDone.bind(this, id)} />
                <button style={btnDeleteStyle} onClick={this.props.deleteTask.bind(this, id)}>
                    x
                </button>
            </p>
        )
    }
}


Task.propType = {
    task: PropTypes.object.isRequired
}

const btnDeleteStyle = {
    fontSize: '18px',
    background: '#EA2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}