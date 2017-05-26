namespace chatroom.controllers{
    export class anonchatController{

        public posts: models.post[] = [];
        public formdata: models.post;

        static $inject = ['anonService']

        constructor(public anonService: services.anonService)
        {
            anonService.getMessages()
            .then((result) => console.log(result))
            .catch((err) => console.log('no post came back'))
        }

        public postMessage(){
            this.formdata.time = new Date(Date.now());
            this.formdata.user = 'anon'
            this.anonService.postAnon(this.formdata)
        }
    }
}

