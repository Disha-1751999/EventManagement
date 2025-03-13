import EventModel from "../models/EventModel.js"


export const CreateEvent=async(req,res)=>{
   try{
    const {eventName,description,date, location, time}= req.body
    if(!eventName || !description || !date || !location || !time){
      return res.status(401).json({status:'fail',message: 'All filled required'})
    }
    
    let event= await EventModel.create({eventName,description,date, location, time})
    return res.status(200).json({status:'success',message: 'Create Successfully',event:event})
 
   }catch(error){
       console.log(error)
       res.status(500).json({status:'fail',message: 'Internal server error'})
   }

}

export const AllEvent=async(req,res)=>{
    try{
     let events= await EventModel.find({})
     return res.status(200).json({status:'success', event:events})
  
    }catch(error){
        console.log(error)
        res.status(500).json({status:'fail',message: 'Internal server error'})
    }
 
}

export const FilteredEvent=async(req,res)=>{
    try{
     let date= req.body.date 
     let events= await EventModel.find({date:date})
     return res.status(200).json({status:'success', event:events})
  
    }catch(error){
        console.log(error)
        res.status(500).json({status:'fail',message: 'Internal server error'})
    }
 
}


