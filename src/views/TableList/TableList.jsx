import withStyles from "@material-ui/core/styles/withStyles";
import Code from "@material-ui/icons/Code";
import Accessibility from "@material-ui/icons/Accessibility";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Search from '@material-ui/icons/Search';

import React from "react";

import Card from "components/Card/Card.jsx";
import Table from "components/Table/Table.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

import Build1 from "views/TableList/Table_c.jsx";
import Build2 from "views/TableList/Table_s.jsx";
import Build from "views/TableList/Table_t.jsx";
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

function getData(url, data) {
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
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.text()); // parses response to JSON
}

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  handleSubmit5 = (event) => {
    event.preventDefault();
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/TableList/get_t.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));


  }

  handleSubmit6 = (event) => {
    event.preventDefault();
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/TableList/get_c.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));


  }
  handleSubmit7 = (event) => {
    event.preventDefault();
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/TableList/get_s.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));


  }


  render() {
    const { classes } = this.props;

    return (
      <div style={{ alignContent: "Center" }}>
        <GridContainer justify="center">

          <GridItem xs={12} sm={12} md={11}>

            <CustomTabs
              title=""
              headerColor="primary"
              tabs={[
                {
                  tabName: "Current Teachers",
                  tabIcon: Accessibility,
                  tabContent: (
                    <form action="get_t.php" onSubmit={this.handleSubmit5}>


                      <CardBody>
                        <center><Build /></center>
                      </CardBody>


                    </form>
                  )

                }
                , {

                  tabName: "Current Students",
                  tabIcon: Accessibility,
                  tabContent: (
                    <form action="get_s.php" onSubmit={this.handleSubmit7}>
                      <GridContainer>


                        <CardBody>


                          <center><Build2 /></center>



                        </CardBody>


                      </GridContainer>
                    </form>
                  )
                }
                , {
                  tabName: "Current Classes",
                  tabIcon: Code,
                  tabContent: (
                    <form action="get_c.php" onSubmit={this.handleSubmit6}>
                      <GridContainer>
                        <CardBody>
                          <center><Build1 /></center>
                        </CardBody>
                      </GridContainer>
                    </form>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(styles)(TableList);
