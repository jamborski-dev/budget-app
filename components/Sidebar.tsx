import { FaEquals, FaFolder, FaHeart, FaTag, FaUserNinja } from "react-icons/fa"
import { BsFillCalendarDateFill } from "react-icons/bs"
import { GoSettings } from "react-icons/go"
import { GrHomeOption } from "react-icons/gr"
import { TiWeatherPartlySunny } from "react-icons/ti"
import { ImList2 } from "react-icons/im"
import { AiOutlineCalculator } from "react-icons/ai"

import Link from "next/link"

export const Sidebar = () => {
  return (
    <aside className="grid-block block__sidebar">
      <ul className="side-nav__list side-nav--primary">
        <NavItem label="Home" route="/" Icon={GrHomeOption} />
        <NavItem label="Financial Forecast" route="/forecast" Icon={TiWeatherPartlySunny} />
        <NavItem label="Transactions List" route="/transactions" Icon={ImList2} />
        <NavItem label="Standing Orders" route="/standing-orders" Icon={BsFillCalendarDateFill} />
        <NavItem label="UC Calculator" route="/uc-calculator" Icon={AiOutlineCalculator} />
        <NavItem label="Folder Icon" route="/" Icon={FaFolder} />
        <NavItem label="Categories" route="/" Icon={FaTag} iconClass="-tag" />
      </ul>

      <ul className="side-nav__list side-nav--secondary">
        <NavItem label="Settings" route="/settings" Icon={GoSettings} />
        <NavItem label="Account" route="/" Icon={FaUserNinja} />
      </ul>
    </aside>
  )
}

const AirLabel = ({ value }) => {
  return <div className="airlabel">{value}</div>
}

const NavItem = ({ route, label, Icon, iconClass = "" }) => {
  return (
    <li className="side-nav__list-item">
      <Link href={route}>
        <a>
          <Icon className={`icon ${iconClass}`} />
          <AirLabel value={label} />
        </a>
      </Link>
    </li>
  )
}
