import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;
    return (
        <div>
            {assignments
                .filter((assignment: any) => assignment._id === aid)
                .map((assignment: any) => (
                    <div id="wd-assignments-editor">
                    <div className="mb-3 row">
                        <label htmlFor="assignment1"
                            className="col-sm-5 col-form-label">
                            Assignment Name </label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control"
                                id="assignment1" value={assignment.title} />
                        </div> 
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-8">
                            <textarea className="form-control"
                                id="textarea2" rows={3} cols={50}>
                                {assignment.desc}
                            </textarea>
                        </div>
                    </div>
                    <div className="mb-3 row py-2">
                        <label htmlFor="points"
                            className="col-sm-1 col-form-label">
                            Points </label>
                        <div className="col-sm-7">
                            <input type="text" className="form-control"
                                id="points" value={assignment.points} />
                        </div> 
                    </div>
                    <div className="row py-2">
                        <label htmlFor="wd-assignment-groups"
                            className="col-sm-2 col-form-label">
                            Assignment Groups </label>
                        <div className="col-sm-6">
                            <select id="wd-assignment-groups" className="form-select col-sm-5"> 
                                <option selected> ASSIGNMENTS</option>
                            </select>
                        </div>
                    </div>
                    <div className="my-3 row py-2">
                        <label htmlFor="wd-grades"
                            className="col-sm-2 col-form-label">
                            Display Grade as </label>
                        <div className="col-sm-6">
                            <select id="wd-grades" className="form-select col-sm-5"> 
                                <option selected> Percentage</option>
                                <option>Raw Score</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                        <label htmlFor="wd-sub-type"
                            className="col-sm-2 col-form-label">
                            Submission Type </label>

                        <div className="col-sm-6 border border-secondary rounded">
                            <div className="col-sm-12 py-2">
                                <select id="wd-sub" className="form-select col-sm-5"> 
                                    <option selected> Online</option>
                                </select>
                            </div>
                            <label className="row col-form-label px-2">
                                Online Submission Type
                            </label>
                            <div className="form-check my-1">
                                    <input className="form-check-input" type="checkbox" 
                                            id="text-entry" />
                                    <label className="form-check-label" htmlFor="text-entry">
                                        Text Entry </label>     
                            </div>
                            <div className="form-check my-1">
                                    <input className="form-check-input" type="checkbox" 
                                            id="website-url" />
                                    <label className="form-check-label" htmlFor="website-url">
                                        Website URL </label>     
                            </div>
                            <div className="form-check my-1">
                                    <input className="form-check-input" type="checkbox" 
                                            id="media-recording" />
                                    <label className="form-check-label" htmlFor="media-recording">
                                        Media Recording </label>     
                            </div>
                            <div className="form-check my-1">
                                    <input className="form-check-input" type="checkbox" 
                                            id="student-annotation" />
                                    <label className="form-check-label" htmlFor="student-annotation">
                                        Student Annotation </label>     
                            </div>
                            <div className="form-check my-1">
                                    <input className="form-check-input" type="checkbox" 
                                            id="file-uploads" />
                                    <label className="form-check-label" htmlFor="file-uploads">
                                        File Uploads </label>     
                            </div>
                            
                            </div> 
                        </div>
                    </div>

                    <div>
                        <div className="row my-3">
                            <label htmlFor="wd-assign"
                                className="col-sm-2 col-form-label">
                                Assign </label>

                            <div className="border border-secondary rounded col-sm-6">
                                <div className="row py-2 px-2">
                                    <label className="col-form-label" htmlFor="assign-to">
                                    Assign To
                                    </label>
                                    <input type="text" className="form-control"
                                    id="assign-to" placeholder="Everybody" />
                                </div>

                                <div className="row px-2">
                                    <label className="row col-form-lable px-4" htmlFor="due-date">
                                        Due
                                    </label>
                                    <input type="date" className="form-control"
                                        id="due-date" value={assignment.due} />
                                </div>

                                <div className="row py-2">
                                    <div className="col-sm-6">
                                        <label className="row col-form-lable px-4" htmlFor="available-from">
                                            Available From
                                        </label>
                                        <input type="date" className="form-control"
                                        id="available-from" value={assignment.available} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="row col-form-lable px-4" htmlFor="available-to">
                                            To
                                        </label>
                                        <input type="date" className="form-control"
                                        id="available-to" value={assignment.due} />
                                    </div>
                                    <div className="col-sm-6"></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-8">
                        <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                        <Link  id="wd-signin-btn"
                            to={`/Kanbas/Courses/${cid}/Assignments`}
                            className="btn border border-dark btn-danger me-1 float-end"> Save </Link>
                        <Link  id="wd-signin-btn"
                            to={`/Kanbas/Courses/${cid}/Assignments`}
                            className="btn border border-dark btn-secondary me-1 float-end"> Cancel </Link>
                        </div>
                    </div>
                    </div> 
    ))} </div>
);}
  