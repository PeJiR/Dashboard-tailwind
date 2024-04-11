export const Header = () => {
  return (
    <header className="bg-.Very-Pale-Blue  h-[235px] rounded-b-[20px] pt-8 px-6  ">
      <h1 className="text-.Very-Dark-Blue text-2xl font-bold mb-1">
        Social Media Dashboard{" "}
      </h1>
      <p className="text-.Dark-Grayish-Blue font-bold mb-6">
        Total Followers: 23,004
      </p>
      <hr className="bg-black  mb- "></hr>
      <div className="flex justify-between items-center">
        <p className="text-.Dark-Desaturated- Bluefont-bold">Dark mode</p>
        <label
          htmlFor="darkmode"
          className="bprder bg-.Toggle w-12 h-6 rounded-full cursor-pointer p-[3px"
        >
          <input id="darkmode" type="checkbox" className="peer sr-only"/>
          <div className="w-[18px] h-[18px] bg-.Light-GrayishBlue rounded-full peer-checked:translate-x-[24px]transtition-all"></div>
        </label>
      </div>
    </header>
  );
};
