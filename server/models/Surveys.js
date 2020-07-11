const moongoose = require('mongoose');
const {Schema} = moongoose;

const recipientSchema = require('./Recipients');
const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientSchema],
    yes: {type:Number,default:0},
    no: {type:Number,default:0},
    _user: { type: Schema.Types.ObjectId,ref:'User'},
    dateSent: Date,
    lastResponded:Date
});
moongoose.model('surveys',surveySchema);