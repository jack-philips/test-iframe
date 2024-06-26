import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   // Event listener to listen for messages from the iframe
  //   const receiveMessage = event => {
  //     // Check origin of the message for security
  //     if (event.origin !== 'https://vinylunderground.co.uk/products/the-mr-k-edits-fritz-the-cat') return;

  //     // Handle received data
  //     console.log('Received data from iframe:', event.data);
  //     // You can do whatever you want with the received data here
  //   };

  //   // Add event listener
  //   window.addEventListener('message', receiveMessage);

  //   // Clean up function
  //   return () => {
  //     // Remove event listener when component unmounts
  //     window.removeEventListener('message', receiveMessage);
  //   };
  // }, []);

  return (
    <div>
      <h1>React Web App</h1>
      {/* Embed the iframe */}
      <iframe src="https://vinylunderground.co.uk/products/the-mr-k-edits-fritz-the-cat" title="Music Links" />
    </div>
  );
}

export default App;
