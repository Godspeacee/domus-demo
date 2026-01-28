import Link from "./component/Link";

import React from "react";

import {
  Avatar,
  Box,
  Button,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import { BsHouseAdd } from "react-icons/bs";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className=" border-b mb-5 px-5 py-3 ">
      <Flex justify={"between"}>
        <Flex align={"center"} gap={"3"}>
          {" "}
          <Link href={"/"}>
            {" "}
            <Avatar
              size={"4"}
              src="/Domuslogo.png"
              fallback="T"
              variant="soft"
              radius="full"
            />
          </Link>
          <NavLinks />
        </Flex>
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
          radius="full"
        />
      </Flex>
    </nav>
  );
};

const NavLinks = () => {
  const links = [
    { label: "Properties", href: "/properties/list", key: "properties" },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.key}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default NavBar;
