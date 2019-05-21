import React, { Component } from 'react';
import Checkbox from 'views/Icons/Checkbox.jsx';

const items = [
  'One',
  'Two',
  'Three',
];

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

class Application extends Component {
  constructor(props){
    super(props);
    this.state={
      item:''
    }
  }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
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
  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )
  createCheckboxes=(e)=> {
    this.state.item.map((item, i) => {
      {this.createCheckbox}
      return (
        <div key={i}>
          <tr style={{ textAlign: 'right' }}>
            <td style={{ backgroundSize: "14px", color: "pink", textAlign: 'right' }}>
              <Checkbox {...item} checkedMain={this.state.category} onChange={this.handle_onChange.bind(this)} />
            </td>
            <td style={{ color: "#55555", fontSize: "25 px", textAlign: 'right' }}>{item.level}</td>
            <td>{item.id_class}</td>
          </tr>
        </div>
      );
    }
    );
  }
  

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
      
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">Save</button>
           

      </form>
    );
  }
}

export default Application;