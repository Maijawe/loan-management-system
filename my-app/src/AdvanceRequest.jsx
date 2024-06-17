import react from "react";
import { useState , useEffect } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./home.css";
function AdvanceRequest(){
  const [amountToPay , setAmountToPay] = useState(0);
  const [info ,setInfo] = useState([]);

  function handleChange(event ){
    
    setAmountToPay(event.target.value);
  };

    useEffect(() => {
        fetch("/advanceRequest")
          .then(response => response.json())
          .then(data => setInfo(data))
          .catch(error => console.error(error));
      }, []);


     



    

return(

    <div>
                <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Amount To Pay</Form.Label>
              <Form.Control
                type="number"
                name="amountToPay"
                placeholder="Enter amount to pay"
                value={amountToPay} 
                onChange={handleChange}
               
              />
            </Form.Group>
            </Form> 
            
      {info.map((inf) => (
        <div key={inf._id}>
          <h2>Id Number: {inf.idNumber}</h2>
          <p>Amount Borrowing: {inf.amountBorrowing}</p>
          <p>Amount To Pay: {inf.amountToPay}</p>
          <p>Date Borrowing: {inf.dateBorrowing}</p>
          <p>Date To Pay: {inf.dateToPay}</p>
          <p>Contacts: {inf.contacts}</p>
          <p>Type Of Payment: {inf.paymentType}</p>
          
          <p className="approvalStatus">Approval status: {inf.status}</p>

          
            <Button variant="danger" onClick={async() => {

if(inf.status === "approved"){
            alert("this request has already been approved");
        }

else if(amountToPay ===0){
  alert("Please enter amount To Pay");
}

else{

  try {
    const url = '/api/advanceRequest/' + inf.idNumber;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify({
        status: 'approved',
        idNumber: inf.idNumber,
        amountPay: amountToPay
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      // Handle success or update the component state accordingly
      alert("You have successfully approved the advance request");
    } else {
      console.error('Request failed with status:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }


            }

            }}>
              Approve
            </Button>
           
        </div>
      ))}
        
    </div>
 
);

}

export default AdvanceRequest;