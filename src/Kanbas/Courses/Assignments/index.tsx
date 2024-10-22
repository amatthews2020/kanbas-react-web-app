import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import LessonControlButton from "./LessonControlButton";
import { MdOutlineAssignment } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import * as db from "../../Database";
import { useParams } from "react-router";


export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
      <div id="wd-assignments">

        <AssignmentControls />

        <ul id="wd-modules" className="list-group rounded-0 mx-5">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3 " />
              <IoMdArrowDropdown className=""/>
              <span className="fs-4 ">ASSIGNMENTS</span>
              <LessonControlButtons />
              <FaPlus className="me-2 float-end" />
              <span className="border border-dark rounded float-end mx-3 px-2">40% of Total</span>
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => 
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3 float-start mt-4" />
                    <MdOutlineAssignment className="text-success me-4 fs-3  float-start mt-4" />
                    <div className="float-start">
                      <a className="wd-assignment-link text-decoration-none text-dark fs-4 "
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                        {assignment.title}
                      </a> <br/>
                      <span className="fs-6 ">
                        <span className="text-danger">Multiple Modules</span> | <b>Not Available Until</b> {assignment.available} |<br/>
                        <b>Due</b> {assignment.due} | {assignment.points} Points
                      </span>
                  
                    </div>
                    <LessonControlButton />
                  </li>
                  )} 
            </ul>
          </li>
        </ul>
      </div>
                
               
  );}
  