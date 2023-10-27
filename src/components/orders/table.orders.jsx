import React, { useEffect, useState } from "react";
import { Card, Chip, Typography } from "@material-tailwind/react";
import { AiFillEdit } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { allOrders } from "../../recoil";

const TABLE_HEAD = ["No", "Name", "Email", "Price", "Status", "Action"];

const TABLE_ROWS = [
  {
    id: 1,
    name: "John Michael",
    email: "john.doe@example.com",
    price: "$120",
    status: "delivered",
    date: "23/04/18",
  },
  {
    id: 2,
    name: "Alexa Liras",
    email: "john.doe@example.com",
    price: "$120",
    status: "delivered",
    date: "23/04/18",
  },
  {
    id: 3,
    name: "Laurent Perrier",
    email: "john.doe@example.com",
    price: "$120",
    status: "ongoing",
    date: "19/09/17",
  },
  {
    id: 4,
    name: "Michael Levi",
    email: "john.doe@example.com",
    price: "$120",
    status: "ongoing",
    date: "24/12/08",
  },
  {
    id: 5,
    name: "Richard Gran",
    email: "john.doe@example.com",
    price: "$120",
    status: "canceled",
    date: "04/10/21",
  },
];

export default function TableOrders() {
  const stateOrders = useRecoilValue(allOrders);

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-neutral-900 bg-neutral-900 p-4 "
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stateOrders.map(({ name, email, totalPrice, status }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-neutral-950";

            return (
              <tr key={name} className="odd:bg-neutral-600 even:bg-neutral-500">
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {index + 1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {totalPrice}
                  </Typography>
                </td>
                <td className={classes}>
                  <Chip
                    size="sm"
                    variant="ghost"
                    value={status}
                    color={
                      status === "delivered"
                        ? "green"
                        : status === "ongoing"
                        ? "amber"
                        : "red"
                    }
                  />
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="white"
                    className="font-medium flex"
                  >
                    <span className="text-lg pe-2">
                      <AiFillEdit />
                    </span>
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
