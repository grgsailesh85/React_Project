import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div className="flex flex-col gap-3">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="border p-2 w-6/12 rounded"
      />{" "}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-6/12 rounded"
      />
      <button onClick={handleSubmit} className="py-2 px-4 rounded bg-red-500 text-white w-fit">
        Submit
      </button>
    </div>
  );
};

export default Login;
