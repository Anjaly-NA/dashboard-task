import AssignmentTurnedInRoundedIcon from "@material-ui/icons/AssignmentTurnedInRounded";
import { BarChart as BarChartIcon, Users as UsersIcon } from "react-feather";
import { v4 as uuid } from "uuid";

export const editUserList = [
  {
    name: "Micharl",
    job: "Zion resident",
  },
  {
    name: "George",
    job: "President",
  },
  {
    name: "Dane",
    job: "Leader",
  },
  {
    name: "Richard",
    job: "Professor",
  },
  {
    name: "Chris",
    job: "Legal Adviser",
  },
  {
    name: "Raymon",
    job: "Business",
  },
];

export const items = [
  {
    href: "/user/dashboard",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/user/customer",
    icon: UsersIcon,
    title: "Customers",
  },
  {
    href: "/user/product",
    icon: AssignmentTurnedInRoundedIcon,
    title: "Products",
  },
];

export const products = [
  {
    id: uuid(),
    createdAt: "27/03/2019",
    description:
      "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
    title: "Dropbox",
    totalDownloads: "594",
  },
  {
    id: uuid(),
    createdAt: "31/03/2019",
    description:
      "Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.",
    title: "Medium Corporation",
    totalDownloads: "625",
  },
  {
    id: uuid(),
    createdAt: "03/04/2019",
    description:
      "Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.",
    title: "Slack",
    totalDownloads: "857",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Lyft is an on-demand transportation company based in San Francisco, California.",
    title: "Lyft",
    totalDownloads: "406",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "GitHub is a web-based hosting service for version control of code using Git.",
    title: "GitHub",
    totalDownloads: "835",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Squarespace provides software as a service for website building and hosting. Headquartered in NYC.",
    title: "Squarespace",
    totalDownloads: "835",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Squarespace provides software as a service for website building and hosting. Headquartered in NYC.",
    title: "Squarespace",
    totalDownloads: "835",
  },
  {
    id: uuid(),
    createdAt: "04/04/2019",
    description:
      "Squarespace provides software as a service for website building and hosting. Headquartered in NYC.",
    title: "Squarespace",
    totalDownloads: "835",
  },
];
