/*import React from 'react'
import ReactDOM from 'react-dom'
import ReactTable from 'react-table'
import PropTypes from 'prop-types'
//import { Checkbox } from '@shopify/polaris';
import Checkbox from '@material-ui/core/Checkbox';
//import TableRow from 'views/Icons/TableRow.jsx';
//const ReactTable = window.ReactTable.default;

function getData(url , data ) {
    // Default options are marked with *
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "default", // *default, //////no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            Accept: 'application/json',



             "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

        .then(response => response.json());
}

const TableRow = ({ selected, id, name, handleSelect }) => {
    console.log(`render TableRow :: ${id} :: ${name}`);
    //console.log(this.state)
    return (
        <tr>
            <td  style={{backgroundSize:"14px",color:"pink"}}>
                <input
                    name={id}
                    type="checkbox"
                    checked={selected}
                    onChange={handleSelect}
                    
                />
            </td>
            <td style={{color:"#55555",fontSize:"25 px"}}>{id}</td>
            <td>{name}</td>
        </tr>
    );
}

TableRow.defaultProps = {
    selected: false
}

export default class MyTable extends React.Component {
    constructor() {
        super();

        this.state = {
            selected: {},
            data: []
        }

    }
    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/getclass.php`)

            .then(function (event) {
                if (event != null) {
                    th.setState({
                        data: event//.data
                    });
                }
            })
    }
    handleSelect = (e) => {
        const selected = this.state.selected;
        selected[e.target.name] = e.target.checked;
        this.setState({ selected });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th />
                        
                        <th>Class Level</th>
                        <th>Section</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        this.state.data.map(item => {
                            if (this.state.data != "") {

                                return (
                                    <TableRow
                                        key={item.id}
                                        id={item.level}
                                        name={item.id_class}
                                        selected={this.state.selected[item.level]}
                                        handleSelect={this.handleSelect}
                                    />
                                );
                            }

                        }

                        )
                    }

                </tbody>
            </table>
        );
    }
}
*/















import React from 'react'
import ReactDOM from 'react-dom'
import ReactTable from 'react-table'
import PropTypes from 'prop-types'
//import { Checkbox } from '@shopify/polaris';
import Checkbox from '@material-ui/core/Checkbox';
//import TableRow from 'views/Icons/TableRow.jsx';
//const ReactTable = window.ReactTable.default;

function getData(url) {
    // Default options are marked with *
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "default", // *default, //////no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            Accept: 'application/json',

            "Content-Type": "application/x-www-form-urlencoded",

            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

        .then(response => response.json());
}





//ReactDOM.render(<MyTable />, document.getElementById("root"));


const TableRow = ({ selected, id, name, handleSelect }) => {
    //console.log(`render TableRow :: ${id} :: ${name}`);
    //console.log(this.state)
    return (
        <tr style={{ textAlign: 'right' }}>
            <td  style={{backgroundSize:"14px",color:"pink", textAlign: 'right' }}>
                <input
                    //key={id}
                    name="check[]"
                    type="checkbox"
                    checked={selected}
                    selected={false}
                    value="check"
                   // checked="false"
                     //isSelectedAll="false"
                    onChange={handleSelect}
                    
                />
            </td>
            <td style={{color:"#55555",fontSize:"25 px", textAlign: 'right' }}>{id}</td>
            <td>{name}</td>
        </tr>
    );
}

/*TableRow.defaultProps = {
    selected: false
}*/


export default class MyTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: {},
            selectAll: 0,
            data: [],
            checked:"false",
            checked: false,

        }
        this.handleChange=this.handleChange.bind(this);
    }
    componentDidMount() {
        var th = this;
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/getclass.php`)

            .then(function (event) {
                if (event != null) {
                    th.setState({
                        data: event//.data
                    });
                }
            })


    }
    handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })
   /* toggleSelectAll() {
		let newSelected = {};

		if (this.state.selectAll === 0) {
			this.state.data.forEach(x => {
				newSelected[x.firstName] = true;
			});
		}

		this.setState({
			selected: newSelected,
			selectAll: this.state.selectAll === 0 ? 1 : 0
		});
	}*/

    handleChange=(event)=>{
       /* const newSelected = {};

		if (this.state.selectAll === 0) {
			this.state.data.forEach(x => {
				newSelected[x.name] = true;
			});
        }
        this.setState({
			selected: newSelected,
            //selectAll: this.state.selectAll === 0 ? 1 : 0
            selectAll:1
        });*/
    
        var items = document.getElementsByName('id');
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == 'checkbox')
                items[i].checked = true;
        }
        this.setState({
            selected:items
        })

    }
   /* const selected=[...this.state.selected];
     this.setState({selected});
     for (const checkbox of selected) {
        this.setState({
            selected:"true"
        })
      }*/

   /* var rowState =[];
    var checkState = !this.state.checked;
    for(var i = 0; i < this.state.selected.length; i++) {
      rowState[i] = checkState;
    }

    this.state.checked = checkState;

    this.setState({
     // rowState: rowState,
      selected: rowState,
      checked: this.state.checked
    });*/

   /* var checklist = this.state.selected;
    checklist[event].checked = !checklist[event].checked;
    //var children = checklist[index].children;
    for(var i = 0; i < this.state.selected.length; i++) {
        //checklist[i] = checklist;
       
      }
    */

   handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

    

    handleSelect = (event) => {
       /* const selected = this.state.selected;
        selected[e.target.name] = e.target.checked;
        this.setState({ selected });*/
   
    }

    render() {
        return (
            <table style={{ textAlign: "right"}}>
                <thead key="one">
                    <tr>
                        <th >
                           {/*   <input
                               // onChange={this.handleChange}
                               onSelect={this.handleSelectAllClick} 
                                // type="checkbox" 
                                id="selectALL"
                                
                                type="checkbox"
                                className="checkbox"
                                //checked={this.state.selected[this.name] === true}
                                //onChange={() => this.handleChange(this.name)}
                            />*/}
                        </th>
                       {/* <div style={{ color: "blue" ,textAlign: 'right' }}>*/} 
                            <th>ClassLevel</th>

                       {/* </div> */}

                         {/* <div style={{ color: "blue" ,textAlign: 'right' }}>*/}

                            <th style={{ textAlign: 'right' }}>  Section</th>

                        {/* </div>*/}

                    </tr>
                </thead>
                <tbody>
                    {

                        this.state.data.map((item,i) => {
                            if (this.state.data != "") {

                                return (
                                    <TableRow
                                        key={i}
                                        id={item.level}
                                        name={item.id_class}
                                    
                                        selected={this.state.selected[item.level]} 
                                        handleSelect={this.handleSelectAllClick}
                                    />
                                );
                            }

                        }

                        )
                    }

                </tbody>
            </table>
        );
    }
}



