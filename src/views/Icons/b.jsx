
import React from 'react';
console.clear();
//
const { Component } = React;
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

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }
  render() {
    const { name, label, value, checkedMain } = this.props;
    //console.log('checkedMain: ', checkedMain)
    if (checkedMain.indexOf(value) > -1) {
      console.log('check it', value)
      return (<p>
        <label>
          <input

            name={name}
            type='checkbox'
            value={value}
            onChange={() => {
              this.props.onChange(value)
            }}
          />
          <span>{label}</span>
        </label>
      </p>)
    }
    else {
      console.log('do not check it', value)
      return (<p>
        <label>
          <input
            name={name}
            type='checkbox'
            value={value}
            onChange={() => {
              this.props.onChange(value)
            }}
          />
          <span>{label}</span>
        </label>
      </p>)
    }
  }
}

export default class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: [],
      item: []
    }
    this.handle_onChange = this.handle_onChange.bind(this);
  }
  componentDidMount() {
    var th = this;
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/getclass.php`)

      .then(function (event) {
        if (event != null) {
          th.setState({
            item: event//.data

          });
        }
      })


  }
  handle_onChange(value) {
    console.log('currentState: ', this.state);

    console.log('passed value: ', value);
    let _category = this.state.category;
    if (this.state.category.indexOf(value) < 0) {
      console.log('does not exist, so push. . .')
      //if not found add
      const newCategory = this.state.category;
      _category.push(value);
      //console.log('updated newCategory: ', _category);
      this.setState({
        category: _category
      })
    }
    else {
      //if already exists remove
      console.log('already exists!!!')
      _category = _category.splice(_category.indexOf(value), 1);
      this.setState({
        category: _category
      })
    }

    console.log('updated state: ', this.state)
  }
  render() {
    return (
      <div>
        <h2>Get daily alerts for deals of the day:</h2>
        <form>
          <fieldset>
            <legend>Choose your categories:</legend>
            {/*} {checkbox_data.map(item=>(<Checkbox {...item} 
                                        checkedMain={this.state.category}
                                        onChange={this.handle_onChange.bind(this)}
                                        />))}
           */}
            <table style={{ textAlign: "right" }} cellSpacing="15">
              <thead key="one">
                <tr>

                  <th>ClassLevel</th>

                  <th style={{ textAlign: 'right' }}>  Section</th>

                </tr>
              </thead>
              <tbody>
                {
                  this.state.item.map((item, i) => {
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



                  )

                }

              </tbody>
            </table>
          </fieldset>
          <div>
            <input type='text' /> <button type='submit'>Subscribe</button>
          </div>
        </form>
      </div>
    )
  }
}

