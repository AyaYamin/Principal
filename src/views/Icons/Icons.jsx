import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from '@material-ui/core/InputLabel';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Code from "@material-ui/icons/Code";
import Accessibility from "@material-ui/icons/Accessibility";

import swal from 'sweetalert';

import CheckBox2 from "views/Icons/checkbox_2";

import React from "react";

import Build from "views/Icons/Table.jsx";
import FileInput from 'views/Icons/filereader';

import GridContainer from "components/Grid/GridContainer.jsx";

import Table1 from "views/Icons/Tablee.jsx";

import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import InputForm from "views/Typography/InputForm.jsx";

import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";
import MyTable from "views/Icons/table_with_checkbox.jsx"
import Application from "views/Icons/check.jsx"
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
        color: "rgba(200,2,2,.62)",
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
        .then(response => response.text());// parses response to JSON
}

function getData(url, data ) {
        // Default options are marked with *
        if (data != " ") {
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
                .then(response =>response.json()) // parses response to JSON


        }
    
}



//function Icons(props) {
class Icons extends React.Component {
    //const { classes } = props;
    constructor(props) {
        super(props);

        this.state = {
            flag: false,
            data:[]
        };
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
        this.handleSubmit4 = this.handleSubmit4.bind(this);
       // this.handleSubmit5 = this.handleSubmit5.bind(this);
        this.contantaa = this.contantaa.bind(this);
        this.onSubmit11 = this.onSubmit11.bind(this);
       // this.getTable1=this.getTable1.bind(this);
    }

    /*  
  componentDidMount(){
      fetch('http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/search.php')
      .then(response => response.text())
      .then(json =>{
          this.setState({
             isLoad:True,
              items:json,
          })
      });
  }
  */



    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);

    }

    handleClick1 = (e) => {
        e.preventDefault();
        window.location.assign('/Edit Criteria/');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/aa.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
        event.target.reset();
        swal("Great !!", "You Add A New Teacher Successfully ^_^ ");
    }



    handleSubmit3 = (event) => {
        //event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/delete2.php`, this.state)

        return false;

    }
    handleSubmit4 = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/delete_all2.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }
    handleSubmit5 = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/search.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));


    }
    contantaa = (event) => {
        event.preventDefault();
        console.log(this.state);

    }

    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
      //// getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/search.php`)
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/getclass.php`)

          .then(function (event) {
               th.setState({
                 data: event//.data
               });
         })
    }
    Search() {
        return { flag: false };
    }
    onClick(e) {
        e.preventDefault();
        this.setState({ flag: true });
    }
  



    onSubmit11() {
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/search.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
        return (
            <div>


                {this.state.flag ? <Build /> : <div></div>}
            </div>
        );
    }

    getTable() {
        var th=this;
      
     
        return (
            <div>
                {/* <Button  color="rose" type="submit" value="get" onClick={this.onClick.bind(this)} > 
                        <Search />
                 </Button>*/}

                {/*  {this.state.flag ? <MyTable /> : <div></div>}   */}
                <MyTable />
            </div>
        );
                      
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
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={11}>
                        <CustomTabs
                            title="Teachers:"
                            headerColor="primary"
                            tabs={[
                                {
                                    tabName: "Add A Teacher",
                                    tabIcon: Accessibility,
                                    tabContent: (


                                        <GridContainer >
                                            <form action="aa.php" onSubmit={this.handleSubmit} onChange={this.updateInput}>
                                                <GridItem xs={12} sm={10} md={10}>
                                                    <Card>
                                                        <CardHeader color="primary">
                                                            <h4 className={classes.cardTitleWhite}>Add A Teacher</h4>
                                                            <p className={classes.cardCategoryWhite}></p>
                                                        </CardHeader>
                                                        <CardBody>
                                                            <GridContainer>
                                                                
                                                                <InputForm inputType="text" inputKey="fname" inputLabel="First Name:" />
                                                                <InputForm inputType="text" inputKey="mname" inputLabel="Mid  Name:" />
                                                                <InputForm inputType="text" inputKey="lname" inputLabel="Last Name:" />
                                                                <InputForm inputType="number" inputKey="id_t" inputLabel="Teacher ID:" />
                                                                <InputForm inputType="text" inputKey="sub" inputLabel="Subject : " />
                                                                <InputForm inputType="text" inputKey="city" inputLabel="City :" />
                                                                <InputForm inputType="date" inputKey="DateofBirth" inputLabel="Date of Birth :" />
                                                                <InputForm inputType="text" inputKey="address" inputLabel="Address : " />
                                                                <InputForm inputType="number" inputKey="phone" inputLabel="Phone : " />

                                                            </GridContainer>
                                                        </CardBody>
                                                        <br />
                                                        <br />
                                                        <center>
                                                        <GridItem xs={12} sm={12} md={6}>
                                                            <CardHeader color="primary">
                                                                <h4 className={classes.cardTitleWhite}> The Available Classes</h4>

                                                            </CardHeader>


                                                            <CardBody>
                                                              <CheckBox2 />
                                                               
                                                                  { /*  <Controls/> */}

                                                                <Button color="primary" name="Add" type="submit" value="Add" onClick={this.handleClick1}>Add additional Class</Button>
                                                               {/*} <Application />*/}
                                                               {/*<FormContainer />*/}
                                                            </CardBody>
                                                        </GridItem>
                                                        </center>
                                                        <CardFooter>
                                                            <Button color="primary" name="Add" type="submit" value="Add" >Add</Button>
                                                        </CardFooter>
                                                    </Card>
                                                </GridItem>
                                            </form>
                                        </GridContainer>


                                    )
                                },
                                {
                                    tabName: "Add List Of Teachers",
                                    tabIcon: LibraryBooks,
                                    tabContent: (
                                        <center>
                                            <GridContainer>
                                                  <FileInput/>
                                            </GridContainer>
                                        </center>
                                    )
                                   
                                   
                                },
                              
                                {
                                    tabName: "Search",
                                    tabIcon: Code,
                                    tabContent: (
                                        <form action="search.php" onSubmit={this.onSubmit11}>
                                        {/*}
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} md={12}>
                                                    <Card>
                                                        <CardHeader color="info">
                                                            <h4 className={classes.cardTitleWhite}>Search on a specific Teacher</h4>
                                                            <p className={classes.cardCategoryWhite}>by id </p>
                                                        </CardHeader>

                                                        <CardBody>
                                                            <div className={classes.searchWrapper} style={{ textAlign: "center" }} >
                                                                <input style={{ width: "50%", color: "#000", margin: "3px 0", height: "40px", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                                                                    type="text" placeholder="id" key="id" name="search" onChange={this.updateInput} />
                                                                <Button justIcon round color="rose" type="submit" value="Search" onClick={this.onClick.bind(this)} >
                                                                    <Search onSubmit={this.onSubmit11} />
                                                                </Button>
                                                                
                                                                <CardBody>

                                                                {this.onSubmit11()}

                                                                </CardBody>
                                                            </div>
                                                        </CardBody>



                                                    </Card>
                                                </GridItem>
                                    </GridContainer>*/}
            
                    <form action="search.php" onSubmit={this.handleSubmit5}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="primary">
                              <h4 className={classes.cardTitleWhite}>Search on a specific Teacher</h4>
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




    //Icons.propTypes = {
    //    classes: PropTypes.object.isRequired
    //};
}
export default withStyles(iconsStyle)(Icons);