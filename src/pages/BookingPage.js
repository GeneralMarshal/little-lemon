import BookingForm from "../components/BookingForm";
import TestComponent from "../components/TestComponent";
import { useEffect, useState } from "react";
import { useReducer } from "react";

//Import the functions from the utils folder...they need to be exported for you to import them
import { seededRandom, fetchAPI, submitAPI } from "../utils/functions";



export default function BookingPage() {
  const [apiReady, setApiReady] = useState(false);
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [script, setScript] = useReducer()
//   const [response, setResponse] = useState()

  
  useEffect(() => {
    const fetchScript = async () => {
      //No need for these
      /*
      const response = await fetch(
        "https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
      );
      const script = await response.text();
      */

      //Now you can use then here by calling them
      const result1 = seededRandom();
      const result2 = fetchAPI();
      const result3 = submitAPI();
      
      console.log(result1);
      console.log(result2);
      console.log(result3);

      try {
        console.log(script)
        eval(script)
        setApiReady(true);
        dispatch({ type: "initialize" });
      } catch (error) {
        console.log("there was an error fetching the api: ", error);
      }
    };
    fetchScript();

  }, []);
        
  
  

  function updateTimes(state, action) {
    switch (action.type) {
      case "initialize":
        if (apiReady) {
          return fetchAPI(new Date());
        }
        return state;
      default:
        return state;
    }
  }

  function initializeTimes() {
   return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  function submitForm() {}

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  );
}
