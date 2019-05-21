import React, { Component } from 'react';
import "views/Dashboard/circle.css";
import SimpleModalWrapped from "views/Graph/model";
import SimpleModalWrapped1 from "views/Graph/model2";
import SimpleModalWrapped2 from "views/Graph/model3";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
export class CircularProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // Size of the enclosing square
        const sqSize = this.props.sqSize;
        // SVG centers the stroke width on the radius, subtract out so circle fits in square
        const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
        // Enclose cicle in a circumscribing square
        const viewBox = `0 0 ${sqSize} ${sqSize}`;
        // Arc length at 100% coverage is the circle circumference
        const dashArray = radius * Math.PI * 2;
        // Scale 100% coverage overlay with the actual percent
        const dashOffset = dashArray - dashArray * this.props.percentage / 100;

        return (
            <svg
                width={this.props.sqSize}
                height={this.props.sqSize}
                viewBox={viewBox}>
                <circle
                    className="circle-background"
                    cx={this.props.sqSize / 2}
                    cy={this.props.sqSize / 2}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`} />
                <circle
                    className="circle-progress2"
                    cx={this.props.sqSize / 2}
                    cy={this.props.sqSize / 2}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`}
                    // Start progress marker at 12 O'Clock
                    transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }} />
                <text
                    className="circle-text2"
                    x="50%"
                    y="50%"
                    dy=".3em"
                    textAnchor="middle">
                  
                    {`${this.props.percentage}%`}

                </text>
            </svg>
        );
    }
}

CircularProgressBar.defaultProps = {
    sqSize: 200,
    percentage: 25,
    strokeWidth: 20
};



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

export class Garph extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            percentage: 25
        };

        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }


    handleChangeEvent(event) {
        this.setState({
            percentage: event.target.value
        });
    }
    handel(e) {
        e.preventDefault();
        window.location.assign('/notifications/')
      }
    render() {
        return (
            <center>
                <GridItem xs={12} sm={12} md={12} >
                    <div style={{ background: "white", textAlign: "center",width:"100%" ,}}>

                        <p style={{ fontSize: "18px", fontFamily: "Comic Sans MS" }}>Students With Higher Tracking</p>
                        <div style={{ fontSize: "18px", fontFamily: "Comic Sans MS",background:"white" ,width:"100%" }}>
                        
                           
                         

              <SimpleModalWrapped />
              <CircularProgressBar
                strokeWidth="5"
                sqSize="50"
                percentage="98"
              />  <Button round  style={{width:"100%",background:"#000"}} onClick={this.handel}>Send massage</Button>
              <hr></hr>
              <SimpleModalWrapped1/>
              <CircularProgressBar
                strokeWidth="5"
                sqSize="50"
                percentage="97"
              /> <Button round  style={{width:"100%",background:"#000"}} onClick={this.handel}>Send massage</Button>
                   <hr></hr>
              <SimpleModalWrapped2 />
              <CircularProgressBar
                strokeWidth="5"
                sqSize="50"
                percentage="96"
              />   <Button round  style={{width:"100%",background:"#000"}} onClick={this.handel}>Send massage</Button>   
              <hr></hr>
         
              </div>
                        <div>

                    </div>


                    </div>
                </GridItem>

               
            </center>
        );
    }
}

