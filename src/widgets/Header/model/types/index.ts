import KzImg from "@/shared/assets/flags/kazakh.png";
import UnitedImg from "@/shared/assets/flags/united.png";
import { ILangListItem } from "@/shared/ui/SelectLang";

export const langList: ILangListItem[] = [
  {
    value: "kz",
    name: "Казак",
    img: KzImg,
  },
  {
    value: "en",
    name: "English",
    img: UnitedImg,
  },
];
