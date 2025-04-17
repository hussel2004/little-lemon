import {  Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from "./Booking/BookingPage";
import BookingForm from "./Booking/BookingForm";
import React,{useState,useReducer} from 'react';
import { fetchAPI,submitAPI } from '../utils/api';
import ConfirmedBooking from './Booking/ConfirmedBooking';
export function updatesTime(state, action) {
  if (action.type === "SET_DATE") {
    const date =new Date(action.payload) ;
    const timesArray=fetchAPI(date);
    // Simule les heures disponibles selon la date (tu peux remplacer par une vraie logique API plus tard)
    return  timesArray;
}
return state;
}
export function initializeTime() {
  const todayDate=new Date();
  const timesArray=fetchAPI(todayDate);
  return timesArray;
}
function Main() {

    

  
  
    const [availableTimes, dispatch] = useReducer(updatesTime, undefined, initializeTime);
    
    const submitForm = (formData) => submitAPI(formData);
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/booking-confirmation" element={<ConfirmedBooking X/>} />
        <Route path="booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
      </Routes>
    );
  }

export default Main;  