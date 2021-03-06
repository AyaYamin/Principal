import React from "react";
import GridItem from "components/Grid/GridItem.jsx";
import InputLabel from '@material-ui/core/InputLabel';
class InputForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {};
        this.updateInput = this.updateInput.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    updateInput(event){
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
      }
    
    render() {

        
        const styleInput = {
            width: "100%",
            alignContent: "Center",
            height: "25px",
            margin: "3px 0",
            border: "1px solid #000",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            
          };
        return (
            <div style={{display: 'flex', width: '100%'}}>
                <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                    <InputLabel style={{ color: "#000", alignContent: "Center" ,fontSize:"18px",fontFamily:"Comic Sans MS" } }> {this.props.inputLabel} </InputLabel>
                </GridItem>
                <GridItem xs={12} sm={6} md={12}>
                    <input required style={styleInput} type={this.props.inputType} name={this.props.inputKey} onChange={this.props.updateInput} max={this.props.max}/>
                </GridItem>

            </div>
        );
    }
}

export default InputForm;