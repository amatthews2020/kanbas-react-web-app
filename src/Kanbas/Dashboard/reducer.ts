import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
const initialState = {
  enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleEnrollment: (state, { payload: { userId, courseId } }) => {
        const enrollmentIndex = state.enrollments.findIndex(
          (enrollment) => enrollment.user === userId && enrollment.course === courseId
        );
        if (enrollmentIndex >= 0) {
          // Unenroll if already enrolled
          state.enrollments.splice(enrollmentIndex, 1);
        } else {
            const newEnrollement: any = {
                _id: new Date().getTime().toString(),
                user: userId,
                course: courseId,  
              };
              state.enrollments = [...state.enrollments, newEnrollement] as any;
        }
      },
    },
},
);
export const { toggleEnrollment } =
enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;