import React, { Component } from 'react';
import SimpleModalWrapped from "views/Graph/model";
import SimpleModalWrapped5 from "views/Graph/model5.jsx";
import SimpleModalWrapped6 from "views/Graph/model6.jsx";
import SimpleModalWrapped7 from "views/Graph/model7.jsx";

import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import "views/Graph/graph.css";
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
                    className="circle-progress"
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
                    className="circle-text"
                    x="50%"
                    y="50%"
                    dy="9px"
                    textAnchor="middle">
                   
                    {`${this.props.percentage}%`}

                </text>
            </svg>
        );
    }
}

CircularProgressBar.defaultProps = {
    sqSize: 100,
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

export class Garph2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            percentage: 25
        };

        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }

    handel(e) {
        e.preventDefault();
        window.location.assign('/notifications/')
      }
    handleChangeEvent(event) {
        this.setState({
            percentage: event.target.value
        });
    }

    render() {
        return (
            <center>
             <p style={{ fontSize: "18px", fontFamily: "Comic Sans MS" }}>Students With Lower Tracking</p>
                        
              <SimpleModalWrapped5 />
              <CircularProgressBar
                strokeWidth="5"
                sqSize="50"
                percentage="50"
              />  <Button round  style={{width:"100%",background:"#000"}} onClick={this.handel}>Send massage</Button>
           
              <hr></hr>
              <SimpleModalWrapped6 />
              <CircularProgressBar
                strokeWidth="5"
                sqSize="50"
                percentage="55"
              />  <Button round  style={{width:"100%",background:"#000"}} onClick={this.handel}>Send massage</Button>
              <hr></hr>
              <SimpleModalWrapped7 />
              <CircularProgressBar
                strokeWidth="5"
                sqSize="50"
                percentage="57"
              />  <Button round  style={{width:"100%",background:"#000"}} onClick={this.handel}>Send massage</Button>
         
          <hr></hr>
                        <div>

                 


                    </div>
               
            </center>
        );
    }
}

