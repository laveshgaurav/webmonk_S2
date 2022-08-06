import { useEffect, useState } from "react";
import "./App.css";
import Card from "./component/card/Card";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    work: "",
  });

  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {/* {users.map((user,index) => (
        <Card key={user.id} name={user.name} email={user.email} />
      ))} */}
      <input
        placeholder="Name"
        value={form.name}
        name="name"
        onChange={inputHandler}
      />

      <input
        placeholder="Email"
        value={form.email}
        name="email"
        onChange={inputHandler}
      />

      <input
        placeholder="age"
        value={form.age}
        name="age"
        onChange={inputHandler}
      />
      <label>
        Select Work
        <select name="work" value={form.work} onChange={inputHandler}>
          {["Developer", "Tester", "Designer"].map((work, index) => (
            <option key={index} value={work}>
              {work}
            </option>
          ))}
        </select>
      </label>
      <button onClick={() => console.log(form)}>Check</button>
    </div>
  );
}

export default App;
