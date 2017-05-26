namespace chatroom.services{
    export class anonService{
        
        static $inject = ['$http'];

        constructor( public $http: ng.IHttpService ) {}

        public getMessages(){
            return this.$http.get('/posts')
            .then((result) => {
                let posts: models.post[] = <models.post[]>result.data;
                for(let i=0; i<posts.length; i++){
                    posts[i].time = new Date(posts[i].time)
                }
                return posts;
            })
            .catch((err) => console.log('cannae get')    
        )};

        public postAnon(entry: models.post){
            this.$http.post('/posts', entry)
            .then((result) => console.log('great success'))
            .catch((err) => console.log('big fail')
            )}
    }
}
