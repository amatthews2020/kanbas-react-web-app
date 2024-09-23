export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a><br/>
            Multiple Modules | <b>Not Available Until</b> May 6th at 12:00 am |<br/>
            <b>Due</b> May 15th at 11:59pm | 100 Points
          </li>
          <li className="wd-assignment-list-item">
            {/* Complete On Your Own */}
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/124">
              A2 - CSS + BOOTSTRAP
            </a><br/>
            Multiple Modules | <b>Not Available Until</b> May 15th at 12:00 am |<br/>
            <b>Due</b> May 20th at 11:59pm | 100 Points
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/125">
              A3 - JAVASCRIPT + REACT
              </a><br/>
            Multiple Modules | <b>Not Available Until</b> May 20th at 12:00 am |<br/>
            <b>Due</b> May 27th at 11:59pm | 100 Points
          </li>
        </ul>
      </div>
  );}
  