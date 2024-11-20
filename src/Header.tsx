import icon_menu from "./assets/images/icon-menu.svg";
import icon_close from "./assets/images/icon-close-menu.svg";
import icon_down from "./assets/images/icon-arrow-down.svg";
import icon_todo from "./assets/images/icon-todo.svg";
import icon_calendar from "./assets/images/icon-calendar.svg";
import icon_reminders from "./assets/images/icon-reminders.svg";
import icon_planning from "./assets/images/icon-planning.svg";
import { useState } from "react";

const Header = () => {
  const [isClose, setIsClose] = useState(false);
  return (
    <div className="p-4 max-w-screen-2xl w-full">
      <div className="flex justify-between md:items-center w-full">
        <h1 className="font-bold text-3xl md:basis-20 min-w-24">snap</h1>
        <div
          onClick={() => setIsClose(true)}
          className={`${isClose ? "hidden" : ""} md:hidden`}
        >
          <img src={icon_menu} alt="" />
        </div>

        <div
          className={`${
            isClose
              ? "absolute right-0 top-0 p-7 bg-white w-96 h-100vh md:bg-transparent md:relative md:h-auto"
              : "hidden"
          } md:flex md:items-center md:justify-between text-medium_gray md:basis-11/12 hover:text-almost_black`}
        >
          <img
            onClick={() => setIsClose(false)}
            className="absolute right-5 top-5 md:hidden"
            src={icon_close}
            alt="close-icon"
          />

          <div className="flex flex-col gap-3 mt-16 md:mt-0 md:flex-row md:gap-5 md:items-center">
            <div className="relative">
              <div className="flex items-center gap-3 cursor-pointer features">
                <p>Features</p>
                <img src={icon_down} alt="icon-down" />
              </div>

              {/* under feature when hover */}
              <div className="bg-white md:absolute top-10 md:right-0 hidden p-5 min-w-36 rounded-lg text-medium_gray features-list">
                <div className="flex items-center gap-3 mb-3">
                  <img src={icon_todo} alt="icon todo" />
                  <p>Todo List</p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <img src={icon_calendar} alt="icon calendar" />
                  <p>Calendar</p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <img src={icon_reminders} alt="icon reminders" />
                  <p>Reminders</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icon_planning} alt="icon planning" />
                  <p>planning</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 cursor-pointer company">
                <p>Company</p>
                <img src={icon_down} alt="" />
              </div>
              {/* Company list when hover */}
              <div className="bg-white md:absolute top-10 md:left-0 hidden p-5 min-w-32 rounded-lg text-medium_gray company-list">
                <p className="mb-3">History</p>
                <p className="mb-3">Our Team</p>
                <p>Blog</p>
              </div>
            </div>

            <p className="cursor-pointer">Careers</p>
            <p className="cursor-pointer">About</p>
          </div>

          <div className="flex flex-col gap-3 mt-7 md:mt-0 md:flex-row">
            <button className="md:px-7">Login</button>
            <button className="border py-2 md:px-7 rounded-2xl border-almost_black">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
