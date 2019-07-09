import React, {Component} from 'react';


export class AddTask extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            description: ""
        }
    }

    onSubmit = (e) => {
        const {name, description} = this.state;
        e.preventDefault();
        if (name && description) {
            this.setState({name:"", description: ""});
            this.props.addTask({id: this.props.nextId + 1, ...this.state});
        } else {
            alert("Fill all required fields");
        }
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{width: "100"}}>
                    <input title="name"
                           placeholder="task title"
                            style={{width: "300px", display: "flex", margin: "10px auto", border: "1px solid rgba(0,0,0,0.2)"}}
                           value={this.state.name}
                           onChange={(e) => this.setState({name: e.target.value})}/>
                    <textarea title="description"
                              placeholder="description"
                            style={{width: "300px", margin: "10px auto", display: "flex", minHeight: "80px"}}
                           value={this.state.description}
                           onChange={(e) => this.setState({description: e.target.value})}/>
                    
                    <button type="submit"
                           style={{cursor: "pointer", margin: "10px auto", display:"flex", textAlign:"center", backgroundColor: "black", color: "white", border: "none", padding: "10px"}}
                           value="Send"
                           title="sumbit">Save</button>
                    
                </form>
            </div>
        );
    }
}

export default AddTask;