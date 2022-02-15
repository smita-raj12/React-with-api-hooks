import './App.css';
//import React from 'react';
import { useState, useEffect } from 'react';

function Headlines () {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

          useEffect(() => {
          fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(
            (jsonifiedResponse) => {
              setIsLoaded(true);
              setItems(jsonifiedResponse.results);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
        }, [])
        console.log(items);
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <li>Title:</li>{item.title} 
                  <li>Body: {item.abstract}</li>
                </li>
              ))}
            </ul>
          );
        }
      }   
                         
export default Headlines;      