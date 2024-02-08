import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState();

  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
    </div>
  );
}
function Bill({ bill, setBill }) {
  const [services, setServices] = useState(0);
  const [r, setR] = useState(0);

  function Cal(n) {
    const t = (bill / 100) * n;
    setR(t);
  }
  function Sum(n) {
    const sum = (bill / 100) * n;
    setServices(sum);
  }

  return (
    <div>
      <div className="bill">
        <p>How much was the bill?</p>
        <input
          type="text"
          value={bill}
          onChange={(e) => {
            setBill(Number(e.target.value));
          }}
        />
      </div>
      <Tip
        onChange={(e) => {
          Sum(Number(e.target.value));
        }}
        setServices={setServices}
        bill={bill}
        value={services}
      >
        How did you like the services
      </Tip>
      <Tip
        value={r}
        onChange={(e) => {
          console.log(Number(e.target.value));
          Cal(Number(e.target.value));
        }}
        setServices={setServices}
        bill={bill}
      >
        {" "}
        How did your friend like the services
      </Tip>

      <Ans bill={bill} setBill={setBill} services={services} r={r} />
      <Button setServices={setServices} setR={setR} setBill={setBill} />
    </div>
  );
}
function Ans({ bill, services, r }) {
  const total = bill + services + r;
  const totalTip = total - bill;
  return (
    <h1>
      YOU PAY ${total} {" ("} ${bill}
      {"+ "} ${totalTip}
      {" )"}
    </h1>
  );
}
function Tip({ children, setServices, bill, onChange, value }) {
  return (
    <div>
      {children}{" "}
      <select name="" id="" value={value} onChange={onChange}>
        <option value={0}>Dissatisfy</option>
        <option value={5}>it was okay (5%)</option>
        <option value={10}>it was good (10%)</option>
        <option value={20}>amazing(20%)</option>
      </select>
    </div>
  );
}

function Button({ setServices, setR, setBill }) {
  function Reset() {
    setServices(0);
    setR(0);
    setBill(0);
  }

  return <button onClick={Reset}>Reset</button>;
}
