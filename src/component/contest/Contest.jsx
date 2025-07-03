import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContest } from "../../store/slice/contestSlice";

const Contest = () => {
  const dispatch = useDispatch();

  const { allContest } = useSelector((state) => state.contest);
  // console.log(allContest);

  useEffect(() => {
    dispatch(getAllContest());
  }, [dispatch]);
  return (
    <div className="mt-6  ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
          Contest List
        </h2>
        {/* <Link to="/contest">
          <Button>Back</Button>
        </Link> */}
      </div>
      <div className="overflow-x-auto mt-2">
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell className="p-4">
                <Checkbox />
              </TableHeadCell>
              <TableHeadCell>Match Title</TableHeadCell>
              <TableHeadCell>User ID</TableHeadCell>
              <TableHeadCell>Entry Fee</TableHeadCell>
              <TableHeadCell>Price </TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {Array.isArray(allContest) &&
              allContest?.map((item) => (
                <TableRow
                  key={item._key}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell className="p-4">
                    <Checkbox />
                  </TableCell>
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item?.matchTitle}
                  </TableCell>
                  <TableCell>{item?.user}</TableCell>
                  <TableCell>&#8377; {item?.entryFee}</TableCell>
                  <TableCell>&#8377; {item?.prizePool}</TableCell>
                  <TableCell>
                    <Link
                      to={`/contest/${item._id}`}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      View
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Contest;
