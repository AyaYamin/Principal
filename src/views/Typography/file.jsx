import { Search } from '@material-ui/icons/Search';
import { color } from '@material-ui/core/colors/deepOrange';

import React from 'react';

import { render } from 'react-dom';

import ReactFileReader from 'react-file-reader';

import { CsvToHtmlTable } from 'react-csv-to-table';

import Button from "components/CustomButtons/Button.jsx";


function postData(url, formData) {
  // Default options are marked with *
  return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      // headers: {
      //     "Content-Type": "application/json",
      //     "Content-Type": "application/x-www-form-urlencoded",
      // },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
      body: formData,
  })
      .then(response => response.text()); // parses response to JSON
}
export default class File extends React.Component {
  state={
    csvData: '',
  };


  render(){
    return <div>
      <ReactFileReader 
      style={{width:"100%",color:"blue"}}
        multipleFiles={false}
        fileTypes={[".csv"]} 
      handleFiles={this.handleFiles}>
        <Button color="primary">Upload</Button>
      </ReactFileReader>


      <CsvToHtmlTable
        data={this.state.csvData }
        csvDelimiter=","
        tableClassName="table border:solid"
      />
      {/*
<form  action="upload_csvfile.php" onSubmit={this.handleSubmit}><Button color="primary" onSubmit={this.handleSubmit}>Accept</Button></form>
<Button color="primary" onSubmit={this.handleSubmit}>Accept</Button>
<Button color="primary">Deny</Button>

  */}
    </div>;
  } 


  handleFiles = files => {
    var reader = new FileReader();
    reader.onload =  (e) => {
      // Use reader.result
      this.setState({
        csvData: reader.result
      })
    }
    reader.readAsText(files[0]);
  }

  handleSubmit(event) {
    // highlight-range{4}
    event.preventDefault();

    let file = this.state.csvData;
    let formData = this.handleFiles();

    formData.append("file", file);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/upload_csvfile.php`, formData)
        .then(formData => console.log(formData))
        .catch(error => console.error(error));
}

}
