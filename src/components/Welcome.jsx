import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>WELCOME!</Alert.Heading>
        <p>Nice to see you!</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
      {!show && (
        <Button className="btn btn-success" onClick={() => setShow(true)}>
          Show Alert
        </Button>
      )}
    </>
  );
}

export default Welcome;
