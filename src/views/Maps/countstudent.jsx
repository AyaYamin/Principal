import TableBody from '@material-ui/core/TableBody';
import color from '@material-ui/core/colors/deepOrange';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Button from "components/CustomButtons/Button.jsx";
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




class Countstudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.updateInput = this.updateInput.bind(this);


        //this.getData = this.getData.bind(this);
       // this.handleSubmit5 = this.handleSubmit5.bind(this);
    }



    componentDidMount() {
      
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Maps/countstudent.php`)
            .then(function (event) {
                th.setState({
                    data: event//.data
                });
            })
    }

    componentWillUnmount() {
        //this.serverRequest.abort();
    }

    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }


    render() {
        //   const { classes } = props;


        const styles = theme => ({
            root: {
                width: '100%',
                marginTop: theme.spacing.unit * 3,
                overflowX: 'auto',
            },
            table: {
                minWidth: 700,
            },
        });


        return (
        <span className="Table">

                {
                    this.state.data.map((row, i) => (
                        <i key={i}>{row}</i>
                        
                    ))}
                    

            </span>
        );
    }
}

export default Countstudent;

