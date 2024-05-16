// editListSubjectController.js
import ListSubject from "../../models/listSubjectModel.js";

const editListSubject = async (req, res) => {
    try {
        const { id, ...updatedFields } = req.body;
        const updatedSubject = await ListSubject.findByIdAndUpdate(id, updatedFields, { new: true });
        res.status(200).json(updatedSubject);
    } catch (error) {
        res.status(500).json({ message: "Error editing subject", error: error.message });
    }
};

export default editListSubject;
