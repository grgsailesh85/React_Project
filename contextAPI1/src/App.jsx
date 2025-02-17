import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <div>Context API</div>
      <Login />
      <Profile/>
    </UserContextProvider>
  );
};

export default App;
