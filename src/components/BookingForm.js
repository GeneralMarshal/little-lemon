import "../styles/BookingPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm(props) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();
  const [error, setErrors] = useState({});
  const navigate = useNavigate();

  function handleDate(e) {
    const selectedDate = e.currentTarget.value;
    setDate(selectedDate);
    props.dispatch({ type: "update", payload: selectedDate });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    };

    const errors ={}
    if(new Date(date) < new Date()) {
      errors.date = "Please select a date in the future"
    }
    setErrors(errors)
    console.log(errors)

    if (Object.keys(errors).length === 0){
      
      props.submitForm(formData);
      navigate("/bookingconfirmation");
    }
    
  }

  function handleTime(e) {
    setTime(e.currentTarget.value);
  }
  function handleGuests(e) {
    setGuests(e.currentTarget.value);
  }
  function handleOccasion(e) {
    setOccasion(e.currentTarget.value);
  }

  return (
    <>
      <form
        action=""
        className="booking-form "
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="res-date">Choose Date</label>
        <input
          type="date"
          id="res-date"
          onChange={(e) => {
            handleDate(e);
          }}
          required
        />
        {error.date ? <p className=" input-err">{error.date}</p> : ""}

        <label htmlFor="res-time">Choose Time</label>
        <select
          id="res-time"
          onChange={(e) => {
            handleTime(e);
          }}
          required
        >
          <option value="">Select a time</option>
          {props.availableTimes.map((time, index) => {
            return (
              <option value={time} key={index}>
                {time}
              </option>
            );
          })}
        </select>

        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => {
            handleGuests(e);
          }}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={(e) => {
            handleOccasion(e);
          }}
          required
        >
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input
          className="booking-btn"
          type="submit"
          aria-label="On Click"
          value="Make Your Reservation"
        />
      </form>
    </>
  );
}
