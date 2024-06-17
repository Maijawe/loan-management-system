import React from "react";
import { useState , useEffect } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./home.css";
import { Document, Page ,pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Registrants(){

    const [maxAmountToBorrow , setMaxAmountToBorrow] = useState(0);
    const [info ,setInfo] = useState([]);

    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };

    function handleChange(event ){
    
      setMaxAmountToBorrow(event.target.value);
    };
    
 


    useEffect(() => {
        fetch("/registration")
          .then(response => response.json())
          .then(data => setInfo(data))
          .catch(error => console.error(error));
      }, []);

    

    






return(
    <div>
                <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>MaxAmountToBorrow</Form.Label>
              <Form.Control
                type="number"
                name="maxAmountToBorrow"
                placeholder="Enter max amount to borrow"
                value={maxAmountToBorrow} 
                onChange={handleChange}
               
              />
            </Form.Group>
            </Form>
        {info.map(inf => (
            <div key={inf._id}>
            <h1 >Fullnames :{inf.fullnames}</h1>
            <h2 >ID Number :{inf.idNumber}</h2>
            <p >Email Address : {inf.email}</p>
            <p >Cell Numbers :{inf.cellNumbers}</p>
            <p className="approvalStatus">qualificationStatus :{inf.qualificationStatus}</p>
            <p >Maximum Amount To Borrow :{inf.currentMaxAmountToBorrow}</p>
           
          {inf.statement ?  <p>3 months statement : {inf.statement}</p>           
            : <p>Statement not found</p>
            }  
          {inf.idDocument ? <a href={inf.idDocument}>Click here To view id picture</a> : <p>Id document not available</p>}        

          
            <Button variant="danger"  onClick={async(event) => {

event.preventDefault();        

console.log("maxAmount  :" ,maxAmountToBorrow);

if(inf.qualificationStatus === "qualified"){
            alert("this request has already been qualified in our system");
        }

else{
  
    console.log("maxAmount  :" ,maxAmountToBorrow);

    if( maxAmountToBorrow === 0){
        alert("please enter max amount to borrow");
    }

    else{

  try {
    const url = '/api/register/' + inf.idNumber;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify({
        qualificationStatus: 'qualified',
        idNumber: inf.idNumber,
        maxAmountToBorrow : maxAmountToBorrow
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      alert("You've successfully registered a client with the following idNumber  :"+inf.idNumber)
      // Handle success or update the component state accordingly
    } else {
      console.error('Request failed with status:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }

}
            }

            }}
            

            >Qualify</Button>

         

            </div>
       
      ))}
    </div>
);
}

export default Registrants;