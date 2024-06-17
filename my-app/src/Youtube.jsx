import React, { useState } from 'react';
import "./home.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Youtube(){


    const [details , setDetails] = useState({
        title :"",
        description:"",
        link:"",
        
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
            const response = await fetch('/api/youtube', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(details),
            });
        
            if (response.ok) {
              console.log("success");
              alert("Successfully recorded");
            } else {
              // Request failed
              // Handle the error
              alert("failed to transfer data");
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
        <Form.Label>Title Of Video</Form.Label>
        <Form.Control type="text" name="title" placeholder="Enter Video Title" onChange={handleChange} value={details.title} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Video Description</Form.Label>
        <Form.Control type="text" name="description" placeholder="Enter video description" onChange={handleChange} value={details.description} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Video Link</Form.Label>
        <Form.Control type="text" name="link" placeholder="Enter Video Link" onChange={handleChange} value={details.link} />
      </Form.Group>


    
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
}
export default Youtube;