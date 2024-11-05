import BookingForm from "../components/BookingForm";
import "../styles/BookingPage.css";

import { useEffect, useReducer, useState } from "react";
import Nav from "../components/Nav";


export default function BookingPage() {


const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};

const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

function initializeTimes(){
    return {availableTimes: fetchAPI(new Date())}
}

function reducer(state, action){
    switch(action.type){
        case "update":
            return {availableTimes: fetchAPI(new Date(action.payload))}
        default :
        return state
    }



}

function submitForm(formData){
  if(submitAPI(formData)){
    console.log("confirmed")
  }
}


  return (
    <>
      <Nav />
      <main className=" booking-main ">
        <h1 className=" text-[22px] font-[600]">Make Your Reservation!</h1>
        <BookingForm
          availableTimes={availableTimes.availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </main>
    </>
  );
}
    