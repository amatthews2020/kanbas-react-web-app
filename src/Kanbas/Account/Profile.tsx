import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">

      <h3>Profile</h3>
      <input value="alice" placeholder="username" className="form-control mb-2"/>
      <input placeholder="password" value="123" type="password" className="form-control mb-2"/>
      <input value="Alice" placeholder="First Name" className="form-control mb-2"/>
      <input value="Wonderland" placeholder="Last Name" className="form-control mb-2"/>
      <input value="2000-01-01" type="date" className="form-control mb-2"/>
      <input value="alice@wonderland" type="email" className="form-control mb-2"/>
      <select className="form-control mb-2">
        <option value="USER" selected>User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link to="/Kanbas/Account/Signin"
            className="btn btn-danger w-100"> Sign Out </Link>
    </div>
);}
