import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./style.css";
const Questionnaire = () => {
  const [beer, setBeer] = useState({
    ale: false,
    stout: false,
    ipa: false,
    lowerAbvValue: 2,
    upperAbvValue: 8,
  });
  const [error, setError] = useState();

  //handles changes made to the find beer questionnaire
  const handleChange = (e) => {
    if (e.target.name !== "type") {
      setBeer({ ...beer, [e.target.name]: e.target.value });
    } else {
      switch (e.target.value) {
        case "ale":
          setBeer({ ...beer, [e.target.value]: !beer.ale });
          break;
        case "stout":
          setBeer({ ...beer, [e.target.value]: !beer.stout });
          break;
        case "ipa":
          setBeer({ ...beer, [e.target.value]: !beer.ipa });
          break;
        default:
          break;
      }
    }
  };

  //handle the submit of the questionnaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(beer);
    if (!beer.ale && !beer.stout && !beer.ipa) {
      setError("no beer type selected");
    }
  };

  return (
    <div className="container d-flex justify-content-center mainContent">
      <Form className="" onSubmit={handleSubmit}>
        <h2>FIND A BEER!</h2>
        <Form.Group>
          {error ? (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          ) : null}
          <div>
            <Form.Label>Beer Type</Form.Label>
          </div>
          <Form.Check
            inline
            label="Ale"
            name="type"
            value="ale"
            type="checkbox"
            id="Ale"
            onChange={(e) => handleChange(e)}
          />
          <Form.Check
            inline
            label="Stout"
            name="type"
            value="stout"
            type="checkbox"
            id="Stout"
            onChange={(e) => handleChange(e)}
          />
          <Form.Check
            inline
            label="IPA"
            name="type"
            value="ipa"
            type="checkbox"
            id="IPA"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <div>
            <Form.Label>ABV Percentage</Form.Label>
          </div>
          <div className="sliders">
            <div>{beer.lowerAbvValue}</div>
            <Form.Control
              type="range"
              name="lowerAbvValue"
              value={beer.lowerAbvValue}
              min={1}
              max={6}
              onChange={(e) => handleChange(e)}
              className="slider"
            />
            <Form.Control
              type="range"
              custom
              name="upperAbvValue"
              value={beer.upperAbvValue}
              min={6}
              max={12}
              onChange={(e) => handleChange(e)}
              className="slider"
            />
            <div>{beer.upperAbvValue}</div>
          </div>
        </Form.Group>
        <Button className="w-100 mt-4" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Questionnaire;
