import { Link } from "react-router-dom";
import NavLinks from "./NavRoutes";
import { useEffect, useRef, useState } from "react";
import checkIcon from "../assets/indeed/mega-check-svg.svg";

export default function DesktopNav() {
  const [desktopNavToggle, setDesktopNavToggle] = useState(false);
  const deskTopNavToggleHander = () => setDesktopNavToggle((prev) => !prev);

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDesktopNavToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav ref={navRef} className="hidden lg:block">
      <ul className="flex gap-6">
        {/* Solutions */}

        {NavLinks?.map((singLinkDetail) => (
          <>
            {singLinkDetail?.clickable ? (
              <>
                <li
                  key={singLinkDetail?.category}
                  className={
                    desktopNavToggle
                      ? " text-blueviolet-100 text-lg font-semibold"
                      : "text-blueviolet-100 text-lg font-semibold"
                  }
                  onClick={deskTopNavToggleHander}
                >
                  <Link
                    to={singLinkDetail?.link}
                    className="text-blueviolet-100"
                  >
                    {singLinkDetail?.desktopCategoryName}
                    <i
                      className={`fa-solid fa-chevron-down ml-2 ${
                        desktopNavToggle ? "rotate-180" : "rotate-0"
                      }`}
                    ></i>
                  </Link>
                </li>
                {singLinkDetail?.hasMenu && desktopNavToggle && <Solutions />}
              </>
            ) : (
              <li key={singLinkDetail?.category} className="relative group">
                <Link
                  to={singLinkDetail?.link}
                  className=" text-blueviolet-100 text-lg font-semibold hover:text-primary-green"
                >
                  {singLinkDetail?.category}
                  {(singLinkDetail?.hasMenu || singLinkDetail?.hasSubLinks) && (
                    <i
                      className={`fa-solid fa-chevron-down ml-2 rotate-0 group-hover:rotate-180`}
                    ></i>
                  )}
                </Link>

                {/* if Sub Links  */}
                {singLinkDetail?.hasSubLinks && (
                  <ul className="absolute top-6 left-0 bg-primary-white w-36 rounded-md overflow-hidden h-0 group-hover:h-40 group-hover:p-4">
                    {singLinkDetail?.subLinks.map((linkItem) => (
                      <li
                        key={linkItem?.title}
                        className="py-1 hover:text-blueviolet-100"
                      >
                        <Link to={linkItem?.link}>{linkItem?.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )}
          </>
        ))}
      </ul>

      {/* Solutions */}
    </nav>
  );
}

const Solutions = () => {
  const [hoverMenuItem, setHoverMenuItem] = useState({
    heading: NavLinks[1]?.menu[0]?.subHeading,
    index: 0,
  });

  const hoverMenuItemHandler = (heading, index) =>
    setHoverMenuItem({ heading, index });

  return (
    <div className="max-w-full flex overflow-hidden p-0 absolute z-50 left-0 bg-primary-light top-24 rounded-b-2xl mx-2">
      {/* Menu */}
      <ul className="w-[25%] bg-primary-blue text-primary-white py-4 pl-0 mb-0 mt-0">
        {NavLinks[1]?.menu?.map((menuItem, index) => (
          <li
            key={menuItem?.subHeading}
            className={`py-3 px-10 cursor-pointer ${
              hoverMenuItem?.heading === menuItem?.subHeading
                ? "bg-primary-light text-primary-black"
                : ""
            }`}
            onMouseEnter={() =>
              hoverMenuItemHandler(menuItem?.subHeading, index)
            }
          >
            <Link to={menuItem?.link}>
              <span
                className={`flex items-center gap-2 mb-2 ${
                  hoverMenuItem?.heading === menuItem?.subHeading
                    ? "text-primary-black"
                    : "text-white"
                }`}
              >
                <img
                  src={
                    hoverMenuItem?.heading === menuItem?.subHeading
                      ? menuItem?.icon
                      : menuItem?.icon_white
                  }
                  alt={menuItem?.subHeading}
                />
                {menuItem?.subHeading}
              </span>
              {hoverMenuItem?.heading === menuItem?.subHeading && (
                <span className="text-s ml-8 block text-gray-500">
                  {menuItem?.subHeadingDescription}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <SolutionInfo
        solutionInfoData={NavLinks[1]?.menu[hoverMenuItem?.index]}
      />
    </div>
  );
};

const SolutionInfo = ({ solutionInfoData }) => {
  return (
    <div className="w-[75%] relative">
      {solutionInfoData?.hasSubMenu && (
        <div className="grid grid-cols-3">
          {/* Coloumn 1 */}
          {solutionInfoData?.subMenu?.column1Visible && (
            <ul className="w-full m-0 py-4 px-0 border-r  lg:text-s xl:text-m">
              {solutionInfoData?.subMenu?.column1Links?.map(
                (linkItem, index) => (
                  <li
                    key={linkItem?.title + index}
                    className="py-1 flex items-center gap-4 group transition-all overflow-hidden duration-500 hover:text-primary-orange hover:bg-primary-orange hover:bg-opacity-15 font-semibold"
                  >
                    <p className="relative text-primary-orange transition-all duration-300 w-0 group-hover:w-4">
                      <i className="fa-solid fa-caret-right duration-300 absolute -top-2 z-50 -left-10 group-hover:left-full"></i>
                    </p>
                    <Link to={linkItem?.link}>{linkItem?.title}</Link>
                  </li>
                )
              )}
            </ul>
          )}

          {/* Coloumn 2 */}
          {solutionInfoData?.subMenu?.column2Visible && (
            <ul className="w-full border-r lg:text-s xl:text-m px-0 py-4 m-0">
              {solutionInfoData?.subMenu?.column2Links?.map(
                (linkItem, index) => (
                  <li
                    key={linkItem?.title + index}
                    className="py-1 flex items-center gap-4 group transition-all overflow-hidden duration-500 hover:text-primary-orange hover:bg-primary-orange hover:bg-opacity-15 font-semibold"
                  >
                    <p className="relative text-primary-orange transition-all duration-300 w-0 group-hover:w-4">
                      <i className="fa-solid fa-caret-right duration-300 absolute -top-2 z-50 -left-10 group-hover:left-full"></i>
                    </p>
                    <Link to={linkItem?.link}>{linkItem?.title}</Link>
                  </li>
                )
              )}
              {solutionInfoData?.subMenu?.otherServiceVisible && (
                <li className="py-2 pl-4 group hover:text-primary-orange font-bold transition-all duration-300 text-s">
                  <Link to={solutionInfoData?.subMenu?.otherService?.link}>
                    {solutionInfoData?.subMenu?.otherService?.name}
                    <i className="fa-solid fa-arrow-right ml-1 relative right-0 group-hover:-right-2"></i>
                  </Link>
                </li>
              )}
            </ul>
          )}

          {/* Info 1 Visible  */}
          {solutionInfoData?.subMenu?.info1Visible && (
            <div className="m-0 border-r py-4 lg:text-s mt-0 xl:text-m">
              {solutionInfoData?.subMenu?.info1?.hasLink && (
                <p className="py-1 mb-2 mt-0 flex items-center gap-4 group transition-all overflow-hidden duration-500 hover:text-primary-orange hover:bg-primary-orange hover:bg-opacity-15 font-semibold">
                  <p className="relative text-primary-orange transition-all duration-300 w-0 group-hover:w-4">
                    <i className="fa-solid fa-caret-right duration-300 absolute -top-2 z-50 -left-10 group-hover:left-full"></i>
                  </p>
                  <Link to={solutionInfoData?.subMenu?.info1?.linkInfo?.link}>
                    {solutionInfoData?.subMenu?.info1?.linkInfo?.title}
                  </Link>
                </p>
              )}
              <div className="px-4 flex flex-col gap-2">
                <img
                  src={solutionInfoData?.subMenu?.info1?.image}
                  alt={solutionInfoData?.subMenu?.info1?.heading}
                  className="w-full h-40 object-contain rounded-md"
                />
                <h6 className="py-2 m-0 text-sm ">
                  {solutionInfoData?.subMenu?.info1?.heading}
                </h6>

                <p className="m-0">
                  {solutionInfoData?.subMenu?.info1?.description}{" "}
                </p>
                {solutionInfoData?.subMenu?.info1?.boldLinkVisible && (
                  <Link
                    to={solutionInfoData?.subMenu?.info1?.boldLinkInfo?.link}
                    className="block py-4 font-bold"
                  >
                    {solutionInfoData?.subMenu?.info1?.boldLinkInfo?.title}
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Info 2 Visible */}
          {solutionInfoData?.subMenu?.info2Visible && (
            <div className="my-4  lg:text-s xl:text-m px-3">
              <h6 className="py-2 m-0 text-sm">
                {solutionInfoData?.subMenu?.info2?.heading}
              </h6>
              <img
                src={solutionInfoData?.subMenu?.info2?.image}
                alt={solutionInfoData?.subMenu?.info2?.heading}
                className="w-60 my-2 h-28 object-contain rounded-md"
              />
              <ul className="flex flex-col gap-2 my-2 p-0">
                {solutionInfoData?.subMenu?.info2?.data?.map((text) => (
                  <li key={text} className="flex gap-2 items-center">
                    <img src={checkIcon} alt="check" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {solutionInfoData?.descriptionListVisible && (
        <div className="py-4">
          {solutionInfoData?.descriptionList?.map((desc) => (
            <Link
              to={desc?.link}
              key={desc?.title}
              className="flex p-4 items-center gap-2 group transition-all overflow-hidden duration-500 hover:bg-primary-orange hover:bg-opacity-15"
            >
              <p className="relative text-primary-orange transition-all duration-300 w-0 group-hover:w-10">
                <i className="fa-solid fa-caret-right duration-300 absolute top-0 z-50 -left-10 group-hover:left-1/2"></i>
              </p>
              <p className="m-0">
                <span className="font-semibold block group-hover:text-primary-orange lg:text-m">
                  {desc?.title}
                </span>
                <span className="text-gray-600 mt-2 block lg:text-s xl:text-m">
                  {desc?.description}
                </span>
              </p>
            </Link>
          ))}
        </div>
      )}

      <div className="border-t w-full lg:text-s xl:text-m">
        <p className="py-4 px-4 bg-primary-light">
          We Are Excited to Take on Your New Project and Help You Build
          Something Amazing!
          <Link
            to="/"
            className="group text-primary-green hover:text-primary-orange ml-2"
          >
            Get a Quote
            <i className="fa-solid fa-arrow-right ml-1 relative right-0 group-hover:-right-2"></i>
          </Link>
        </p>
      </div>
    </div>
  );
};
