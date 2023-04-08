import Button from "../Button";

const Header = (): JSX.Element => {
  return (
    <div className="flex items-center lg:h-[150px] sm:h-[250px] bg-yellow border border-b-peach border-r-transparent border-l-transparent">
      <div className="flex flex-wrap items-center w-full mx-[30px] lg:mt-[0px] justify-between">
        <div className="">
          <p className="text-[60px] font-light text-purple drop-shadow-lg">
            FNV
          </p>
        </div>
        <div className="flex flex-wrap gap-8 font-Inconsolata ">
          <Button variant={"secondary"} text={"Skills"} href={"#Skills"} />
          <Button variant={"primary"} text={"Projects"} href={"#Projects"} />
          <Button
            variant={"secondary"}
            text={"Contact Me"}
            href={"#ContactMe"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
