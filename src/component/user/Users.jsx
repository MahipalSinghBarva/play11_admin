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
import { useDispatch, useSelector } from "react-redux";
import {
  blockUser,
  clearAllUserErrors,
  getAllUser,
  unblockUser,
} from "../../store/slice/userSlice";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BadgeMinus, Eye } from "lucide-react";
import { toast } from "react-toastify";

const Users = () => {
  const dispatch = useDispatch();
  const { allUser, success, message } = useSelector((state) => state.user);
  // console.log(allUser);

  const blockUserHandler = (e, id) => {
    e.preventDefault();
    dispatch(blockUser(id));
    dispatch(getAllUser());
  };

  const unBlockUserHandler = (e, id) => {
    e.preventDefault();
    dispatch(unblockUser(id));
    dispatch(getAllUser());
  };

  useEffect(() => {
    dispatch(getAllUser());

    // if (success) {
    //   toast.success(message);
    //   dispatch(getAllUser());
    //   dispatch(clearAllUserErrors());
    // }
    if (!allUser || allUser.length === 0) {
      dispatch(getAllUser());
    }
  }, [dispatch, message]);

  useEffect(() => {
    if (success) {
      toast.success(message);
      const timer = setTimeout(() => {
        dispatch(getAllUser());
        dispatch(clearAllUserErrors());
      }, 300); // slight delay

      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="mt-6  ">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
        User List
      </h2>
      <div className="overflow-x-auto mt-2">
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell className="p-4">
                <Checkbox />
              </TableHeadCell>
              <TableHeadCell>User name</TableHeadCell>
              <TableHeadCell>Mobile No.</TableHeadCell>
              <TableHeadCell>User ID</TableHeadCell>
              <TableHeadCell>Profile </TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody className="divide-y">
            {Array.isArray(allUser) &&
              allUser?.map((user) => (
                <TableRow
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={user._id}
                >
                  <TableCell className="p-4">
                    <Checkbox />
                  </TableCell>
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {user?.name}
                  </TableCell>
                  <TableCell>{user?.phone}</TableCell>
                  <TableCell>{user?.userId}</TableCell>
                  <TableCell className="">
                    <img
                      src={user?.profilePicture}
                      className="object-cover w-8 rounded-[50px]"
                    />
                  </TableCell>
                  <TableCell className="flex gap-4 items-center">
                    <Link
                      to={`/user/${user._id}`}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <Eye />
                    </Link>
                    <button
                      onClick={(e) =>
                        user?.isBlocked
                          ? unBlockUserHandler(e, user._id)
                          : blockUserHandler(e, user._id)
                      }
                      title={user?.isBlocked ? "Unblock User" : "Block User"}
                    >
                      <BadgeMinus
                        color={user?.isBlocked ? "green" : "red"}
                        size={20}
                      />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
