import {
  HomeIcon,
  CheckBadgeIcon,
  ViewColumnsIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"

import Image from "next/image"
import logo from "../public/rhino-2.webp"
import HeaderItem from "./HeaderItem"

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl h-auto">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightBulbIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTION" Icon={ViewColumnsIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="USER" Icon={UserCircleIcon} />
      </div>
      <Image
        className="object-contain rounded-sm"
        src={logo}
        alt="logo"
        width={80}
        height={80}
      />
    </header>
  )
}

export default Header
