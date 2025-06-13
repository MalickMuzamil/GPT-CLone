import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/message');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Hello React Frontend"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h3", null, "Data from Backend:"), /*#__PURE__*/React.createElement("p", null, data)));
}
export default App;