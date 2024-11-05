import { FaCheckCircle } from "react-icons/fa";

export default function BookingConfirmation() {
    const style = { color: "green", fontSize: "50px",  };
  return (
    <>
      <section className="flex w-[100vw] h-[100vh]">
        <div className="shadow-lg flex flex-col justify-center items-center w-[300px] h-[300px] rounded-[8px] border-[1px] m-auto">
          <p className=" text-[20px] mb-[15px]">Booking confirmed!</p>
          <FaCheckCircle style={style}/>
        </div>
      </section>
    </>
  );
}
