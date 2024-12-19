"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type User = {
  first_name: string;
  last_name: string;
  city: string;
  contact_number: string;
};

type Props = {
  user: User;
};

function UserCard({ user }: Props) {
  const { first_name, last_name, city, contact_number } = user;

  return (
    <Dialog>
      <div className="user-card w-full sm:w-[390px] h-[310px] rounded-[18px] p-6  bg-white">
        <div className="pb-14 border-b-[1px]">
          <Image
            src={"/user.png"}
            width={70}
            height={80}
            alt="user-logo"
            className="border-[1px] rounded-full p-1"
          />
          <h4 className="text-[36px] font-semibold">
            {first_name + " " + last_name}
          </h4>
          <p className="text-[rgba(66, 87, 99, 1)] text-[12px] flex gap-2 font-medium">
            <span>
              <Image src={"/pin.svg"} width={15} height={15} alt="pin" />
            </span>
            <span>{city}</span>
          </p>
        </div>
        <div className="more-details py-4 flex justify-between items-center">
          <div className="left">
            <p className="font-semibold text-sm flex items-center mb-1">
              <Image
                src={"/phone.svg"}
                width={15}
                height={15}
                alt="phone-logo"
                className="mr-2"
              />{" "}
              {contact_number}
            </p>
            <p className="text-[#AFAFAF] text-xs font-medium">
              Available on phone
            </p>
          </div>
          <div className="right">
            <DialogTrigger>
              <div className="text-base bg-black text-white p-2 rounded-lg">
                Fetch Details
              </div>
            </DialogTrigger>
          </div>
          <DialogContent className="max-w-[300px] sm:max-w-[520px]">
            <DialogTitle></DialogTitle>
            <div>
              <h4 className="font-semibold text-2xl mb-0">Fetch Details</h4>
              <p className="text-[#71717A] text-sm">
                Here are the details of following employee.
              </p>
              <p className="font-medium text-sm mt-4">
                Name : {user.first_name + " " + user.last_name} <br />
                Location : {city} <br />
                Contact number : {contact_number}
                <br />
                Profile Image :
              </p>
              <Image
                src={"/user.png"}
                width={190}
                height={190}
                alt="user-logo"
                className="mr-2"
              />
            </div>
          </DialogContent>
        </div>
      </div>
    </Dialog>
  );
}

export default UserCard;
