import DishCard from "./DishCard";
import BookingForm from "./BookingForm";


export default function Main(){
   

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
        price: "$5.99",
        description:
          "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
        imgSrc: "/images/bruchetta.svg",
      },
      {
        name: "Lemon Dessert",
        price: "$5.00",
        description:
          "This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined",
        imgSrc: "/images/lemon dessert.jpg",
      },
    ];
    return (
      <>
        <main className=" flex justify-center pt-[100px] ">
          <div className=" max-w-[900px] w-full ml-[35px] p-[20px] items-center">
            <div className=" flex justify-between items-center mb-[40px]">
              <h1 className="main-head">This weeks specials!</h1>
              <button className="llb">Online menu</button>
            </div>
            <div className=" flex ">
              <div className="dish-grid ">
                {dishDatabase.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={index === dishDatabase.length - 1 ? "" : ""}
                    >
                      <DishCard
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        img={item.imgSrc}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </>
    );
}