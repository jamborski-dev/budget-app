import { FaEquals, FaFolder, FaHeart, FaTag, FaUserNinja } from "react-icons/fa"
import { GoSettings } from "react-icons/go"

export const Sidebar = () => {
  return (
    <aside className="grid-block block__sidebar">
      <ul className="side-nav__list side-nav--primary">
        <li className="side-nav__list-item">
          <FaEquals className="icon" />
        </li>
        <li className="side-nav__list-item">
          <FaFolder className="icon" />
        </li>
        <li className="side-nav__list-item">
          <FaHeart className="icon -heart" />
        </li>
        <li className="side-nav__list-item">
          <FaTag className="icon -tag" />
        </li>
      </ul>

      <ul className="side-nav__list side-nav--secondary">
        <li className="side-nav__list-item">
          <GoSettings className="icon" />
        </li>
        <li className="side-nav__list-item">
          <FaUserNinja className="icon" />
        </li>
      </ul>
    </aside>
  )
}

/* 
  FaEllipsisV 
  FaEquals
  FaFolder
  FaHeart
  FaServer
  FaTag
  FaTrashAlt
*/
