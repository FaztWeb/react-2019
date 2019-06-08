import React, { Component } from 'react';
import Task from './Task'
import PropTypes from 'prop-types'

class Tasks extends Component {
    render() {
        return this.props.tasks.map(task => (
            <Task
                task={task}
                key={task.id}
                checkDone={this.props.checkDone}
                deleteTask={this.props.deleteTask}
            />
        ));
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;