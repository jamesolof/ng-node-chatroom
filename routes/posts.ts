import * as express from 'express'

import Message from '../models/message' 

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  
});

router.post('/', function(req, res, next){
    console.log(req.body)
    let newpost = new Message;
    newpost.text = req.body.text;
    newpost.user = req.body.user;
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
