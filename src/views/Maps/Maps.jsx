



import InputLabel from "@material-ui/core/InputLabel";
import { Edit } from '@material-ui/icons/Edit';
import withStyles from "@material-ui/core/styles/withStyles";

import swal from 'sweetalert';

import React from "react";

import Countstudent from "views/Maps/countstudent";

import Tasks from "components/Tasks/Tasks.jsx";
import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import InputForm from "views/Typography/InputForm";

import Table from "components/Table/Table.jsx";
import CardBody from "components/Card/CardBody.jsx";

import avatar from "assets/img/faces/marc.jpg";

import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Countsection from "views/Maps/countsection"
const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};
function getData(url = ``, data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",

            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        //body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.json()); // parses response to JSON
}


function postData(url , data ) {
    // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.text()); // parses response to JSON
}


//function EditCriteria(props) {
class EditCriteria extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data:[],
        };
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getNumber=this.getNumber.bind(this);
    }

    updateInput(event) {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }
    //const { classes } = props;
    handleSubmit = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Maps/point.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
    }
    handleSubmit2 = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Maps/addClass.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
        event.target.reset();
        return swal({

            title: "Add New Class !",
            
            icon: "success",
            button: "Continue!",
          })



    }
  
    getNumber=()=>{
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Maps/countstudent.php`)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error)); 
           return( 
               
                this.state.data.map((row, i) => (
                    <i key={i}>{row}</i>
                    
                ))
           ) 
    }



    render() {
        // var props;
        const { classes } = this.props;
        const styleInput = {
            width: "100%",
            alignContent: "Center",
            height: "20px",
            margin: "3px 0",
            border: "1px solid #ccc",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px"
        };
        return (
            <div style={{ alignContent: "Center" }}>


                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>

                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>School Information</h4>

                            </CardHeader>
                            <CardBody>
                                <Table
                                    tableHeaderColor="primary"
                                   
                                 tableHead={["School", "Number of class", "Number of Student", "Phone"]}
                           
                                    tableData={[
                                        ["Al-Amal School ",<Countsection />, <Countstudent />, "056987463"],
                                        
                                    ]}
                                />
                            </CardBody>
                        </Card>

                    </GridItem>
                    <form  action="addClass.php" onSubmit={this.handleSubmit2} >
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>Add Classes</h4>
                                </CardHeader>
                                <CardBody>
                                    <InputLabel style={{ width: "60%" }}>Class : </InputLabel>
                                  

                                    <select name="sel_s" required  
                                    style={{ width: "100%", height: "20px", margin: "3px 0", border: "1px solid #000", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} key="level" type="text" name="level"
                                    onChange={this.updateInput}   /*updateInput={this.updateInput} */ value={this.state.value}>
                                      <option></option>
                                      <option name="sel_s">1st</option>
                                      <option name="sel_s"> 2nd</option>
                                      <option name="sel_s"> 3th</option>
                                      <option name="sel_s"> 4th</option>
                                      <option name="sel_s">5th</option>
                                      <option name="sel_s">6th</option>
                                      <option name="sel_s"> 7th</option>
                                      <option name="sel_s"> 8th</option>
                                      <option name="sel_s"> 9th</option>
                                      <option name="sel_s"> 10th</option>

                                    </select>
                                    <InputLabel style={{ width: "60%" }}>Section: </InputLabel>
                       

                                    <select name="sel_s" required  
                                    style={{ width: "100%", height: "20px", margin: "3px 0", border: "1px solid #000", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }}   key="id_class" type="number" name="id_classs" 
                                    onChange={this.updateInput}   /*updateInput={this.updateInput} */ value={this.state.value}>
                                      <option></option>
                                      <option name="sel_s">A</option>
                                      <option name="sel_s"> B</option>
                                      <option name="sel_s"> C</option>
                                      <option name="sel_s"> D</option>
                                      <option name="sel_s">F</option>
                                    
                             

                                    </select>
                                </CardBody>

                                <CardFooter>

                                    <Button color="primary" name="add" type="submit" value="add">Add Class</Button>
                                </CardFooter>
                            </Card>

                        </GridItem>
                        </GridContainer>
                    </form>



                </GridContainer>
            </div>
        );
    }
}
export default withStyles(styles)(EditCriteria);
