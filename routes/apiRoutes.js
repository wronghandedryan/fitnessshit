const router = require("express").Router();
const Workouts = require("../models/workout");

router.get('/workouts', (req,res)=> {
    console.log("getting workouts");
    Workouts.find().then(data=> res.json(data)).catch(err=>console.log(err));
});

router.post("/workouts", (req,res)=>{
    Workouts.create({}).then(data=> res.json(data));
});

router.put("/workouts/:id", (req,res)=>{
    Workouts.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
    .then(data=> res.json(data));
});

router.get('/workouts/range', (req,res)=> {
    console.log("getting info");
    Workouts.find().then(data=> res.json(data)).catch(err=>console.log(err));
});


module.exports = router;