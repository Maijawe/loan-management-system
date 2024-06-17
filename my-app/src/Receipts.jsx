import React, { useState } from 'react';
import "./home.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Receipts(){

const [details , setDetails] = useState({
    idNumber :"",
    amountPaid:0,
    datePaid:""
    
});

function handleChange(event){
    const { name, value } = event.target;
    setDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
}


async  function handleSubmit  (event){
    event.preventDefault(); 


    try {
        const response = await fetch('/api/receipts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(details),
        });
    
        if (response.ok) {
          const responseData = await response.json();
          alert(responseData.message)
                   
        } else {
          // Request failed
          // Handle the error
          console.log("failed to transfer data to server");
        }
      } catch (error) {
        // Handle network or other errors
        console.log(error);
      }


}











return(
    <div>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id Number</Form.Label>
        <Form.Control type="text" name="idNumber" placeholder="Enter Id Number" onChange={handleChange} value={details.idNumber} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>AmountPaid</Form.Label>
        <Form.Control type="number" name="amountPaid" placeholder="Enter amount paid" onChange={handleChange} value={details.amountPaid} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date Paid</Form.Label>
        <Form.Control type="date" name="datePaid" placeholder="When did the customer pay" onChange={handleChange} value={details.datePaid} />
      </Form.Group>


    
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
    </div>
);

}

export default Receipts;