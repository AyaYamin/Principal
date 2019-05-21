import color from '@material-ui/core/colors/deepOrange';

import React, { Component } from 'react';


function getData(url) {
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




class Build2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.updateInput = this.updateInput.bind(this);


        //this.getData = this.getData.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
    }



    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/TableList/get_s.php`)
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



    handleSubmit5 = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/TableList/get_s.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }
    contents = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        <div className="Table">
            <table style={{ background: "pink", border: " 1px solid black" }} >
                <thead style={{ border: " 1px solid black", background: "red" }}>
                    <tr>
                        <th> Name</th>
                      
                        <th>ID Number</th>
                        <th>class_Level</th>
                        <th>class_ID</th>
                        <th>Date Of Birth </th>
                        <th>Parent ID </th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>

                <tbody>
                    {

                        this.state.data.map(item => {
                            if (item.id != 0) {
                                <tr key={item.id3}>

                                    <td>{item.name}</td>
                                    <td>{item.mname}</td>

                                    <td>{item.lname}</td>



                                    <td>{item.id}</td>



                                    <td>{item.level}</td>
                                    <td>{item.classid}</td>


                                    <td>{item.date}</td>

                                    <td>{item.part_id}</td>
                                    <td>{item.addresss}</td>

                                    <td>{item.phone}</td>
                                </tr>
                            }
                        }
                        )
                    }

                </tbody>

            </table>
        </div>

    }
    render() {
        const contents = this.state.data.map(item => {
            //change the title and location key based on your API
            return (
                <tr key={item.id}>

                    <tr>
                        <td>{item.name}</td>

                        <td>{item.mname}</td>

                        <td>{item.lname}</td>



                        <td>{item.id}</td>



                        <td>{item.level}</td>
                        <td>{item.classid}</td>


                        <td>{item.date}</td>

                        <td>{item.part_id}</td>
                        <td>{item.addresss}</td>

                        <td>{item.phone}</td>
                    </tr>
                </tr>)
        })
        return (
            <div className="Table">
                <table style={{ border: " 1px solid black", align: "center" }} onChange={this.props.get}>
                    <thead style={{ border: " 1px solid black"}}>
                        <tr style={{ border: " 1px solid black" ,fontFamily:"Comic Sans MS",fontSize:"18px",background:"rgb(241, 245, 248)"}}>
                            <th> Name</th>                
                            <th>ID Number</th>
                            <th>class_Level</th>
                            <th>class_ID</th>
                           <th>Date Of Birth </th>
                            <th>Parent ID </th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(item =>
                                <tr key={item.id3} style={{fontFamily:"Comic Sans MS",fontSize:"18px"}}>
                                    <td>{item.name+" "+item.mname+" "+item.lname}</td>
                                    <td>{item.id}</td>
                                    <td>{item.level}</td>
                                    <td>{item.classid}</td>
                                    <td>{item.date}</td>
                                    <td>{item.part_id}</td>
                                    <td>{item.addresss}</td>

                                    <td>{item.phone}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Build2

