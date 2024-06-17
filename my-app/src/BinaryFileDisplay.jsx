import React, { useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';



function BinaryFileDisplay(props){
    const {statement} = props;
    return(
        <div>
            <p>{statement}</p>
        </div>
    );
}
export default BinaryFileDisplay;

