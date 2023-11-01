import React, { useEffect } from "react";
import { Card, Chip, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

import OrderDetail from "./order.detail";
import {
  fetchGetOrders,
  selectOrders,
  toggleFetchLatestData,
} from "../../store/get.orders.slice";

const TABLE_HEAD = ["No", "Name", "Email", "Price", "Status", "Action"];

export default function TableOrders() {
  const stateOrders = useSelector(selectOrders);
  const { shouldFetchLatestData } = useSelector(selectOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (shouldFetchLatestData) {
      dispatch(toggleFetchLatestData());
      dispatch(fetchGetOrders());
    }
    dispatch(fetchGetOrders());
  }, [dispatch, shouldFetchLatestData]);

  return (
    <Card className="h-full w-full overflow-auto">
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
          {stateOrders.data.map(
            ({ id, name, email, totalPrice, status }, index) => {
              const isLast = index === stateOrders.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-neutral-950";

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
                      ${totalPrice}
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
                    <OrderDetail id={id} />
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
}
