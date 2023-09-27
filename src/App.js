import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [serverList, setServerList] = useState([]);
  const apiKey = "B27121BA1951A368156793847434CDA3";
  const apiUrl = `https://api.steampowered.com/IGameServersService/GetServerList/v1/?key=${apiKey}&limit=40000&filter=\\appid\\730\\name_match\\Valve%20CS:GO*Server*`;
  useEffect(() => {
    // Make a GET request to the Steam API
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data here
        setServerList(data.response.servers);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [apiUrl]);

  console.log(serverList);

  return (
    <div className="App">
      <header className="App-header">
        <div>{serverList}</div>
      </header>
    </div>
  );
}

export default App;
