import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/kpis');
        setData(response.data.aggregatedData);
        setRevenueData(response.data.revenueData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Key Performance Indicators</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
          {item._id && <p>Month: {item._id} </p>}
          {item.year && <p>Year: {item.year} </p>}
          {item.totalAmountBorrowing && <p>Total Amount Borrowing: R{item.totalAmountBorrowing}</p>}
          {item.totalAmountToPay && <p>Total Amount Paid: R{item.totalAmountToPay}</p>}
          <hr />
          </li>
        ))}
      </ul>

      <h1>Revenue Data</h1>
      <ul>
        {revenueData.map((item, index) => (
          <li key={index}>
            { <p>Month: {item.month} </p>}
            { <p>Year: {item.year} </p>}
            { <p>Revenue: {item.revenue}</p>}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

