import {create} from 'zustand';
import Cookies from "js-cookie";
import axios from  "axios"

const BASE_URL=import.meta.env.VITE_SERVER_URL

const EventStore=create((set)=>({

   CreateEventRequest:async(reqBody)=>{
        try {
            let res=await axios.post(`${BASE_URL}/api/create`,reqBody,{withCredentials : true});
            return res.data['status'] === "success";
        }catch (error) {
            console.log((error));
        }
    },

    EventList: null,
    AllEventRequest:async()=>{
        try {
            let res=await axios.get(`${BASE_URL}/api/events`,{withCredentials : true});
            set({EventList:res.data.event})
            
            return res.data['status'] === "success";
        }catch (error) {
            console.log((error));
        }
    },

    FilteredEventRequest:async(reqBody)=>{
        try {
            let res=await axios.post(`${BASE_URL}/api/filtered`,reqBody,{withCredentials : true});
            if(res.data.event==[]){
                set({EventList:[]})
            }else{
                set({EventList:res.data.event})
            }
           
            return res.data['status'] === "success";
        }catch (error) {
            console.log((error));
        }
    },
    

}))

export default EventStore;