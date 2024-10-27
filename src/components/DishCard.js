export default function DishCard(){
    const dishDatabase = [
      {
        name: "Greek Salad",
        price: "$12.99",
        description:
          "The famous greek salad of crispy lettuce, peppers, olives, and our chicago style feta Cheese, garnished with crunchy garlic and rosmery croutons.",
        imgSrc: "/images/greek salad.jpg",
      },
      {
        name: "Bruchetta",
        price: "$12.99",
        description:
          "The famous greek salad of crispy lettuce, peppers, olives, and our chicago style feta Cheese, garnished with crunchy garlic and rosmery croutons.",
        imgSrc: "/images/greek salad.jpg",
      },
      {
        name: "Greek Salad",
        price: "$12.99",
        description:
          "The famous greek salad of crispy lettuce, peppers, olives, and our chicago style feta Cheese, garnished with crunchy garlic and rosmery croutons.",
        imgSrc: "/images/greek salad.jpg",
      },
    ];
    return (
      <>
        <div className="card-container h-[400px] w-[250px]  ">
          <div className="dish-img w-[100%] h-[45%]  rounded-t-[12px] overflow-hidden ">
            <img
              src="/images/greek salad.jpg"
              alt="dish-image"
              className=" min-w-full min-h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between dish-desc bg-[#edefee] h-[55%] p-[20px]">
            <span className="flex justify-between font-[600] text-[12px]">
              <p>Greek salad</p>
              <p className=" text-[#ee9972]">$12.99</p>
            </span>
            <p className=" text-[12px] text-[#495e57]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              voluptate ducimus eveniet tenetur possimus minus nam quibusdam hic
              alias quisquam?
            </p>
            <p className=" text-[12px]">
              Order a delivery <span></span>
            </p>
          </div>
        </div>
      </>
    );
}