import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        //marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 100,
    },
});
/*//
let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
*/


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




class SimpleTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.componentDidMount=this.componentDidMount.bind(this);
        
    }


    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/search.php`)
            .then(function (event) {
                th.setState({
                    data: event//.data
                });
            })
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table>
                    <TableHead >
                        <TableRow>
                            <TableHead align="center">First Name</TableHead>
                            <TableCell >Mid Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Teacher ID</TableCell>
                            <TableCell align="right">Subject</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Date Of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                        {this.state.data.map(item => (
                            <TableRow key={item.id}>
                                <TableCell component="th" scope="row">
                                  
                                </TableCell>
                                <TableCell align="right">{item.fname}</TableCell>
                                <TableCell align="right">{item.mname}</TableCell>
                                <TableCell align="right">{item.lname}</TableCell>
                                <TableCell align="right">{item.id}</TableCell>

                                <TableCell align="right">{item.subject}</TableCell>
                                <TableCell align="right">{item.city}</TableCell>
                                <TableCell align="right">{item.phone}</TableCell>
                                <TableCell align="right">{item.address}</TableCell>
                                <TableCell align="right">{item.DateBirth}</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
