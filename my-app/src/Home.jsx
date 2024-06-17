import React, { useState , useEffect} from 'react';
import { Button } from 'react-bootstrap';
import "./home.css";
import Registrants from "./Registrants";
import { useNavigate } from 'react-router-dom';
import AdvanceRequest from "./AdvanceRequest";
import Receipts from "./Receipts";
import Reminders from "./Reminders";

function Home(){
    const navigate = useNavigate();
    function handleClick(){
        navigate('/registrants');
    }

    function handleClickAdvance(){
        navigate('/advanceRequest');
    }
    function handleClickYoutube(){
        navigate('/youtube');
    }
    function handleClickReceipts(){
        navigate('/receipts');
    }

    function handleClickAffordability(){
        navigate('/affordability');
    }
    function handleClickReminders(){
        navigate('/reminders');
    }
    function handleClickKPI(){
        navigate('/kpi');
    }

const [info ,setInfo] = useState("");


    useEffect(() => {
        fetch('/api/fetch')
          .then(response => response.json())
          .then(data => setInfo(data.message))
          .catch(error => console.error(error));
      }, []);

    return(
        <div>
        <div className="button-container">

        <Button variant="danger" onClick={handleClick} >Registration</Button>{' '}
        <Button variant="danger" onClick={handleClickAdvance}>Advance Request</Button>{' '}
        <Button variant="danger" onClick={handleClickReceipts}>Receipts</Button>{' '}
        <Button variant="danger" onClick={handleClickYoutube}>Youtube</Button>{' '}
        <Button variant="danger" onClick={handleClickAffordability}>Affordability Assessment</Button>{' '}
        <Button variant="danger" onClick={handleClickReminders}>Reminders</Button>{' '}
        <Button variant="danger" onClick={handleClickKPI}>KeyPerfomanceIndicators</Button>{' '}
        </div>
        </div>
    );
}

export default Home;