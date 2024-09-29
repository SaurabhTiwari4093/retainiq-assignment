import Image from "next/image";
import React from "react";
import RetainIQLogo from "../assets/images/RetainIQ.png";
import {
  CardIcon,
  LightingIcon,
  MetaIcon,
  PhotoIcon,
  SettingIcon,
} from "../assets/icons";

export default function Sidebar() {
  return (
    <div className="bg-black text-gray-200 h-screen fixed w-16 flex flex-col items-center justify-between gap-4 py-4">
      <div className="flex flex-col items-center gap-6">
        <Image src={RetainIQLogo} alt="RetainIQ logo" height={30} width={30} />
        <LightingIcon />
        <PhotoIcon />
        <MetaIcon />
      </div>
      <div className="flex flex-col items-center gap-6">
        <CardIcon />
        <SettingIcon />
      </div>
    </div>
  );
}
