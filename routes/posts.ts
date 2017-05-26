import * as express from 'express' 
import Message from '../models/message' 

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){
    Message.find().then((messages) =>{
        res.json(messages)
    }).catch((err) => {
        res.status(500);
        console.log(err)}
  );
});

router.post('/', function(req, res, next){
    console.log(req.body)
    let newpost = new Message;
    newpost.text = req.body.text;
    newpost.user = req.body.user;
    newpost.time = req.body.time;
    if(newpost){
        newpost.save(newpost)
            .then((r) => {
                res.status(200).send('ohyeahhhhhh');
            })
            .catch((err) => {
                res.status(404).send(err)
            });
    }
});

export default router;
