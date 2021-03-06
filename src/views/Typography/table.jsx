import color from '@material-ui/core/colors/deepOrange';
import DeleteIcon from '@material-ui/icons/Delete';
import Search from '@material-ui/icons/Search';

import React, { Component } from 'react';

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




class Table1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchString: "",
            idString: "",
            priceString: "",
            //products: data,
            //originalProducts: products,

        };
        this.updateInput = this.updateInput.bind(this);


        //this.getData = this.getData.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
       // this.deleteRow = this.deleteRow.bind(this);
        this.search = this.search.bind(this);
    }
   /* deleteRow(event) {
        var data = [...this.state.data];
        //var x=getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php`, this.state);
        data.splice(event, 1);

        this.setState({ data });
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }*/
    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/search1.php`)
            .then(function (event) {
                th.setState({
                    data: event//.data
                });
            })
        // getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php`)

    }
    deleteall = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/delete_all.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
        return    setTimeout(() => {
            this.componentDidMount();
        }, 50);
    }
 
    handleSubmit5 = (event) => {

    }
    componentWillUnmount() {
        //this.serverRequest.abort();
    }

    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    search = (event) => {
        event.preventDefault();
        if (event.target.value) {
            // console.log("event.target.value",event.target.value);
            let filtered = this.state.data.filter(item => {
                return (
                    item.name.toLowerCase().includes(event.target.value.toLowerCase())||
                    item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.id == Number(event.target.value) ||
                    item.lname.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.classid.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.part_id.toLowerCase().includes(event.target.value.toLowerCase()) ||

                  //  item.city.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.classid.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.phone.toLowerCase().includes(event.target.value.toLowerCase()) ||

                    item.addresss.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.date.toLowerCase().includes(event.target.value.toLowerCase())

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




    render() {
        const {
            searchString
        } = this.state;

        return (
            <div className="Table">


                <input style={{ width: "50%", color: "#000", margin: "3px 0", height: "40px", border: "1px solid #000", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                    type="text" placeholder="Search" name="search" value={searchString}
                    onChange={this.search} />
                <Button color="white" justIcon round name="search" type="submit" value="search" onChange={this.updateInput}
                //onClick={this.toggleHidden.bind(this)}
                >
                    <Search onSubmit={this.handleSubmit5} />

                </Button>

                <center>
                    <table style={{ border: " 1px solid black", align: "center", width: "100%" }} onChange={this.props.get}>
                        <thead style={{ border: " 1px solid black", background: "rgb(241, 245, 248)" }}>
                            <tr style={{ border: " 1px solid black", fontFamily: "Comic Sans MS", fontSize: "18px" }}>
                                <th>Name</th>

                                <th> ID</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Parant ID</th>
                                
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Date Of Birth </th>
                                <th >Remove </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.data.map((item, key) =>

                                    <tr key={key} style={{ fontFamily: "Comic Sans MS", fontSize: "14px" }}>
                                        <td>{item.name + " " + item.mname + " " + item.lname}</td>

                                        <td>{item.id}</td>
                                        <td>{item.level}</td>
                                        <td>{item.classid}</td>
                                        <td>{item.part_id}</td>
                                        
                                        <td>{item.phone}</td>
                                        <td>{item.addresss}</td>
                                        <td>{item.date}</td>
                                        <td><Button color="primary" justIcon round type="submit" 
                                        onClick={this.deleteRow=(e)=>{
                                            getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php?id=`+item.id, this.state)
                                             .then(data => console.log(JSON.stringify(data)))
                                             .catch(error => console.error(error));

                                             setTimeout(() => {
                this.componentDidMount();
            }, 50);
                                        }
                                             }>
                                             <DeleteIcon /></Button></td>
                                    </tr>


                                )


                            }

                        </tbody>

                    </table>
                </center>
                <Button color="primary" type="submit" onClick={this.deleteall}>Delete All Students<DeleteIcon /></Button>
            </div>
        );
    }
}

export default Table1

// <div>
//<h1>All Events</h1>
//<table>
  //  <tbody>
   //     {contents}
 //   </tbody>

//</table>

//</div>