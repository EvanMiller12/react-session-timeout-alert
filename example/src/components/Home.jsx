import { useNavigate } from "react-router-dom";
import { ReactSessionTimeoutAlert } from "react-session-timeout-alert";

function Home() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <>
      <ReactSessionTimeoutAlert
        idleTime={0.1}
        modalTimeout={20}
        alertTitle={"Idle Timeout Warning"}
        alertDescription={"You are about to be logged out due to inactivity"}
        handleSessionTimeout={handleLogOut}
      />

      <div>
        <h1>Welcome to the Home Page</h1>
        <p>Thank you for logging in!</p>
      </div>
    </>
  );
}

export default Home;
