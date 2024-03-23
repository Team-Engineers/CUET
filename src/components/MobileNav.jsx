import { Link } from "react-router-dom";
import checkIcon from "../assets/indeed/mega-check-svg.svg";
import { useState } from "react";
import NavLinks from "./NavRoutes";

export default function MobileNav({ mobMenuToggle }) {
  return (
    <nav
      className={`absolute top-28 bg-primary-white left-0 text-s overflow-hidden ${
        mobMenuToggle ? "h-auto p-4" : "h-0"
      }`}
    >
      {NavLinks.map((singleLinkItem, index) => (
        <SingleLinkItem
          key={`${singleLinkItem.category}-${index}`}
          singleLinkItem={singleLinkItem}
        />
      ))}
    </nav>
  );
}

const SingleLinkItem = ({ singleLinkItem }) => {
  const categoryStyle =
    "border-b transition-all border-primary-orange hover:text-primary-orange cursor-pointer";
  const [menuToggle, setMenuToggle] = useState(false);

  const menuToggleHandler = () => setMenuToggle((prev) => !prev);

  return (
    <div
      className={`py-4 px-2 overflow-hidden ${
        menuToggle ? "h-64 overflow-y-scroll" : "h-0"
      }`}
    >
      {(singleLinkItem.hasMenu || singleLinkItem.hasSubLinks) && (
        <p
          className={`flex justify-between ${categoryStyle} ${
            menuToggle ? "text-primary-orange" : ""
          }`}
          onClick={menuToggleHandler}
        >
          <span>{singleLinkItem.category}</span>
          <span>
            <i
              className={`fa-solid fa-chevron-down transition-all ease-in-out duration-300 ${
                menuToggle ? "rotate-180" : "rotate-0"
              }`}
            ></i>
          </span>
        </p>
      )}

      {/* If there is no sub menu */}
      {!singleLinkItem.hasMenu && !singleLinkItem.hasSubLinks && (
        <Link className={`block ${categoryStyle}`} to={singleLinkItem.link}>
          {singleLinkItem.category}
        </Link>
      )}

      {/* Sub Menu */}
      {singleLinkItem.hasMenu &&
        singleLinkItem.menu.map((singleMenu, index) => (
          <SingleMenu
            key={`${singleMenu.subHeading}-${index}`}
            singleMenuItem={singleMenu}
          />
        ))}

      {singleLinkItem.hasSubLinks && (
        <ul className="p-4">
          {singleLinkItem.subLinks.map((linkItem) => (
            <li key={linkItem.title} className="hover:text-primary-green py-2">
              <Link to={linkItem.link}>{linkItem.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SingleMenu = ({ singleMenuItem }) => {
  const [subMenuToggle, setSubMenuToggle] = useState(false);

  const handleSubMenuToggle = () => setSubMenuToggle((prev) => !prev);

  return (
    <div className={`overflow-hidden`}>
      <p
        className={`flex items-center justify-between border-b py-4 px-4 cursor-pointer ${
          subMenuToggle ? "bg-sky-100" : ""
        }`}
        onClick={handleSubMenuToggle}
      >
        <span className="flex items-center gap-2 text-m">
          <img src={singleMenuItem.icon} alt={singleMenuItem.subHeading} />
          {singleMenuItem.subHeading}
        </span>
        <span>
          <i
            className={`fa-solid fa-chevron-down transition-all duration-300 ease-in-out ${
              subMenuToggle ? "rotate-180" : "rotate-0"
            }`}
          ></i>
        </span>
      </p>

      {/* Has SubMenu  */}
      {singleMenuItem.hasSubMenu && (
        <SingleSubMenu
          subMenuToggle={subMenuToggle}
          singleSubMenu={singleMenuItem.subMenu}
        />
      )}

      {singleMenuItem.descriptionListVisible && (
        <DescriptionList
          descriptionList={singleMenuItem.descriptionList}
          subMenuToggle={subMenuToggle}
        />
      )}
    </div>
  );
};

const SingleSubMenu = ({ singleSubMenu, subMenuToggle }) => {
  return (
    <div
      className={`font-semibold grid grid-cols-1 sm:grid-cols-2 overflow-y-scroll ${
        subMenuToggle ? "h-52 px-4" : "h-0"
      }`}
    >
      {/* Coloumn 1 */}
      <ul className="my-4">
        {singleSubMenu.column1Visible &&
          singleSubMenu.column1Links.map((linkItem, index) => (
            <li
              key={linkItem.title + index}
              className="py-1 flex items-center gap-4 group transition-all overflow-hidden duration-500 hover:bg-primary-orange hover:bg-opacity-15"
            >
              <p className="relative text-primary-orange transition-all duration-300 w-0 group-hover:w-4">
                <i className="fa-solid fa-caret-right duration-300 absolute -top-2 z-50 -left-10 group-hover:left-full"></i>
              </p>
              <Link to={linkItem.link}>{linkItem.title}</Link>
            </li>
          ))}
      </ul>

      {/* Coloumn 2 */}
      {singleSubMenu.column2Visible && (
        <ul className="my-4">
          {singleSubMenu.column2Links.map((linkItem, index) => (
            <li
              key={linkItem.title + index}
              className="py-1 flex items-center gap-4 group transition-all overflow-hidden duration-500 hover:bg-primary-orange hover:bg-opacity-15"
            >
              <p className="relative text-primary-orange transition-all duration-300 w-0 group-hover:w-4">
                <i className="fa-solid fa-caret-right duration-300 absolute -top-2 z-50 -left-10 group-hover:left-full"></i>
              </p>
              <Link to={linkItem.link}>{linkItem.title}</Link>
            </li>
          ))}

          {singleSubMenu.otherServiceVisible && (
            <li className="py-1 pl-4 group hover:text-primary-orange font-bold transition-all duration-300">
              <Link to={singleSubMenu.otherService.link}>
                {singleSubMenu.otherService.name}
                <i className="fa-solid fa-arrow-right ml-1 relative right-0 group-hover:-right-2"></i>
              </Link>
            </li>
          )}
        </ul>
      )}

      {/* Info 1 Visible  */}
      {singleSubMenu.info1Visible && (
        <div className="my-4 flex flex-col gap-2">
          {singleSubMenu.info1.hasLink && (
            <Link to={singleSubMenu.info1.linkInfo.link}>
              {singleSubMenu.info1.linkInfo.title}
            </Link>
          )}
          <img
            src={singleSubMenu.info1.image}
            alt={singleSubMenu.info1.heading}
            className="w-44 h-36 object-cover rounded-md"
          />
          <h6 className="font-bold">{singleSubMenu.info1.heading}</h6>
          <p>{singleSubMenu.info1.description} </p>
          {singleSubMenu.info1.boldLinkVisible && (
            <Link
              to={singleSubMenu.info1.boldLinkInfo.link}
              className="block py-4 font-bold"
            >
              {singleSubMenu.info1.boldLinkInfo.title}
            </Link>
          )}
        </div>
      )}

      {/* Info 2 Visible */}
      {singleSubMenu.info2Visible && (
        <div className="my-4">
          <h6>{singleSubMenu.info2.heading}</h6>
          <img
            src={singleSubMenu.info2.image}
            alt={singleSubMenu.info2.heading}
            className="w-44 h-36 object-cover rounded-md"
          />
          <ul className="flex flex-col gap-2 my-2">
            {singleSubMenu.info2.data.map((text) => (
              <li key={text} className="flex gap-2 items-center">
                <img src={checkIcon} alt="check" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const DescriptionList = ({ descriptionList, subMenuToggle }) => {
  return (
    <div
      className={`overflow-hidden ${
        subMenuToggle ? "h-52 overflow-y-scroll px-4" : "h-0"
      }`}
    >
      {descriptionList.map((desc) => (
        <Link
          to={desc.link}
          key={desc.title}
          className="flex p-4 items-center gap-2 group transition-all overflow-hidden duration-500 hover:bg-primary-orange hover:bg-opacity-15"
        >
          <p className="relative text-primary-orange transition-all duration-300 w-0 group-hover:w-10">
            <i className="fa-solid fa-caret-right duration-300 absolute top-0 z-50 -left-10 group-hover:left-0"></i>
          </p>
          <p>
            <span className="font-semibold block group-hover:text-primary-orange">
              {desc.title}
            </span>
            <span className="text-gray-600 mt-2 block">{desc.description}</span>
          </p>
        </Link>
      ))}
    </div>
  );
};
