import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { HiShoppingCart } from "react-icons/hi";
import { PiChatCenteredDotsFill } from "react-icons/pi";
import { IoPerson, IoPersonCircleSharp } from "react-icons/io5";
import { BiLogOut, BiSolidShoppingBags } from "react-icons/bi";
import { RiDashboardFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { navOpen } from "../../recoil";
import { Link } from "react-router-dom";
import { authService } from "../../configs/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../configs/firebase";

export function DrawerWithNav({ isActive }) {
  const [open, setOpen] = useRecoilState(navOpen);
  const [user, loading] = useAuthState(auth);

  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      {loading && <></>}
      <Drawer open={open} onClose={closeDrawer}>
        <div className="bg-neutral-900 h-screen lg:hidden">
          <div className=" text-blue-gray-50 mb-2 ms-6 flex items-center justify-between p-4 pb-1 pr-0">
            <Typography variant="h3" color="white">
              DASHBOARD
            </Typography>
            <IconButton variant="text" color="white" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="ps-5 pb-7 text-blue-gray-50 text-xs border-b-2">
            <Typography variant="h6" color="white">
              Sales Management Dashboard
            </Typography>
          </div>
          <div className="ps-5 pt-7 pb-2 text-blue-gray-50">
            <Typography variant="h6">MAIN MENU</Typography>
          </div>
          <List>
            <Link to="/dashboard">
              <div
                className={`active:bg-neutral-950 focus:bg-neutral-950 hover:bg-neutral-950 rounded-md text-blue-gray-50`}
              >
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <RiDashboardFill />
                    </span>
                  </ListItemPrefix>
                  Dashboard
                </ListItem>
              </div>
            </Link>

            <Link to="/products">
              <div
                className={`active:bg-neutral-950 focus:bg-neutral-950 hover:bg-neutral-950 rounded-md text-blue-gray-50`}
              >
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <BiSolidShoppingBags />
                    </span>
                  </ListItemPrefix>
                  Products
                </ListItem>
              </div>
            </Link>
            <Link to="/orders">
              <div
                className={`active:bg-neutral-950 focus:bg-neutral-950 hover:bg-neutral-950 rounded-md text-blue-gray-50 ${
                  isActive && "bg-neutral-950"
                }`}
              >
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <HiShoppingCart />
                    </span>
                  </ListItemPrefix>
                  Orders
                </ListItem>
              </div>
            </Link>
            <Link to="/chatbot">
              <div className="active:bg-neutral-950 focus:bg-neutral-950 hover:bg-neutral-950 rounded-md text-blue-gray-50">
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <PiChatCenteredDotsFill />
                    </span>
                  </ListItemPrefix>
                  Chatbot AI
                </ListItem>
              </div>
            </Link>
            <Link to="/admin">
              <div className="active:bg-neutral-950 focus:bg-neutral-950 hover:bg-neutral-950 rounded-md text-blue-gray-50">
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <IoPerson />
                    </span>
                  </ListItemPrefix>
                  Administrators
                </ListItem>
              </div>
            </Link>

            <div className="ps-5 pt-7 pb-2 text-blue-gray-50">
              <Typography variant="h6">HELP & SUPPORT</Typography>
            </div>
            <Link to={`/profile/${user?.uid}`}>
              <div className="active:bg-neutral-950 focus:bg-neutral-950 hover:bg-neutral-950 rounded-md text-blue-gray-50">
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <IoPersonCircleSharp />
                    </span>
                  </ListItemPrefix>
                  Profile
                </ListItem>
              </div>
            </Link>
            <Link to={`/settings`}>
              <div className="active:bg-neutral-950 focus:bg-neutral-950 hover:bg-neutral-950 rounded-md text-blue-gray-50">
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <AiFillSetting />
                    </span>
                  </ListItemPrefix>
                  Settings
                </ListItem>
              </div>
            </Link>
            <Link to="/">
              <div
                className="active:bg-neutral-950 focus:bg-neutral-950 hover:bg-neutral-950 rounded-md text-blue-gray-50"
                onClick={() => authService.logOut()}
              >
                <ListItem>
                  <ListItemPrefix>
                    <span className="text-xl">
                      <BiLogOut />
                    </span>
                  </ListItemPrefix>
                  Logout
                </ListItem>
              </div>
            </Link>
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
