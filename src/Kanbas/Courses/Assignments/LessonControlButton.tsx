import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButton() {
  return (
    <div className="float-end mt-4">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}