import { BsHeartFill } from "react-icons/bs"
import { GiReceiveMoney } from "react-icons/gi"
import { IoFitnessOutline } from "react-icons/io"
import { FaCreditCard, FaCar, FaBabyCarriage } from "react-icons/fa"
import { SiInstacart, SiHomeassistantcommunitystore } from "react-icons/si"

export default function handler(req, res) {
  const TAGS = [
    // prettier-ignore
    { id: 0,  label: "self",        color: 'rgb(113, 80, 190)', icon: <BsHeartFill /> },
    // prettier-ignore
    { id: 1,  label: "groceries",   color: 'rgb(80, 190, 190)', icon: <SiInstacart /> },
    // prettier-ignore
    { id: 2,  label: "home",        color: 'rgb(80, 190, 123)', icon: <SiHomeassistantcommunitystore /> },
    // prettier-ignore
    { id: 3,  label: "debt",        color: 'rgb(190, 132, 80)', icon: <GiReceiveMoney /> },
    // prettier-ignore
    { id: 4,  label: "car",         color: 'rgb(190, 80, 80)', icon: <FaCar /> },
    // prettier-ignore
    { id: 5,  label: "eating out",    color: 'rgb(190, 80, 178)', icon: <FaCreditCard /> },
    // prettier-ignore
    { id: 6,  label: "fitness",     color: 'rgb(176, 190, 80)', icon: <IoFitnessOutline /> },
    // prettier-ignore
    { id: 7,  label: "baby",        color: 'rgb(190, 168, 80)', icon: <FaBabyCarriage /> }
  ]

  res.status(200).json(TAGS)
}
