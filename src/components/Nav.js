
export default function Nav() {

  return (
    <>
      <nav className=" h-[120px]  w-full flex justify-center">
        <div className=" header-content z-10 flex flex-wrap  items-center justify-center md:justify-between max-w-[900px] w-full px-[20px]">
          <img src="/little-lemon-logo.png" alt="" className=" h-[70px]" />
          <ul className="nav-links flex ">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
