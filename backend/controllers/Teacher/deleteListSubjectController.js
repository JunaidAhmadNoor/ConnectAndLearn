import ListSubject from "../../models/listSubjectModel.js";

const deleteListSubject = async (req, res) => {
    try {
        const { id } = req.params; // Retrieve id from URL parameter
        await ListSubject.findByIdAndDelete(id);
        res.status(200).send("Subject deleted successfully!");
    } catch (error) {
        res.status(500).json({ message: "Error deleting subject", error: error.message });
    }
};

export default deleteListSubject;
