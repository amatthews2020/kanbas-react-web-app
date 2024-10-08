import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span></td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td> </tr>
          {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Andrew</span>{" "}
              <span className="wd-last-name">Matthews</span></td>
            <td className="wd-login-id">001017574</td>
            <td className="wd-section">S103</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-10-05</td>
            <td className="wd-total-activity">11:11:11</td> </tr>
            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Joseph</span>{" "}
              <span className="wd-last-name">Brandon</span></td>
            <td className="wd-login-id">001343345</td>
            <td className="wd-section">S103</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-10-05</td>
            <td className="wd-total-activity">10:11:45</td> </tr>
            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Jay</span>{" "}
              <span className="wd-last-name">Shah</span></td>
            <td className="wd-login-id">001018142</td>
            <td className="wd-section">S103</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2024-10-05</td>
            <td className="wd-total-activity">01:34:03</td> </tr>
            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Spencer</span>{" "}
              <span className="wd-last-name">Rode</span></td>
            <td className="wd-login-id">001015831</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">INSTRUCTER</td>
            <td className="wd-last-activity">2024-9-30</td>
            <td className="wd-total-activity">09:22:11</td> </tr>
        </tbody>
      </table>
    </div> 
    );
}