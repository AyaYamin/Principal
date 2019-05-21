/* eslint-disable */
import AddAlert from "@material-ui/icons/AddAlert";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from '@material-ui/core/InputLabel';
import Search from "@material-ui/icons/Search";

import React from "react";

import swal from 'sweetalert';

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from 'components/Card/CardFooter.jsx';
import Snackbar from "components/Snackbar/Snackbar.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";

import InputForm from './InputForm';
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
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
      //body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
      .then(response => response.json()); // parses response to JSON
}

class Notifications extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id:"",
      message:""

    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSend = this.handleSend.bind(this);
   // this.getF=this.getF.bind(this);
   this.formRef = null;
  }

  updateInput(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }


  componentWillUnmount() {
  }


  componentDidMount() {
    var th = this;
    //this.serverRequest = axios.get(this.props.source)

    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();
    
    var lastParameter5 = pathArray.pop();
    var lastParameter_id = pathArray.pop();
    console.log(lastParameter1);
    console.log(lastParameter_id);
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Dashboard/test.php?param1=` + lastParameter_id + `&param2=` + lastParameter5)
        .then(function (event) {
            th.setState({
                data: event//.data
            });
        })
}

  handleSend (event) {
   
    event.preventDefault();
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Notifications/send.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    //reset();
   // this.props.resetForm();
  // event.target.reset(); 
 //this.state.id=" ";
//this.state.message=" ";
this.formRef.reset();
   return swal({
      title: "Sent Your Message Successfully ^_^",
      //text: "You Add The Student in The School!",
      icon: "success",
      button: "Continue!",
    })
    //this.getF(event);
  }




  render() {
    const { classes } = this.props;
    const styleInput = {
      width: "100%",
      alignContent: "Center",
      height: "150px",
      margin: "3px 0",
      border: "1px solid #000",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",

    };
    const styleInput1 = {
      width: "100%",
      alignContent: "Center",
      height: "30px",
      margin: "3px 0",
      border: "1px solid #000",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",

    };
    const styleInput5 = {
      width: "100%",
      alignContent: "Center",
     height: "200px",
      margin: "3px 0",
      border: "1px solid #000",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
      
    };
    return (
      <center>
        <form onSubmit={this.handleSend} action="send.php" ref={(ref) => this.formRef = ref}>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Messages</h4>
                <p className={classes.cardCategoryWhite}></p>
              </CardHeader>
              <CardBody>

                <div className={classes.searchWrapper} style={{ textAlign: "center" }} >
                  <div>


            {/*        <InputForm inputType="number" inputKey="id" inputLabel="ID Of Parent"  onChange={this.updateInput} />
                 <InputForm inputType="textarea" inputKey="message" inputLabel="Your Message" onChange={this.updateInput} />

*/} 


                 
                  <div style={{ display: 'flex', width: '100%' }}>

                      <GridItem xs={12} sm={6} md={6} style={{ textAlign: "center" }}>
                        <InputLabel style={{ color: "#000", alignContent: "Center",fontFamily: "Comic Sans MS" }}> ID of Parent :</InputLabel>
                      </GridItem>    
                      
                      <GridItem xs={12} sm={6} md={6}>
                        <input required   style={styleInput1}
                         name="id" onChange={this.updateInput}  />
                      </GridItem>
                    </div>

                    <div style={{ display: 'flex', width: '100%' }}>
                      <GridItem xs={12} sm={6} md={6} style={{ textAlign: "center" }}>
                        <InputLabel style={{ color: "#000", alignContent: "Center" ,fontFamily: "Comic Sans MS"}}> Your message :</InputLabel>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <textarea id="one" required style={styleInput} name="message" rows="5" cols="105" onChange={this.updateInput} max={this.props.max}></textarea>
                      </GridItem>

                    </div>
                    
 
                    </div>
                 
                  </div>
                
              </CardBody>
              <CardFooter>
                <Button color="primary" name="Send" type="submit" value="Send" onClick={this.handleSend}>Send</Button>
              </CardFooter>
            </Card>

          </GridItem>
        </form>
      </center>

    );
  }
}

export default withStyles(styles)(Notifications);
