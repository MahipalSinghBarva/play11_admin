import React from "react";
import { Button, Card } from "flowbite-react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUser } from "../../store/slice/userSlice";
import { getAllContest } from "../../store/slice/contestSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { allUser } = useSelector((state) => state.user);
  const { allContest } = useSelector((state) => state.contest);
  // console.log(allContest);
  
  useEffect(() => {
    dispatch(getAllUser());
    dispatch(getAllContest())
  }, [dispatch]);
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4 w-full">
        <Card className=" bg-gray-50 w-full">
          <div className="flex justify-between">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total User
            </h5>
            <h5 className="font-normal text-2xl text-gray-700 dark:text-gray-400">
              {allUser?.user?.length}
            </h5>
          </div>
          <Button>
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>

        <Card className=" bg-gray-50 w-full">
          <div className="flex justify-between">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Game
            </h5>
            <h5 className="font-normal text-2xl text-gray-700 dark:text-gray-400"></h5>
          </div>
          {/* <Button>
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button> */}
        </Card>

        <Card className=" bg-gray-50  w-full">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Balance
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {/* Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. */}
          </p>
          <Button>
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>

        <Card className=" bg-gray-50  w-full">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Total Joined Contest
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {allContest?.length}
          </p>
          <Button>
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>

        <Card className=" bg-gray-50  w-full">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Match
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {/* Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. */}
          </p>
          <Button>
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>

        <Card className=" bg-gray-50  w-full">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Coupon's
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {/* Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. */}
          </p>
          <Button>
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
