import './App.css';
import React, { useEffect, useState } from 'react';
import RawEventPage from './components/RawEventPage'



function App() {
  //const [content, setContent] = useState([])
  const [todo, setTodo] = useState({});
  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState(false);
  const [eventIdx, setEventIdx] = useState(0);

  function prevEvent(){eventIdx === 0? setEventIdx(0): setEventIdx(eventIdx-1)}
  function nextEvent(){eventIdx === 9? setEventIdx(9): setEventIdx(eventIdx+1)}

  useEffect(() => {
    setLoading(true);
    fetch("https://vtn44sn818.execute-api.eu-west-1.amazonaws.com/Prod/sanitize-raw")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data['events']);
        setTodo(data['events'][0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  
  console.log(eventIdx)
  return (
    <>
      {loading ? (
        <div>...Data Loading.....</div>
      ) : (<RawEventPage nextF={nextEvent} backF={prevEvent} event={events[0]===undefined? todo:events[eventIdx]}/>)}
    </>
  );
}



export default App;