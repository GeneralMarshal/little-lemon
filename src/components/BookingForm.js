import { useState } from "react";

export default function BookingForm(props) {
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState();

    function handleDate(e){
        setDate(e.currentTarget.value)
        props.dispatch(e.currentTarget.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submitForm(e)
    }

    function handleTime(e){
        setTime(e.currentTarget.value)
    }
    function handleGuests(e){
        setGuests(e.currentTarget.value)
    }
    function handleOccasion(e){
        setOccasion(e.currentTarget.value)
    }




  return (
    <>
      <form action="" className=" grid max-w-[200px] gap-[20px]" onSubmit={()=>handleSubmit()}>
        <label htmlFor="res-date">Choose Date</label>
        <input type="date" id="res-date" onChange={(e)=>{handleDate(e)}} />

        <label htmlFor="res-time">Choose Time</label>
        <select id="res-time" onChange={(e)=>{handleTime(e)}}>
          <option value="">Select a time</option>
          {
            props.availableTimes.map((time, index)=>{
                return(
                    <option value={time} key={index}>{time}</option>
                )
          })}
        </select>

        <label htmlFor="guests">Number of Guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e)=>{handleGuests(e)}}/>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e)=>{handleOccasion(e)}}>
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your Reservation" />
      </form>
    </>
  );
}
