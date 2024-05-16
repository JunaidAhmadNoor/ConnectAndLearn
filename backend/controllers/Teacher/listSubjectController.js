// listSubjectController.js
import ListSubject from "../../models/listSubjectModel.js";

const addSubjectToList = async (req, res) => {
    try {
        const { subjectName, skills, instituteName, amount } = req.body;
        const newSubject = new ListSubject({
            subjectName,
            skills,
            instituteName,
            amount
        });
        await newSubject.save();
        res.status(201).send("Subject added successfully!");
    } catch (error) {
        res.status(400).send("Error adding subject: " + error.message);
    }
};

export default addSubjectToList;
