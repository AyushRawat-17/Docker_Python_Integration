import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

function App() {
  return (
      <form  action="http://192.168.0.10/cgi-bin/docker.py">
        <TextField id="standard-basic" label="OSNAME" name="x"/>
        <Button variant="contained" color="primary" type="submit">SUBMIT</Button> 
      </form>
  );
}

export default App;
