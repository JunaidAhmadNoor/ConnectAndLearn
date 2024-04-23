import express from "express";

const router = express.Router();

router.get('/', (req,res) => {
    const array =[
        {name:"junaid"},
        {name:"qazi"},
        {name:"zaidi"},
        {name:"ahmad"}
    ];
    res.send(array)

});
export default router;