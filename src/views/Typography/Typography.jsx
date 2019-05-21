import InputLabel from '@material-ui/core/InputLabel';
import withStyles from "@material-ui/core/styles/withStyles";
import Update from "@material-ui/icons/Update";
import LocalOffer from "@material-ui/icons/LocalOffer";
import TabLink from '@material-ui/core/Tab';
import Cloud from "@material-ui/icons/Cloud";
import BugReport from "@material-ui/icons/BugReport";
import DateRange from "@material-ui/icons/DateRange";
import Accessibility from "@material-ui/icons/Accessibility";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Tab from '@material-ui/core/Tab';
import Store from "@material-ui/icons/Store";
import AppBar from '@material-ui/core/AppBar';
import Code from "@material-ui/icons/Code";
import TabPanel from '@material-ui/core/Tab';
import TabList from '@material-ui/core/Tab';
import TabContent from '@material-ui/core/Tab';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Search from '@material-ui/icons/Search';

import SweetAlert from 'sweetalert-react';

import React from "react";

import Example from "ahlam.jsx";

import { CSVLink, CSVDownload } from "react-csv";

import Table1 from "views/Typography/table.jsx";

import swal from 'sweetalert';

import { bugs, website, server } from "variables/general.jsx";

import Card from "components/Card/Card.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";

import List from "views/Typography/list1.jsx";

import axios from 'axios';

import Muted from "components/Typography/Muted.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Build from "views/Typography/tablee.jsx";

import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Primary from "components/Typography/Primary.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import InputForm from "views/Typography/InputForm.jsx";

import Info from "components/Typography/Info.jsx";
import Quote from "components/Typography/Quote.jsx";
import Danger from "components/Typography/Danger.jsx";
import Warning from "components/Typography/Warning.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Success from "components/Typography/Success.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

import FileInput from './fileReader';

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "200px"
  },
  cardCategoryWhite: {
    color: "rgb(1,1,1)",
    margin: "0",
    fontSize: "16px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFffff",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function postData(url, data) {
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


function getData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
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


//function TypographyPage(props) {
class TypographyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit_upload = this.handleSubmit_upload.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
    this.handleSubmit4 = this.handleSubmit4.bind(this);
    this.path=this.path.bind(this);
  }


  updateInput(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/a.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
      event.target.reset();
      return swal({
        title: "Added Successfully!",
        text: "You Add The Student in The School!",
        icon: "success",
        button: "Continue!",
      })
         
  }

  handleSubmit3 = (event) => {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/delete.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    event.target.reset();

  }
  handleSubmit4 = (event) => {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/delete_all.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    event.target.reset();
  }


  handleSubmit_upload(event) {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/upload_csvfile.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
  }

  handleSubmit5 = (event) => {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/search.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    <Build />

  }

  updateInput_upload(event) {
    //let state = {};
    //state[event.target.name] = event.target.value;
    this.readFile(event);
    event.target.value = null;

  }

  handleUpload = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)


    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/upload_csvfile.php`, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
        })
      },
    })
      .then(res => {
        console.log(res.statusText)
      })

  }
  path = (event) => {
    event.preventDefault();
    alert('Handle it on your own');
    console.log(this.state);
    <a href='http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/Exmple.csv'>xx</a>
     // .then(data => console.log(JSON.stringify(data)))
     // .catch(error => console.error(error));
  }

  render() {
    // var props;
    const { classes } = this.props;
    const styleInput = {
      width: "100%",
      alignContent: "Center",
      height: "25px",
      margin: "3px 0",
      border: "1px solid #000",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px"
    };
    return (

      <div style={{ alignContent: "Center" }}>
        <GridContainer justify="center">

          <GridItem xs={12} sm={12} md={11}>
            <CustomTabs
              title="Students"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Add Students",
                  tabIcon: Accessibility,
                  tabContent: (
                    <form action="a.php" onSubmit={this.handleSubmit} onChange={this.updateInput}>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={11}>
                          <Card justify="center">
                            <CardHeader style={{ background: "#f8bbd0" }}>
                              <h3 className={classes.cardCategoryWhite}>Student Page</h3>
                              <h4 className={classes.cardTitleWhite}>Add A Student </h4>
                            </CardHeader>
                            <CardBody>
                              <GridContainer justify="center">

                                <InputForm inputType="text" inputKey="fname" inputLabel="First Name:" />
                                <InputForm inputType="text" inputKey="mname" inputLabel="Mid Name:" />
                                <InputForm inputType="text" inputKey="lname" inputLabel=" Last Name:" />
                                <InputForm inputType="number" inputKey="id_st" inputLabel="Student ID:"   />
                                <InputForm inputType="number" inputKey="p_id" inputLabel="Parent ID : " />
                             

                                <InputForm inputType="date" inputKey="DateofBirth" inputLabel="Date of Birth :" />
                                <div style={{ display: 'flex', width: '100%' }}>
                                  <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }} >

                                    <InputLabel style={{ color: "#000", width: "300px", alignContent: "Center", textAlign: "center" , fontSize: "18px", fontFamily: "Comic Sans MS" }}>Level of class</InputLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={6} md={12}>
                                    <select name="sel_s" required style={styleInput} onChange={this.updateInput}   /*updateInput={this.updateInput} */ value={this.state.value}>
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
                                  </GridItem>
                                </div>

                                <div style={{ display: 'flex', width: '100%' }}>
                                  <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }} >

                                    <InputLabel style={{ color: "#000", width: "300px", alignContent: "Center", textAlign: "center" }}>Section</InputLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={6} md={12}>
                                    <select name="id" required style={styleInput} onChange={this.updateInput}   /*updateInput={this.updateInput} */ value={this.state.value}>
                                      <option></option>
                                      <option name="id">A</option>
                                      <option name="id"> B</option>
                                      <option name="id"> C</option>
                                      <option name="id"> D</option>
                                      <option name="id">E</option>


                                    </select>
                                  </GridItem>
                                </div>
                               
                                <InputForm inputType="text" inputKey="address" inputLabel="Address : " />

                                <InputForm inputType="number" inputKey="phone" inputLabel="Phone : " />

                              </GridContainer>
                            </CardBody>
                            <CardFooter>
                              <Button color="primary" name="Add" type="submit"value="Add">Add</Button>
                              <SweetAlert
                                show={this.state.show}
                                title="Demo"
                                success
                                text="SweetAlert in React"
                                onConfirm={() => this.setState({ show: false })}
                              />

                            </CardFooter>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </form>
                  )

                },
                {
                  tabName: "Add A list of Students",
                  tabIcon: LibraryBooks,
                  tabContent: (
                    <center>

                      <GridContainer justify="center">

                        <FileInput />
          
                      </GridContainer>
                    </center>
                  )
                }
              /*  , {

                  tabName: "Delete",
                  tabIcon: Accessibility,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={10}>
                        <Card>
                          <CardHeader color="primary">
                            <h4 className={this.cardTitleWhite}>Remove Student/Students</h4>
                            <p className={this.cardCategoryWhite}></p>
                          </CardHeader>
                          <CardBody>
                            <GridContainer justify="center">

                              <InputForm inputType="number" inputKey="id" inputLabel=" StudentID :" updateInput={this.updateInput} />

                              <InputForm inputType="text" inputKey="name" inputLabel="  Students Last Name :" updateInput={this.updateInput} />


                            </GridContainer>
                          </CardBody>
                          <CardFooter>
                            <form onSubmit={this.handleSubmit3}>
                              <Button name="Remove" type="submit" value="Remove" color="primary">Remove A Student !</Button>
                            </form>
                            <form onSubmit={this.handleSubmit4}>
                              <Button name="RemoveAll" type="submit" value="Remove" color="primary">Remove All Students !</Button>
                            </form>
                          </CardFooter>
                        </Card>
                      </GridItem>
                    </GridContainer>

                  )
                }*/
                , {
                  tabName: "Search",
                  tabIcon: Code,
                  tabContent: (
                    <form action="search.php" onSubmit={this.handleSubmit5}>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="primary">
                              <h4 className={classes.cardTitleWhite}>Search on a specific Student</h4>
                              <p className={classes.cardCategoryWhite}>by id </p>
                            </CardHeader>

                            <CardBody>
                              <div className={classes.searchWrapper} style={{ textAlign: "center" }} >
                        
                                <CardBody>



                                  <Table1 />

                                </CardBody>
                                {/*} <List />*/}
                              </div>
                            </CardBody>



                          </Card>
                        </GridItem>
                      </GridContainer>
                    </form>
                  )
                }
              ]}
            />
          </GridItem>


        </GridContainer>






      </div>
    );
  }
}

export default withStyles(style)(TypographyPage);

