import React, { useState } from 'react';
import "./home.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Affordability(){


    const [details , setDetails] = useState({
        firstMonth : "",
        secondMonth : "",
        thirdMonth : ""
    });
    const [avg , setAvg] = useState("");
    const [max , setMax] = useState("");

    function handleChange(event){
        const { name, value } = event.target;
        setDetails((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    }

    async  function handleSubmit  (event){
        event.preventDefault(); 

            // Convert the string values to numbers
    const firstMonth = parseFloat(details.firstMonth);
    const secondMonth = parseFloat(details.secondMonth);
    const thirdMonth = parseFloat(details.thirdMonth);
    
    const averageIncome = firstMonth + secondMonth + thirdMonth ;
    const average = averageIncome / 3;
    const max = average * 0.2
    setAvg(average);
    setMax(max);
    console.log(average);

    
    }



    return(
        <div>
     <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>1st Month Income</Form.Label>
        <Form.Control type="number" name="firstMonth" placeholder="Enter 1st month income" onChange={handleChange} value={details.firstMonth} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>2nd Month Income</Form.Label>
        <Form.Control type="number" name="secondMonth" placeholder="Enter 2nd month income" onChange={handleChange} value={details.secondMonth} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>3rd Month Income</Form.Label>
        <Form.Control type="number" name="thirdMonth" placeholder="Enter 3rd month income" onChange={handleChange} value={details.thirdMonth} />
      </Form.Group>

      <Button variant="danger" type="submit">
        Calculate
      </Button>

      <p>Average Income  : {avg}</p>
      <p>Maximum Amount To Borrow  : {max}</p>

            </Form>
        </div>
    );
}

export default Affordability;