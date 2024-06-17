import react from "react";
import { useState , useEffect } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./home.css";

function Reminders(){

  const [greenRequests, setGreenRequests] = useState([]);
  const [redRequests, setRedRequests] = useState([]);
  const [yellowRequests, setYellowRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/reminders');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setGreenRequests(data.greenRequests);
        setRedRequests(data.redRequests);
        setYellowRequests(data.yellowRequests);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();
  }, []);
    
  const renderCard = (request , colorClass) => (
    <div className={`card ${colorClass}`} key={request.idNumber}>
      <div className="card-body">
        <h5 className="card-title">{request.name} {request.surname}</h5>
        <p className="card-text">Amount to Pay: {request.amountToPay}</p>
        <p className="card-text">Date Borrowed: {request.dateBorrowed}</p>
        <p className="card-text">Date To Pay: {request.dateToPay}</p>
        <p className="card-text">ID Number: {request.idNumber}</p>
        <p className="card-text">Contacts: {request.contacts}</p>
      </div>
    </div>
  );

  return (
    <div>

      <h1>Red Requests:</h1>
      <div className="card-deck">
        {redRequests.map((request) => renderCard(request , 'bg-danger text-white'))}
      </div>

       <h1>Yellow Requests:</h1>
      <div className="card-deck">
        {yellowRequests.map((request) => renderCard(request , 'bg-warning text-dark'))}
      </div>
      <h1>Green Requests:</h1>
      <div className="card-deck">
        {greenRequests.map((request) => renderCard(request , 'bg-success text-white'))}
      </div>
    </div>
  );
}

export default Reminders;