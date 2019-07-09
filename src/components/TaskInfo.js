import React, {Component} from 'react';

export class TaskInfo extends Component {

    constructor() {
        super();
        this.state = {
            descrIsOpen: false
        }
    }

    openDescr = () => {
        this.setState({
            descrIsOpen: !this.state.descrIsOpen
        });
    }

    render() {
        const {id, name, description} = this.props.task;
        const descrIsOpen = this.state.descrIsOpen;
        return (
                <div key={id} style={{minHeight: "15px", border: "2px solid rgba(0,0,0,0.2)", borderRadius: " 5px", marginBottom: "10px", padding: "10px", cursor: "pointer"}} onClick={this.openDescr}>
                    <div style={{width: "100%"}}>
                        <span><b>{this.props.idx +1})</b> </span>
                        <span style={{width: "100%"}}>{name}</span>
                        
                    </div>
                    {
                        descrIsOpen ? 
                        <div style={{width: "100%", height: "auto"}}>
                            <span style={{width: "100%", display: "flex"}}>{description}</span>
                            <button onClick={this.props.delTask} 
                                    style={{marginTop:"20px", backgroundColor: "black", color: "white", border: "none", padding: "10px"}}
                                    type="button">
                                        DELETE
                            </button>
                        </div> : null
                    }
                    
                </div>
        );
                }
}

export default TaskInfo;