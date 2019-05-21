import React, { Component } from 'react';
import GridContainer from "components/Grid/GridContainer.jsx";
import Primary from "components/Typography/Primary.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import InputLabel from '@material-ui/core/InputLabel';
import File from "views/Typography/file.jsx";
import Card from "components/Card/Card.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import swal from 'sweetalert';
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
class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        this.updateInput = this.updateInput.bind(this);
    }


    handleFiles = (files) => {
        // Check for the various File API support.
        if (window.FileReader) {
            // FileReader are supported.
            this.getAsText(files);
        }
    }

    getAsText(fileToRead) {
        var reader = new FileReader();
        let file = fileToRead.target.files[0];
        this.setState({
            file: file
        });
        reader.onloadend = () => {
            this.setState({

                imagePreviewUrl: reader.result
            });
        }

        //reader.readAsDataURL(file);
        // Read file into memory as UTF-8      

        // Handle errors load
        reader.onload = this.fileReadingFinished;
        reader.onerror = this.errorHandler;
        reader.readAsText(file);
    }

    processData(csv) {
        var allTextLines = csv.split(/\r\n|\n/);
        var lines = allTextLines.map(data => data.split(','))

        console.log(lines)
    }

    fileReadingFinished(event) {
        var csv = event.target.result;
        //processData(csv);
    }

    errorHandler(event) {
        if (event.target.error.name === "NotReadableError") {
            alert("Cannot read file!");
        }
    }

    updateInput(event) {
        this.setState({ file: event.target.files[0] });
    }
    handleSubmit(event) {
        // highlight-range{4}
        event.preventDefault();

        let file = this.state.file;
        let formData = new FormData();

        formData.append("file", file);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/upload_csvfile.php`, formData)
            .then(formData => console.log(formData))
            .catch(error => console.error(error));
        event.target.reset();
        return swal({

            title: "Add File of Student  Successfully!",
           
            icon: "success",
            button: "Continue!",
          })
    }

    render() {
        // highlight-range{5}
        return (
            <form action="upload_csvfile.php" onSubmit={this.handleSubmit}>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={this.cardTitleWhite}>Add List Of Students</h4>
                            <p className={this.cardCategoryWhite}></p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer justify="center">
                                <div style={{ textAlign: "center" }}>
                                   <b> <h4 color="primary" style={{textAlign: "center"}} ><b style={{ textAlign: "center" }}>To add List of Students , you should add A file of .csv extension<Button style={{background:"#f8bbd0"}}><a href='http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/Exmple.csv'>Example.csv</a></Button></b></h4></b>
                                </div>

                                <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                                    <InputLabel style={{ color: "#000", alignContent: "Center" }}>Select List Of Students: </InputLabel>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                                    <input color="primary" required type="file" name="file" id="file" ref={this.fileInput} onChange={this.handleFiles} ></input>
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" name="Add" type="submit" value="Add">Add</Button>
                           
                            <File />

                        </CardFooter>
                    </Card>
                </GridItem>
            </form>
        );
    }
}
export default FileInput;

