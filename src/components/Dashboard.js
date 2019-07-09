import React, {Component} from 'react';
import Tasks from "./Tasks";

export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            tasks: this.getLocalStorageItems
        }
    }

    get getHeader() {
        const style = {width: "100%", height: "100px", backgroundColor: "black"};
        const headerStyle = {width: "100%", padding: "50px 0 ", color: "white", textAlign: "center"}
        return (
            <div style={style}>
                <div style={headerStyle}>
                    To-Do app
                </div>
            </div>
        );
    }

    render() {
        const tasks = this.state.tasks || []; 
            return (
                <div>
                    {this.getHeader}
                    <div style={{width: "50%", margin:"0 20%", padding: "50px 15px"}}>
                        <Tasks tasks={tasks} 
                            delTask={this.delTask} 
                            addTask={this.addTask}/>
                    </div>
                </div>
        );
    }
    

    addTask = (object) => {
        const newTasks = this.state.tasks.slice();
        newTasks.push(object);
        this.setState({tasks: newTasks}, () => this.saveToLocalStorage(newTasks));
        
    }

    saveToLocalStorage(items) {
        localStorage.clear();
        items.map(i => {
            localStorage.setItem(`ITEM${i.id}`, `${i.name}$${i.description}`);
        });
    }

    get getLocalStorageItems() {
        let items = [];
        let idx = 1;
        do {
            const item = localStorage.getItem(`ITEM${idx}`);
            items.push(item);
            idx++;
        } while (typeof localStorage[`ITEM${idx}`] !== "undefined");

        return this.parseItems(items.filter(i => i !== null));
    }

    parseItems(strings) {
        return strings.map((s,idx) => {
            return ({
                id: idx +1,
                name: s.substring(0, s.indexOf("$")),
                description: s.substring(s.indexOf("$") + 1, s.length)
            })
        })
    }

    delTask = (id) => {
        const newTasks = this.state.tasks.slice().filter(task => task.id !== id);
        this.setState({tasks: newTasks}, () => this.saveToLocalStorage(newTasks));
    }

    
}

export default Dashboard;