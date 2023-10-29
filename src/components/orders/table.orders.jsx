import React from "react";
import { Card, Chip, Typography } from "@material-tailwind/react";
import { AiFillEdit } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { allOrders } from "../../recoil";

const TABLE_HEAD = ["No", "Name", "Email", "Price", "Status", "Action"];

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
            const isLast = index === stateOrders.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-neutral-950";

            return (
              <tr
                key={index}
                className="odd:bg-neutral-600 even:bg-neutral-500"
              >
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
