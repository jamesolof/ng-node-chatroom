import * as mongoose from 'mongoose'

export interface IMessage extends mongoose.Document{
    text: string;
    user: string;
    time: Date;
}

let messageSchema = new mongoose.Schema({
    text: String,
    user: String,
    time: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<IMessage>('Message', messageSchema); 


