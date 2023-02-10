import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h2>You need an account to start playing your life</h2>
      <Link to={"/register"}>Register</Link>
    </div>
  );
}
