import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-signin-navigation" className="wd list-group fs-6 rounded-0">
      <Link to="/Kanbas/Account/Signin" id="wd-signin-link"
        className="list-group-item active border border-0"> Signin </Link>
      <Link to="/Kanbas/Account/Signup" id="wd-signup-link"
        className="list-group-item text-danger border border-0"> Signup </Link>
      <Link to="/Kanbas/Account/Profile" id="wd-profile-link"
        className="list-group-item text-danger border border-0"> Profile </Link>
    </div>
);}
