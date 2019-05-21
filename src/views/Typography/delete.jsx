/*
import React, { Component } from 'react';



class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    
    onClick() {
        var email = this.props.email;
        this.props.deleteRow(this.props.index);
        $.ajax({
            data: { email_address: email },
            url: '/delete-contact',
            dataType: 'html',
            type: "POST",
            success: function (data, status, xhr) {
                $('.delete-success').slideDown(400);
                setTimeout(function () { $(".delete-success").slideUp(400); }, 5000);
            }
        })
    }

    getInitialState() {
        return {
            contacts: []
        }
    }
    componentDidMount() {
        $.ajax({
            dataType: "json",
            url: '/all-contacts',
            type: "GET",
            context: this,
            success: function (data, status, xhr) {
                this.setState({ contacts: data });
            }
        });
    }
    deleteRow(index) {
        var contacts = [...this.state.contacts];
        contacts.splice(index, 1);
        this.setState({ contacts });
    }
    render() {
        if (this.state.contacts == 0) {
            return (
                <div>Loading</div>
            )
        } else {
            var contactComponents = this.state.contacts.map(function (contact, i) {
                var full_name = contact.first_name + ' ' + contact.last_name

                return <tr key={i} className="contact">
                    <td>{full_name}</td>
                    <td></td>
                    <td>{contact.email_address}</td>
                    <td>{contact.phone_number}</td>
                    <td>{contact.company_name}</td>
                    <td><DeleteButton onClick={this.deleteRow.bind(this)} index={i} email={contact.email_address} /></td>
                </tr>;
            }.bind(this));
            return <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Contact Name</th>
                            <th></th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                            <th>Company Name</th>
                        </tr>

                        {contactComponents};
                  <button onClick={() => { this.onClick(this.props.email) }}>Delete</button>
                    </tbody>
                </table>
            </div>
        }
    }
}

*/














/*
import React,{Component} from 'react';
import List from "views/Typography/list1.jsx";

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
 

class FilteredList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            initialItems: ["Apples",
            "Broccoli",
            "Chicken",
            "Duck",
            "Eggs",
            "Fish",
            "Granola",
            "Hash Browns"
          ],items: [],
         };
    }
   

    filterList(event) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    }


    componentWillMount() {
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/search1.php`)
        .then(function (event) {
            this.setState({
                items: event//.data
            });
        })
         
    }
        
    render() {
        return (
            <div className="filter-list">
                <form>
                    
                        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList} />
                  
                </form>

                <List items={this.state.items} />
            </div>
        );
    }


}

  //React.render(<FilteredList/>, document.getElementById('app'));
  export default FilteredList;
*/