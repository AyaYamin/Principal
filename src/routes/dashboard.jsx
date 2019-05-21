// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Unarchive from "@material-ui/icons/Unarchive";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";

import Attendees from "views/Absane/absane";
import  EditCriteria from "views/Maps/Maps.jsx";
import Icons from "views/Icons/Icons.jsx";
import Chart from "views/Graphh/Graph_page";
import TableList from "views/TableList/TableList.jsx";
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Typography from "views/Typography/Typography.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Principal Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "View",
    navbarName: "View",
    icon: LibraryBooks,
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Students",
    navbarName: "Students",
    icon: "content_paste",
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Teachers",
    navbarName: "Teachers",
    icon: "content_paste",
    component: Icons
  },
  {
    path: "/Edit Criteria",
    sidebarName: "SchoolProfile",
    navbarName: "Profile",
    icon: Person,
   component: EditCriteria
  },
  {
    path: "/notifications",
    sidebarName: "Messages",
    navbarName: "Messages",
    icon: Notifications,
    component: NotificationsPage
  },

  {
    path: "/chart",
    sidebarName: "Chart",
    navbarName: "Chart",
    icon: Dashboard,
    component: Chart
  },
  {
    path: "/Attendees",
    sidebarName: "Attendance",
    navbarName: "Attendees",
    icon: Person,
    component: Attendees
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
