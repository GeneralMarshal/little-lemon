
export default function Header(){
    return (
      <>
        <header className=" header">
          <div className=" header-container  ">
            <h1 className=" ll  ">
              Little Lemon
            </h1>
            <p className=" lll ">
              Lagos
            </p>
            <p className=" llp">
              We are a family owned mediterranean resturant, focused on
              traditional recipies served with a modern twist,
            </p>
            <button className="llb ">
              Reserve a table
            </button>
            <div className="featured-dish">
              <img
                src="/images/featured-dish.jpg"
                alt=""
                className=" min-w-full min-h-full hidden md:block"
              />
            </div>
          </div>
          <img src="/images/restaurant.jpg" alt="" className="overlay " />
        </header>
      </>
    );
}