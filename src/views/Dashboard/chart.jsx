import React, { Component } from "react";
import Chart from "react-apexcharts";
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


class Chart1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data1:[],
      options: {
        chart: {
          id: "basic-bar"
        },
      
        xaxis: {
          categories: ['1st','1st']
        }
      },
      series: [
        {
          name: "series-1",
          data:[11.55,78,99,87]
        }
      ]
    };
    this.text=this.text.bind(this);

  }
  componentDidMount() {
    console.log(this.state.series);
    var th=this;
    getData(`http://localhost/my-app/src/test.php`)
    .then((event) => {
      let newSeries = [];
      this.state.series.map((s) => {
        const data = event.map((item) => {
          return item.point
        })
        newSeries.push({ data, name: s.name })
      })
      
      this.setState({
        series: newSeries
      })

//       let series = th.state.series;    //creating copy of object
//       series[0].data = event.map(function(item){
//         return item.point;
//       });                        //updating value
// console.log(event);
// console.log(series);
//       th.setState({ 
//         series
//       });
      
    })
   // console.log(this.state.data1);
    }
    text= (e) => {
        console.log(this.state.data1);
        this.state.data1.map((row)=>(
            <div>{row.point}
            
            </div>
            

        )


        )
    }
  render() {
    const {dailySalesChart }=this.state;
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart 
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
              
              
            />
          </div>
        </div>
        {
                this.state.series.map((row,i)=>(
                 // console.log(series)
                  <div key={i}>
                  <p>{row.point}</p>                
                  </div>
                )
              )
            }
      </div>
    );
  }
}

export default Chart1;