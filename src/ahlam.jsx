/*
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
export default class Example extends React.Component {
    render() {
        const { location } = this.props;

        const homeClass = location.pathname === "/" ? "active" : "";
        const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
        const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";


        return (
            <div>
                <ul class="nav navbar-nav navbar-right">
                    <li class={homeClass}><Link to="/">Home</Link></li>
                    <li class={aboutClass}><Link to="about" activeClassName="active">About</Link></li>
                    <li class={contactClass}><Link to="contact" activeClassName="active">Contact</Link></li>
                </ul>

            </div>
        );
    }
}*/

/*
import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
import '../css/Table.css'
import '../dist/react-bootstrap-table-all.min.css'
 
 
function onSelectRow(row, isSelected, e) {
  if (isSelected) {
    alert(`You just selected '${row['name']}'`)
  }
}
 
const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  unselectable: [2],
  selected: [1],
  onSelect: onSelectRow,
  bgColor: 'gold'
};
 
class Table4 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data} 
                        selectRow={selectRowProp}
        >
          <TableHeaderColumn isKey dataField='id'
          >
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'
          >
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
          >
            Value
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}
 
export default Table4

*/