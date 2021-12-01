

import React, { Component } from 'react'

export default class ProfileStatus extends Component {

    statusInput = React.createRef()

    state = {
        editMode:false,
        status:this.props.status
    }

    activateMode = ()=>{
      
        this.setState({
            editMode:true
        })
    }

    deActivateMode=()=>{
        this.setState({
            editMode:false
        })
        debugger;

        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e)=>{
        this.setState({
            status:e.currentTarget.value 
        })
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status!==this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
     
        return (
            <div>
                {!this.state.editMode&&
                <div>
                    <span onDoubleClick={this.activateMode}>{this.props.status || "!!!!"}</span>
                </div>
    }
    {this.state.editMode&&
                <div>
                    <input onChange = {this.onStatusChange} 
                     autoFocus={true} onBlur={this.deActivateMode} 
                    value={this.state.status} />
                </div>
    }

            </div>
        )
    }
}

