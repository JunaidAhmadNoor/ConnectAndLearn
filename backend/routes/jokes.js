import express from "express";

const router = express.Router();

router.get('/', (req,res) => {
    const jokes =[
        {name:"junaid"},
        {name:"qazi"},
        {name:"zaidi"}
    ];
    res.send(jokes)

});
export default router;