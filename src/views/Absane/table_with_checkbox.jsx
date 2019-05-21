import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { InputLabel } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';

import React from 'react';

import classNames from 'classnames';

import PropTypes from 'prop-types';

import swal from 'sweetalert';

import InputForm from 'views/Typography/InputForm';

import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";

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


function postData(url = ``, data = {}) {
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

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  
   { id: 'calories', numeric: true, disablePadding: true, label: 'Class' },
  //{ id: 'fat', numeric: true, disablePadding: false, label: 'Classes' },
{ id: 'name', numeric: false, disablePadding: true, label: 'Name of students' },
];














class EnhancedTableHead extends React.Component {
  //createSortHandler = property => event => {};

  

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;


    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >

                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                 // onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>

              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,

  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,

  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({

  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 1),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '0 0 70%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 70%',
  },
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar>
      <div className={classes.title}>

        {numSelected > 0 ? (
          <Typography color="inherit" style={{ fontSize: "20px", background: "#e3f2fd", fontFamily: "Comic Sans MS" }} >
            {numSelected} selected

          </Typography>
        ) : (
            <Typography style={{ fontSize: "20px", background: "#e3f2fd", fontFamily: "Comic Sans MS" }}>
              List of Attendance
          </Typography>
          )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">

            </IconButton>
          </Tooltip>
        ) : (
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">

              </IconButton>
            </Tooltip>
          )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({


});


















export class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 5,
      checked:false,
      date: new Date(),
      searchString: "",
    };

    this.dateChanged = this.dateChanged.bind(this);
    this.search = this.search.bind(this);
    this.updateInput=this.updateInput.bind(this);
    this. handleInputChange=this.handleInputChange.bind(this);
   // this.handleClick1 = this.handleClick1.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  updateInput = (event) => {
    let state = {};
  //this.state.checked="true";
    //event.target.checked=!event.target.checked;

    state[event.target.name] = event.target.value;
    this.setState(state);

}

  search = (event) => {
    event.preventDefault();
    if (event.target.value) {
      // console.log("event.target.value",event.target.value);
      let filtered = this.state.data.filter(item => {
        return (
          // item.name == event.target.value ||
          // item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
          // item.id == Number(event.target.value) ||
          item.level.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.classid.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.mname.toLowerCase().includes(event.target.value.toLowerCase())||
          item.lname.toLowerCase().includes(event.target.value.toLowerCase())


        );
      });
      this.setState({
        ...this.state,
        searchString: event.target.value,
        data: filtered
      });
    } else {
      this.setState({
        ...this.state,
        data: this.state.data,
        searchString: "",
        // idString: "",
        // priceString: ""
      });
      setTimeout(() => {
        this.componentDidMount();
      }, 50);

    }
  };














  componentDidMount() {
    var th = this;
    //this.serverRequest = axios.get(this.props.source)
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Absane/gets.php`)
      .then(function (event) {
        th.setState({
          data: event//.data
        });
      })
  }



  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.name) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    this.setState({ selected: newSelected });


  };

  dateChanged(d) {
    this.setState({ date: d });
  }
 /* handleClick1 = (event, name) => {
    const numSelected = this.state;
    event.preventDefault();
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Absane/insert.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));

    swal("Attendance", "Thank you for enter Attendance");
    //event.checked.reset();

  }*/
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id =>
    this.state.selected.indexOf(id) !== -1;

  getDate() {
    var date = { currentTime: new Date().toLocaleString() };

    this.setState({
      date: date
    });
  }

handleClick1=(e)=>{
 
    const numSelected = this.state;
    e.preventDefault();
    console.log(this.state);
    this.state.data.map(
   (item=>{
postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Absane/insert.php?fn=`+item.name +`&mn=`+item.mname +`&ln=`+item.lname, this.state)
.then(data => console.log(JSON.stringify(data)))
.catch(error => console.error(error));
}))
//
swal("Great !!", "Attendance entered Successfully ^_^ ");  
  }




  render() {



    //const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    const {
      searchString
    } = this.state;
   // const Demo = () => (

    //  <h1>Hi 👋</h1>

   // )
    return (


      
      <GridContainer justify="center">

        <Paper style={{ width: "70%", textAlign: "center" }} >
      
          <br />
          <br />
          <InputForm style={{ fontSize: "20px", background: "#e3f2fd", fontFamily: "Comic Sans MS" }} inputType="date" inputKey="Date" inputLabel="Date" updateInput={this.updateInput} />
          <pre style={{ fontSize: "20px", background: "#e3f2fd", fontFamily: "Comic Sans MS" }}>Search of Students</pre>


          <input
            type="search"

            onChange={this.search}
            value={searchString}
            onChange={this.search}
            style={{ width: "50%", color: "#000", margin: "3px 0", height: "40px", border: "1px solid #000", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
            placeholder="Search" name="search" type="search" placeholder="Search" name="search" value={searchString}
          />
          <Button color="white" justIcon round name="search" type="submit" value="search" onChange={this.updateInput}
          //onClick={this.toggleHidden.bind(this)}
          >
            <Search onSubmit={this.handleSubmit5} />

          </Button>



















  <EnhancedTableToolbar numSelected={selected.length} />
          <div style={{ width: "70%", textAlign: "center" }}>

<form onSubmit={this.handleClick1}>
            <Table aria-labelledby="tableTitle" style={{ fontSize: "20px", background: "#e3f2fd", fontFamily: "Comic Sans MS" }}>
             
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                value="1"
                style={{ width: "70%", backgroundColor: "#0101010", textAlign: "center" }}
                onSelectAllClick={this.handleSelectAllClick}
                rowCount={data.length}
              />








              <TableBody style={{ fontSize: "20px", fontFamily: "Comic Sans MS" }}> 

                {
               /*   stableSort(data, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((n, x) => {
                    const isSelected = this.isSelected(n.name);
*/
this.state.data.map((n,i)=>{
  const isSelected = this.isSelected(n.name);

                    return (


                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, n.name)}
                        role="checkbox"
                        //aria-checked={isSelected}
                        tabIndex={-1}
                        key={i}
                        value="1"
                       // selected={isSelected}
                      >

                        <TableCell padding="checkbox" >
                          <Checkbox  name={n.name}  checked={isSelected} onChange={this.handleInputChange}
                                 color="primary" /> 
                            {/*      <input type="checkbox" onChange={this.updateInput}  name={n.name}   checked={isSelected}/>*/}
                        </TableCell>


                     
                        <TableCell component="th" scope="row" padding="none">
                          {" " +n.level + " " + n.classid}
                        </TableCell>
   <TableCell component="th" scope="row" padding="none">
                          {n.name + " " + n.mname + " " + n.lname}
                        </TableCell>
                      </TableRow>





                    );
                  })}
                { /*emptyRows > 0 && (
                  <TableRow>
                    <TableCell />
                  </TableRow>
                ) */}
              </TableBody>
              <Button type="submit" color="primary" onClick={this.handleClick1}
               value="store1">Store
                </Button>
            </Table>


</form>
          </div>
          
     {/*     <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          /> */}


         
            
                
        </Paper>
       
      </GridContainer>
    );
  }
}


export default withStyles(styles)(EnhancedTable);
