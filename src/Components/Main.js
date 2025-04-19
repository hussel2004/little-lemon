import {  Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from "./Booking/BookingPage";
import BookingForm from "./Booking/BookingForm";
import React,{useState,useReducer} from 'react';
import { fetchAPI,submitAPI } from '../utils/api';
import ConfirmedBooking from './Booking/ConfirmedBooking';
import { updatesTime, initializeTime } from '../utils/bookingUtils';
import MenuPage from './MenuPage';

function Main() {

    

  
  
    const [availableTimes, dispatch] = useReducer(updatesTime, undefined, initializeTime);
    
    const submitForm = (formData) => submitAPI(formData);
    return (
      <Routes>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/booking-confirmation" element={<ConfirmedBooking X/>} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
      </Routes>
    );
  }

export default Main;  