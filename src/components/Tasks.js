import React, {Component} from 'react';
import TaskInfo from './TaskInfo';
import AddTask from './AddTask';

export class Tasks extends Component {

    render() {
        const tasks = this.props.tasks.slice();
        const nextId = tasks.length;
        const tasksObjects =  tasks.map(( task, idx ) => 
                <TaskInfo task={task}
                          key={task.id}
                          idx={idx}
                          delTask={this.props.delTask.bind(this, task.id)} />
            );
        return (
            <div>
                <AddTask addTask={this.props.addTask}
                         nextId={nextId} />
                <div style={{width: "100%"}}>
                    { tasksObjects }
                </div>
            </div>
        );
    }
}

export default Tasks;