import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router</h1>
        <nav>
          <ul>
            <li>
              <Link to={`pokemon-list`}>Pokemon List</Link>
            </li>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet/>
    </>
  );
}