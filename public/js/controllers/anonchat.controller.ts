namespace chatroom.controllers{
    export class anonchatController{

        public posts: models.post[] = [];
        public formData: models.post;

        static $inject = ['anonService']

        constructor(public anonService: services.anonService)
        {
            anonService.getMessages()
            .then((result) => {
                this.posts = <models.post[]>result
            })
            .catch((err) => console.log('no post came back'))
        }

        public postMessage(){
            this.formData.time = new Date(Date.now());
            this.formData.user = 'anon'
            this.anonService.postAnon(this.formData)
        }

        public manageTime(d: Date): string{
            console.log(d)
            let noon = "am"
            let h = d.getUTCHours();
            console.log(h);
            if (h == 0){
                let h = 12
            }
            if (h > 11){
                h = h -= 11;
                noon = "pm"
            }
            let m = d.getMinutes();
            let time = `${h}:${m}${noon}`;
            if (m < 10){
                time = `${h}:0${m}${noon}`;
            }
            return time;
        }
    }
}

