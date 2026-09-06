import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [rawInput, setRawInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [users, setUsers] = useState([]);
  const [usersLoading, setUserLoading] = useState(false);
  const [usersError, setUsersError] = useState(null);
  const [repos, setRepos] = useState([]);
  const [reposLoading, setReposLoading] = useState(false);
  const [reposError, setReposError] = useState(null);

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <input value={rawInput} onChange={e => setRawInput(e.target.value)}/>
      
    </div>
  );
}

export default App;
