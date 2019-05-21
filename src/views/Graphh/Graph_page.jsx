
import React, { Component } from 'react';

import GridItem from "components/Grid/GridItem.jsx";
import Xxx from "views/Graphh/text";
import Chart1 from "views/Dashboard/chart";
import Donut from "views/Dashboard/dout";
import Charts from "views/Dashboard/chart1"
function getData(url, data) {
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
            .then(response => response.json()) // parses response to JSON


    }

}

export default class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            percentage: 25,
            data:[],
            flag:true
        };

        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }
    
    componentDidMount() {
        var th = this;
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Graphh/class.php`)
          .then(function (event) {
               th.setState({
                 data: event//.data
               });
         })
    }


    handleChangeEvent(event) {
        event.preventDefault();
     
            return (
                <div>
    
    
                    {this.state.flag ? <Donut /> : <div></div>}
                </div>
            );
        
    
    }

    render() {
        return (
            <center>
                <GridItem xs={12} sm={12} md={12} >
                    <div style={{ textAlign: "center" }}>

                    {/*}
                        <Donut />

                        <Chart1 />
        */}
                        <Charts />
{/*}
                        <p style={{ fontSize: "18px", fontFamily: "Comic Sans MS" }}></p>
                        ahlam
                        <div>
                            <select style={{ fontSize: "18px", fontFamily: "Comic Sans MS" }}>
                            {
                            this.state.data.map((item, i) => (   
                                <option key={i} onClick={this.handleChangeEvent}> {item.level}</option>
                            )
                            )}
                                

                            </select>
                                <Xxx />
                            
                        </div>
*/}

                    </div>
                </GridItem>
            </center>
        );
    }
}

