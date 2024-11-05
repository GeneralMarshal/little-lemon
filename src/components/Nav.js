import { IoMdMenu } from "react-icons/io";
import { useState } from "react";


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleDrop(){
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="  w-full flex justify-center">
        <div className=" header-content z-20 flex flex-wrap  items-center justify-center md:justify-between max-w-[900px] w-full px-[20px]">
          <img src="/little-lemon-logo.png" alt="" className=" h-[70px]" />
          <IoMdMenu className="drop-btn hidden" onClick={()=>toggleDrop()} />

          <div className={`nav ${isOpen ? " flex " : "hidden"} items-center md:flex`}>
            <ul className="nav-links flex ">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/a">About</a>
              </li>
              <li>
                <a href="/">Menu</a>
              </li>
              <li>
                <a href="/booking">Reservation</a>
              </li>
              <li>
                <a href="/">Order Online</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
