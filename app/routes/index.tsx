import { Link, useMatches } from "@remix-run/react";

export default function Index() {
  const matches = useMatches();
  // data coming from the root loader function
  const data = matches.find(match => match.id === "root");
  const { userSession } = data?.data || {};

  return (
    <div>
      {userSession ? (
        <div>
          Hello {userSession.user.firstName}! <Link to={"/logout"}>Logout</Link>
        </div>
      ) : (
        <div>
          <h2>You need an account to start playing your life</h2>
          <Link to={"/register"}>Register</Link> or{" "}
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </div>
  );
}
