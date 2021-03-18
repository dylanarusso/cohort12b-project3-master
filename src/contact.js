import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './styles.css';

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch"
    }
  }
}));

function Contact() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  return (
   <div className="container">
      <div className="outerFormContainer">
        <div className="innerFormContainer">
          <h2 className="header"> Get in Touch! </h2>
          <form className={classes.root}>
            <TextField
              label="Name"
              placeholder="Jane Doe"
              type="text"
              variant="outlined"
              onChange={e => setName(e.target.value)}
            />
            <TextField
              label="Email"
              placeholder="janedoe@gmail.com"
              type="email"
              variant="outlined"
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              label="Subject"
              placeholder="Help with Todos"
              type="text"
              variant="outlined"
              onChange={e => setSubject(e.target.value)}
            />
            <TextField
              label="Message"
              placeholder="Hello!"
              type="text"
              variant="outlined"
              multiline
              rowsMax="3"
              onChange={e => setMessage(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              type="button"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
