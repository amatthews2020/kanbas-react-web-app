import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="wd-dashboard-course col" style={{ width: "270px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/CS1234.png" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1234 React JS
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                        Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "270px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/CS1100.jpg" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 1100 Computer...
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Introduces students to the...
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "270px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/CS1200.jpg" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 1200 First Year...
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Seeks to support students...
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "270px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/CS1800.jpg" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 1800. Discrete...
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Introduces the mathematic...
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "270px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/CS2500.jpg" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 2500 Fundament...
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Introduces the fundamenta...
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "270px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/CS2800.jpg" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 2800 Logic and...
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Introduces formal logic a...
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "270px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/CS3000.jpeg" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 3000 Algorithms...
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Introduces the basic princi...
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "270px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/CS4400.png" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 4400 Programmin...
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Introduces a systematic ap...
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
