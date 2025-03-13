import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    eventName:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:String,
        required:true,
        trim:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    time:{
        type:String,
        required:true,
        trim:true
    },
  

}, {timestamps: true, versionKey: false});

const EventModel=mongoose.model('events', DataSchema);

export default EventModel;