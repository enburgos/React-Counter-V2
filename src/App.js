import "./App.css";
import { useState } from "react";

const App = () => {
  /*
    La ligne suivante va permettre 3 choses :
    créer un état : counter
    créer une fonction qui va permettre de modifier l'état : setCounter
    définir l'état par défaut : 0
  */

  const [numberOfCounter, setNumberOfCounter] = useState([]);
  const [counter, setCounter] = useState(0);

  return (
    <div className="entirepage">
      <button
        onClick={() => {
          //Je viens faire une copie de mon state users à l'aide du spread operator
          const newCounter = [...numberOfCounter];

          //Je viens modifier cette copie
          newCounter.push(
            <div className="counterNum1">
              <div className="parthaute">
                <button
                  className="less"
                  onClick={() => {
                    // on appelle setCounter pour mettre à jour le state
                    setCounter(counter - 1);
                  }}
                >
                  -
                </button>

                <div className="counter">{counter}</div>
                <br />

                <button
                  className="more"
                  onClick={() => {
                    // on appelle setCounter pour mettre à jour le state
                    setCounter(counter + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="partbasse">
                <button
                  className="reset"
                  onClick={() => {
                    // on appelle setCounter pour mettre à jour le state
                    setCounter(counter - counter);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          );

          //Je fais un setUsers sur la base de cette copie
          setNumberOfCounter(newCounter);
          // setUsers(["Tom", "Gwendoline", "Alexis"]);
          console.log(setNumberOfCounter);
        }}
      >
        Add Counter
      </button>

      {numberOfCounter.map((user, index) => {
        return <h1 key={index}>{user}</h1>;
      })}
    </div>
  );
};
export default App;
