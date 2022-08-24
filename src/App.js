import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getMessaging, getToken } from "firebase/messaging";
import { getTokenFound, messaging, onMessageListener } from "./firebase";
import notification from "./notification";

function App() {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const token = await getTokenFound();
        setToken(token);
        setLoading(false);
        console.log(onMessageListener());
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {loading ? <div>Loading...</div> : <div>Token device:</div>}
      {!loading && token}
    </>
  );
}

export default App;
