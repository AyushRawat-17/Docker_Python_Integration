import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div>
      <form  noValidate autoComplete="off" action="http://192.168.0.10/cgi-bin/docker.py">
        <TextField id="standard-basic" label="OSNAME" name="x"/>
        <Button variant="contained" color="primary">SUBMIT</Button>
      </form>
    </div>
  );
}

export default App;
