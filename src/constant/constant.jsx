import AssignmentTurnedInRoundedIcon from "@material-ui/icons/AssignmentTurnedInRounded";
import { BarChart as BarChartIcon, Users as UsersIcon } from "react-feather";
import { v4 as uuid } from "uuid";
import ImageIcon from "@material-ui/icons/Image";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import BugReportIcon from "@material-ui/icons/BugReport";
import EmailIcon from "@material-ui/icons/Email";

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
  {
    href: "/user/gallery",
    icon: ImageIcon,
    title: "Gallery",
  },
  {
    href: "/user/payment",
    icon: LocalAtmIcon,
    title: "Payment",
  },
  {
    href: "/user/checkout",
    icon: LocalShippingIcon,
    title: "Checkout",
  },
  {
    href: "/user/covid",
    icon: BugReportIcon,
    title: "Covid Status",
  },
  {
    href: "/user/post",
    icon: EmailIcon,
    title: "Post",
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
export const images = [
  {
    url: "/static/design.jpg",
    title: "Design",
    width: "40%",
  },
  {
    url: "/static/develop.png",
    title: "Develop",
    width: "20%",
  },
  {
    url: "/static/test.png",
    title: "Testing",
    width: "40%",
  },
  {
    url: "/static/design.jpg",
    title: "Develop",
    width: "38%",
  },
  {
    url: "/static/test.png",
    title: "Testing",
    width: "38%",
  },
  {
    url: "/static/develop.png",
    title: "Develop",
    width: "24%",
  },
  {
    url: "/static/test.png",
    title: "Develop",
    width: "40%",
  },
  {
    url: "/static/develop.png",
    title: "Testing",
    width: "20%",
  },
  {
    url: "/static/test.png",
    title: "Develop",
    width: "40%",
  },
];

export const cities = [
  {
    value: undefined,
    label: "Choose a city",
  },
  {
    value: "1",
    label: "New York",
  },
  {
    value: "2",
    label: "Chicago",
  },
  {
    value: "3",
    label: "Saigon",
  },
];

export const states = [
  {
    value: undefined,
    label: "Choose state",
  },
  {
    value: "11",
    label: "Florida",
  },
  {
    value: "22",
    label: "Michigan",
  },
  {
    value: "33",
    label: "Texas",
  },
];

export const countries = [
  {
    value: null,
    label: "Choose a Country",
  },
  {
    value: "111",
    label: "United States",
  },
  {
    value: "222",
    label: "Italy",
  },
  {
    value: "333",
    label: "Vietnam",
  },
];
export const post = [
  {
    postId: 1,
    postTitle: "abcd",
    postContent:
      "With a theme and an overrides property. If that's not sufficient, you can check the implementation of the component for more detail",
    liked: true,
  },
  {
    postId: 2,
    postTitle: "pqrs",
    postContent:
      "With a theme and an overrides property. If that's not sufficient, you can check the implementation of the component for more detail",
    liked: false,
  },
  {
    postId: 3,
    postTitle: "wxyz",
    postContent:
      "With a theme and an overrides property. If that's not sufficient, you can check the implementation of the component for more detail",
    liked: false,
  },
];
