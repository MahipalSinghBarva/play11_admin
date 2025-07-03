import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Profile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { user } = useSelector((state) => state.user);

  const popupOpenHandler = () => setIsPopupOpen(true);
  const popupCloseHandler = () => setIsPopupOpen(false);

  return (
    <div>
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Admin Detail's
        </h2>
        <div className="flex gap-2">
          <Link to="/">
            <Button className="px-16">Back</Button>
          </Link>
          <Button className="px-16" onClick={popupOpenHandler}>
            Change Password
          </Button>
        </div>
      </div>

      {/* Profile Info */}
      <form className="mt-10">
        <div className="gap-4 grid grid-cols-3">
          {/* Email */}
          <div>
            <Label htmlFor="email">Your email</Label>
            <TextInput id="email" type="email" disabled value={user.email} />
          </div>

          {/* Name */}
          <div>
            <Label htmlFor="user-name">Your Name</Label>
            <TextInput id="user-name" type="text" disabled value={user.name} />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <TextInput id="phone" type="text" disabled value={user.phone} />
          </div>

          {/* User ID */}
          <div>
            <Label htmlFor="user-id">User ID</Label>
            <TextInput id="user-id" type="text" disabled value={user.userId} />
          </div>

          {/* Admin */}
          <div>
            <Label htmlFor="admin-status">Admin</Label>
            <TextInput
              id="admin-status"
              type="text"
              disabled
              value={user.isAdmin ? "Yes" : "No"}
            />
          </div>
        </div>
      </form>

      {/* Password Popup Modal */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xl relative">
           
            <button
              onClick={popupCloseHandler}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
            >
              <X size={24} />
            </button>

            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Change Password
            </h3>

            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="password">New Password</Label>
                <TextInput
                  id="password"
                  type="password"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <TextInput
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
              <Button className="mt-4 w-full" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
