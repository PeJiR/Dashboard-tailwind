import { useState, useEffect } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="bg-.Very-Pale-Blue  dark:bg-.Very-Dark-Blue-top h-[235px] rounded-b-[20px] pt-8 px-6 mb-[900px]  ">
      <h1 className="text-.Very-Dark-Blue  dark:text-.Very-Pale-Blue text-2xl font-bold mb-1">
        Social Media Dashboard{" "}
      </h1>
      <p className="text-.Dark-Grayish-Blue dark:text-.Desaturated-Blue font-bold mb-6">
        Total Followers: 23,004
      </p>
      <hr className="bg-black mb- "></hr>
      <div className="flex justify-between items-center mt-4">
        <p className="text-.Dark-Desaturated- Blue dark:text-.Desaturated-Blue font-bold">
          Dark mode
        </p>
        <label
          htmlFor="darkmode"
          className="border relative bg-.Toggle w-12 h-6 rounded-full cursor-pointer p-[3px] overflow-hidden"
        >
          <input
            checked={darkMode}
            onChange={handleClick}
            id="darkmode"
            type="checkbox"
            className="peer sr-only"
          />
          <div className=" peer-checked:bg-.Toogle-gradient absolute top-0 left-0 w-full h-full "></div>
          <div className="w-[18px] h-[18px] bg-.Very-Pale-Blue rounded-full peer-checked:translate-x-[24px] transition-all"></div>
        </label>
      </div>
    </header>
  );
};
