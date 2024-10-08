import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
export default function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap py-3 mx-5">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
    <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
      
      <button id="wd-add-module-btn" className="btn btn-lg me-1 btn-search">
        <CiSearch className="position-relative me-2" style={{ bottom: "1px" }} />
        <input id="wd-search-assignment" className="input-search"
               placeholder="Search..." /></button>

    </div>
);}