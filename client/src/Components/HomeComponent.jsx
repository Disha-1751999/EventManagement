import React, { useEffect } from "react";
import "cally";
import { FaLocationDot } from "react-icons/fa6";
import EventStore from "../store/EventStore";

function HomeComponent() {

     const {EventList,AllEventRequest, FilteredEventRequest}=EventStore()


   useEffect(()=>{
    (async()=>{
       let res=  await AllEventRequest();
    })()
   },[])

   const handleSearch=async(e)=>{      
     let res= await FilteredEventRequest({date:e.target.value})


   }
  

  return (
    <>
      <div className="flex gap-10 p-10 bg-gray-100 min-h-screen">
        <div className="w-[70%] bg-white min-h-4 rounded-md shadow-sm flex flex-col gap-3 p-6 ">
          <div className="text-gray-900 font-semibold text-xl mb-4">Events</div>

          {EventList!=null && EventList.map((item,index)=>{
             return (
                <div key={index}>
             <div
                className="bg-slate-100 p-4 shadow-sm rounded-md cursor-pointer"
                onClick={() => document.getElementById(`${index}`).showModal()}
              >
                <div className="font-semibold text-xl mb-2 text-gray-800">
                  {item.eventName}
                </div>
                {/* <div className="mb-2">
                {item.description}
                </div> */}
                <div className="mb-2 flex gap-2">
                
                <p >Date: {item.date} ,</p>
                <p className="text-lime-600 font-semibold" >{item.time}</p>
                </div>
                <p className="flex gap-2 items-center justify-start">
                  <FaLocationDot /> {item.location}
                </p>
              </div>
              
    
              <dialog id={`${index}`} className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Event Details</h3>
                  <p className="py-4">
                  <div className="font-semibold text-xl mb-2 text-gray-800">
                  {item.eventName}
                </div>
                <div className="mb-2">
                {item.description}
                </div>
                <div className="mb-2 flex gap-2">
                
                <p >Date: {item.date} ,</p>
                <p className="text-lime-600 font-semibold" >{item.time}</p>
                </div>
                <p className="flex gap-2 items-center justify-start">
                  <FaLocationDot /> {item.location}
                </p>
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              </div>)
          })}
          {EventList!=null  && EventList.length==0 && (<div>No Data Found </div>)}
        </div>
        <div className="w-[30%] bg-white min-h-4 rounded-md shadow-sm flex items-center justify-center h-screen">
          {/* <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box p-4" onClick={(e)=>{handleSearch(e)}}>
            <svg
              aria-label="Previous"
              className="fill-current size-4"
              slot="previous"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>
            <svg
              aria-label="Next"
              className="fill-current size-4"
              slot="next"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
            <calendar-month onValueChange={(e)=>{handleSearch(e)}}></calendar-month>
          </calendar-date> */}

          <input type="date" onChange={(e)=>{handleSearch(e)}} />
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
