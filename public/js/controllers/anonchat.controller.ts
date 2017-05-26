namespace chatroom.controllers{
    export class anonchatController{

        public posts: models.post[] = [];
        public formData: models.post;

        static $inject = ['anonService']

        constructor(public anonService: services.anonService)
        {
            anonService.getMessages()
            .then((result) => this.posts = <models.post[]>result)
            .catch((err) => console.log('no post came back'))
        }

        public postMessage(){
            this.formData.time = new Date(Date.now());
            this.formData.user = 'anon'
            this.anonService.postAnon(this.formData)
        }
    }
}

