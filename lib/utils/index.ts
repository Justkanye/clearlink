import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const altFromImgUrl = (url: string) =>
  url.split("/").pop()?.split(".").pop() || url;
