// import { BsHeartFill } from "react-icons/bs"
// import { GiReceiveMoney } from "react-icons/gi"
// import { IoFitnessOutline } from "react-icons/io"
// import { FaCreditCard, FaCar, FaBabyCarriage } from "react-icons/fa"
// import { SiInstacart, SiHomeassistantcommunitystore } from "react-icons/si"

import prisma from "../../../lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const categories = await prisma.category.findMany()
    res.status(200).json(categories)
  }
}

// TODO: decide how to handle icons
/* const CATEGORIES = [
    { id: 0,  label: "self",        color: 'rgb(113, 80, 190)', icon: <BsHeartFill /> },
    { id: 1,  label: "groceries",   color: 'rgb(80, 190, 190)', icon: <SiInstacart /> },
    { id: 2,  label: "home",        color: 'rgb(80, 190, 123)', icon: <SiHomeassistantcommunitystore /> },
    { id: 3,  label: "debt",        color: 'rgb(190, 132, 80)', icon: <GiReceiveMoney /> },
    { id: 4,  label: "car",         color: 'rgb(190, 80, 80)', icon: <FaCar /> },
    { id: 5,  label: "eating out",    color: 'rgb(190, 80, 178)', icon: <FaCreditCard /> },
    { id: 6,  label: "fitness",     color: 'rgb(176, 190, 80)', icon: <IoFitnessOutline /> },
    { id: 7,  label: "baby",        color: 'rgb(190, 168, 80)', icon: <FaBabyCarriage /> }
  ] */
