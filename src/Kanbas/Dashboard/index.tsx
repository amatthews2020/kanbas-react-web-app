import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/CS1234.png" width={200} /> {/*Find an image*/}
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 2 */}
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1100/Home">
            <img src="/images/CS1100.jpg" width={200} /> {/*Find an image*/}
            <div>
              <h5>
                 CS 1100 Computer Science and Its Applications
              </h5>
              <p className="wd-dashboard-course-title">
                 Introduces students to the field of computer science
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 3 */}
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1200/Home">
            <img src="/images/CS1200.jpg" width={200} /> {/*Find an image*/}
            <div>
              <h5>
                 CS 1200 First Year Seminar
              </h5>
              <p className="wd-dashboard-course-title">
                 Seeks to support students in their transition to Northeastern and in their 
                 holistic development as they become responsible members of the college and 
                 niversity communities.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 4 */}
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1800/Home">
            <img src="/images/CS1800.jpg" width={200} /> {/*Find an image*/}
            <div>
              <h5>
                 CS 1800. Discrete Structures
              </h5>
              <p className="wd-dashboard-course-title">
                 Introduces the mathematical structures and methods that form the foundation of computer science.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 5 */}
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/2500/Home">
            <img src="/images/CS2500.jpg" width={200} /> {/*Find an image*/}
            <div>
              <h5>
                 CS 2500 Fundamentals of Computer Science 1
              </h5>
              <p className="wd-dashboard-course-title">
                 Introduces the fundamental ideas of computing and the principles of programming.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 6 */}
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/2800/Home">
            <img src="/images/CS2800.jpg" width={200} /> {/*Find an image*/}
            <div>
              <h5>
                 CS 2800 Logic and Computation
              </h5>
              <p className="wd-dashboard-course-title">
                 Introduces formal logic and its connections to computer and information science.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 7 */}
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/3000/Home">
            <img src="/images/CS3000.jpeg" width={200} /> {/*Find an image*/}
            <div>
              <h5>
                 CS 3000 Algorithms and Data
              </h5>
              <p className="wd-dashboard-course-title">
                 Introduces the basic principles and techniques for the design, analysis, and 
                 implementation of efficient algorithms and data representations.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 8 */}
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/4400/Home">
            <img src="/images/CS4400.png" width={200} /> {/*Find an image*/}
            <div>
              <h5>
                 CS 4400 Programming Languages
              </h5>
              <p className="wd-dashboard-course-title">
                 Introduces a systematic approach to understanding the behavior of programming 
                 languages.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
