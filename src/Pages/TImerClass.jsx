import React, { Component } from 'react';
import Links from '../Components/links/links'

export default class TImerClass extends Component {
constructor(){
    super();
this.state = {
    clock: ''
}
}
    componentDidMount(){
        const myTimer = () => {
            var Time = new Date();
            this.setState({
                clock:Time.toLocaleTimeString()
            })
          }
          setInterval(myTimer, 1000);
        }
    
    render() {
        return (
            <div className="TImerClass container">
                <Links />
                <div className="group">
                  <h1>Time class</h1>
                <h1 className="text-secondary">{this.state.clock}</h1>  
                </div>
                
            </div>
        )
    }
}
