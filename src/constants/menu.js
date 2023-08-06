import {HiOutlineUserGroup} from 'react-icons/hi'
import {LuLayoutDashboard} from 'react-icons/lu'
import {RxActivityLog} from 'react-icons/rx'

export const Menus = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: <LuLayoutDashboard />
  },
  {
    label: "Users",
    key: "users",
    icon: <HiOutlineUserGroup />,
  },
  {
    label: "Logs",
    key: "logs",
    icon: <RxActivityLog />,
  }
]