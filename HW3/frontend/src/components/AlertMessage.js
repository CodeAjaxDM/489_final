import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertMessage({ msg, setMsg }) {
  return (
    <Alert variant="primary" onClose={() => setMsg("")} dismissible>
      <Alert.Heading>{msg}</Alert.Heading>
    </Alert>
  );
}

export default AlertMessage;
