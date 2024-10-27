import DishCard from "./DishCard";

export default function Main(){
    return (
      <>
        <main className=" flex justify-center pt-[100px] ">
          <div className=" max-w-[900px] w-full ml-[35px] p-[20px] items-center">
            <div className=" flex justify-between items-center mb-[40px]">
              <h1 className="main-head">This weeks specials!</h1>
              <button className="llb">Online menu</button>
            </div>
            <div className="flex justify-between">
              <DishCard />
              <DishCard />
              <DishCard />
            </div>
          </div>
        </main>
      </>
    );
}