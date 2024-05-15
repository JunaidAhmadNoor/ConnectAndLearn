// getListSubjectController.js
import ListSubject from "../../models/listSubjectModel.js";

const getListSubject = async (req, res) => {
    try {
        const subjects = await ListSubject.find();
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching subjects", error: error.message });
    }
};

export default getListSubject;
