// src/utils/bookingUtils.js
import { fetchAPI } from './api';

export function updatesTime(state, action) {
  if (action.type === "SET_DATE") {
    const date = new Date(action.payload);
    return fetchAPI(date);
  }
  return state;
}

export function initializeTime() {
  const todayDate = new Date();
  return fetchAPI(todayDate);
}
