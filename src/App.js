import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // get api implementation
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url, {
      headers: {
        companyId: '4356278190765'
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        setData(json);
      })
      .catch((e) => {
        console.log("e".e);
      });
  }, []);

  // post and put api implement
  const postPutEvent = () => {

    const data = {
      id: 'def234',
      name: 'Riya',
      mobile: '9876895012',
      designation: 'developer',
      pin: '45678'


    }
    const url = data.id ? "https://jsonplaceholder.typicode.com/comments/"+ data.id : "https://jsonplaceholder.typicode.com/comments";
    fetch(url, {
      method: data.id ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      },
      body:JSON.stringify(data)
    })
      .then(response => {
        console.log("response", response)
        if(response.status == 200){
          alert("success")
        }
      })
      
      .catch(e => {
        console.log("e".e);
      });
  };

  return (
    <div className="App">
      <h2>Welcome</h2>
      {data.map((item) => {
        return <div>{item.email}</div>;
      })}
      <button onClick={postPutEvent}>submit</button>
    </div>
  );
}

export default App;
