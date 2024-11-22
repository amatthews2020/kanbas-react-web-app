import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-signin-navigation" className="wd list-group fs-6 rounded-0">
      <Link to="/Kanbas/Account/Signin" id="wd-signin-link"
        className={`list-group-item ${pathname.includes("Signin") ? "active" : "text-danger"} border border-0`} > Signin </Link>
      <Link to="/Kanbas/Account/Signup" id="wd-signup-link"
        className={`list-group-item ${pathname.includes("Signup") ? "active" : "text-danger"} border border-0`}> Signup </Link>
      <Link to="/Kanbas/Account/Profile" id="wd-profile-link"
        className={`list-group-item ${pathname.includes("Profile") ? "active" : "text-danger"} border border-0`}> Profile </Link>
    </div>
);}
