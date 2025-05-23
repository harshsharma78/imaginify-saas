import homeIcon from "@/public/assets/icons/home.svg";
import imageRestoreIcon from "@/public/assets/icons/image.svg";
import generativeFillIcon from "@/public/assets/icons/stars.svg";
import objectRemoveIcon from "@/public/assets/icons/scan.svg";
import objectRecolorIcon from "@/public/assets/icons/filter.svg";
import removeBgIcon from "@/public/assets/icons/camera.svg";
import profileIcon from "@/public/assets/icons/profile.svg";
import buyCreditsIcon from "@/public/assets/icons/bag.svg";
import freePlanIcon from "@/public/assets/icons/free-plan.svg";

export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: homeIcon,
  },
  {
    label: "Image Restore",
    route: "/transformations/add/restore",
    icon: imageRestoreIcon,
  },
  {
    label: "Generative Fill",
    route: "/transformations/add/fill",
    icon: generativeFillIcon,
  },
  {
    label: "Object Remove",
    route: "/transformations/add/remove",
    icon: objectRemoveIcon,
  },
  {
    label: "Object Recolor",
    route: "/transformations/add/recolor",
    icon: objectRecolorIcon,
  },
  {
    label: "Background Remove",
    route: "/transformations/add/removeBackground",
    icon: removeBgIcon,
  },
  {
    label: "Profile",
    route: "/profile",
    icon: profileIcon,
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: buyCreditsIcon,
  },
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: freePlanIcon,
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20 Free Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: freePlanIcon,
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: freePlanIcon,
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;
