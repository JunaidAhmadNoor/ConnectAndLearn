// listSubjectModel.js
import mongoose from "mongoose";

const listSubjectSchema = new mongoose.Schema({
    subjectName: { type: String, required: true, unique: true  },
    skills: { type: String, required: true },
    instituteName: { type: String },
    amount: { type: Number, required: true }
});

const ListSubject = mongoose.model("ListSubject", listSubjectSchema);

export default ListSubject;
