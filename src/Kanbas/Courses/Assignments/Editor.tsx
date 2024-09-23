export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        {/* Complete on your own */}
        <tr>
            <br />
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select name="wd-group" id="wd-group">
                <option>ASSIGNMENTS</option>
              </select>
            </td>
        </tr>
        <tr>
            <br />
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select name="wd-display-grade-as" id="wd-display-grade-as">
                <option>PERCENTAGE</option>
              </select>
            </td>
        </tr>
        <tr>
            <br />
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select name="wd-submission-type" id="wd-submission-type">
                <option>Online</option>
              </select>
            </td>
        </tr>
        <tr>
            <br />
        </tr>
        <tr>
            <td>
            {/* Empty cell for spacing */}
            </td>
            <td>
                <label>Online Entry Options</label><br/>

                <input type="checkbox" name="check-text-entry" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text-Entry</label><br/>

                <input type="checkbox" name="check-website-url" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="check-media-recordings" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recording</label><br/>

                <input type="checkbox" name="check-student-annotation" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                <input type="checkbox" name="check-file-upload" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label><br/>

            </td>
        </tr>
        <tr>
            <br />
        </tr>
        <tr>
            <td>
            {/* Empty cell for spacing */}
            </td>
            <td align="left" valign="top">
                <label htmlFor="wd-assign-to">Assign To</label><br/>
                <input id="wd-assign-to" value={"Everyone"} />
            </td>
        </tr>
        <tr>
            <br />
        </tr>
        <tr>
            <td>
                {/* Empty cell for spacing */}
            </td>
            <td>
                <label htmlFor="wd-due-date">Due</label>
            </td>
        </tr>
        <tr>
            <td>
            {/* Empty cell for spacing */}
            </td>
            <td align="left" valign="top">
            <input type="date"
                id="wd-due-date"
                value="2024-05-13"/><br/>
            </td>
        </tr>
        <tr>
            <br />
        </tr>
        <tr>
            <td>
            {/* Empty cell for spacing */}
            </td>
            <td>
                <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
                <label htmlFor="wd-available-until">Until</label>
            </td>
        </tr>
        <tr>
            <td>

            </td>
            <td>
                <input type="date"
                    id="wd-available-from"
                    value="2024-05-06"/><br/>
            </td>
            <td>
                <input type="date"
                    id="wd-available-until"
                    value="2024-05-13"/><br/>
            </td>
        </tr>
        <tr>
            <td colSpan={3}>
                <hr />
            </td>
        </tr>
        <tr>
            <td>

            </td>
            <td>

            </td>
            <td>
                <button>Save As</button>
                <button>Cancel</button>
            </td>
        </tr>
      </table>
    </div>
);}
  