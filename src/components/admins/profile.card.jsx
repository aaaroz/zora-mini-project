import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { IoPerson } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { usersAdmin } from "../../recoil";
import { Link } from "react-router-dom";

export function ProfileCard() {
  const userAdmin = useRecoilValue(usersAdmin);
  console.log(userAdmin);
  return (
    <>
      {userAdmin &&
        userAdmin.map((user, index) => (
          <div
            className="w-52 rounded-xl drop-shadow-md border border-gray-300 bg-white"
            key={index + 1}
          >
            <CardHeader
              floated={false}
              className="h-32 pb-5 m-0 flex justify-center items-end bg-neutral-900"
            >
              <div className="flex justify-center items-center w-20 h-20 rounded-full bg-white">
                {user.image && <img src={user.image} alt={user.name} />}
                {user.photoUrl ? (
                  <img src={user.photoUrl} alt={user.name} />
                ) : (
                  <span className="text-2xl text-neutral-900">
                    <IoPerson />
                  </span>
                )}
              </div>
            </CardHeader>
            <CardBody className="text-center">
              <Typography color="black" className="mb-2 text-lg font-semibold">
                {user.name}
              </Typography>
              <Typography className="font-medium text-xs text-neutral-400">
                {user.email}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center pt-2">
              <Link to={`/profile/${user.uid}`}>
                <button className="px-4 py-1 rounded-md text-sm text-white bg-neutral-900 hover:bg-neutral-900">
                  Profile
                </button>
              </Link>
            </CardFooter>
          </div>
        ))}
    </>
  );
}
