export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <button>Collapse All</button> <button>View Progress</button> 
        <select name="wd-select-publish" id="wd-select-publish">
          <option>Publish All</option>
          <option>Unpublish All</option>
        </select> 
        <button>+ Module</button>

        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                  <li className="wd-content-item">Demo on Lab1</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Questions about homework</li>
                  <li className="wd-content-item">Getting started with React</li>
                  <li className="wd-content-item">Kanbas Implementation</li>
                  <li className="wd-content-item">Hashrouters... what are they?</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Getting Started on Final Prjoect</li>
                  <li className="wd-content-item">Do's and Don'ts of Web Dev</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  