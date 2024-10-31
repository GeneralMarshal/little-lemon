export default function DishCard(props){
    
    return (
      <>
        <div className="card-container h-[400px] w-[250px]  ">
          <div className="dish-img w-[100%] h-[45%]  rounded-t-[12px] overflow-hidden ">
            <img
              src={props.img}
              alt="dish-image"
              className=" min-w-full min-h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between dish-desc bg-[#edefee] h-[55%] p-[20px]">
            <span className="flex justify-between font-[600] text-[12px]">
              <p>{props.name}</p>
              <p className=" text-[#ee9972]">$12.99</p>
            </span>
            <p className=" text-[12px] text-[#495e57]">
              {props.description}
            </p>
            <p className=" text-[12px]">
              Order a delivery <span></span>
            </p>
          </div>
        </div>
      </>
    );
}