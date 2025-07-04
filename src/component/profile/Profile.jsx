import React, { useEffect, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { clearAllUserErrors, passwordReset, sendOTP, verifyOTP } from "../../store/slice/userSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isOtpPopup, setIsOtpPopupOpen] = useState(false);
  const { user, success, message, error } = useSelector((state) => state.user);
  const [userForm, setUserForm] = useState({
    otp: "",
    phone: user.phone,
    name: user.name,
    password: "",
    confirmPassword: ""
  })
  const { otp, phone, password, confirmPassword } = userForm;

  const popupOpenHandler = () => setIsPopupOpen(true);
  const popupCloseHandler = () => setIsPopupOpen(false);

  const otpPopupOpenHandler = () => setIsOtpPopupOpen(true);
  const otpPopupCloseHandler = () => setIsOtpPopupOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  };

  // const otpSendHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(sendOTP({ phone: userForm.phone, name: userForm.name }));
  // };

  // const otpVerifyHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(verifyOTP({ phone: userForm.phone, otp: userForm.otp }));
  // };

  const resetPasswordHandler = (e) => {
    e.preventDefault();
    dispatch(passwordReset(userForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message || error);
      dispatch(clearAllUserErrors());
    }
    if (success) {
      navigate("/signin");
    }
  }, [success, navigate, error]);

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
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 blur-1 bg-opacity-50 z-50 flex items-center justify-center">
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
              {/* <div>
                <Label htmlFor="password">Phone Nubmer</Label>
                <TextInput
                  id="phone"
                  type="number"
                  name="phone"
                  value={user.phone}
                  disabled
                />
              </div> */}
              {/* <div className="flex justify-end ">
                <Label htmlFor="otp" className="text-blue-600" onClick={
                  otpPopupOpenHandler} >Send Otp</Label>
              </div>
              {isOtpPopup && (
                <div>
                  <Label htmlFor="otp">OTP</Label>
                  <TextInput
                    id="otp"
                    type="number"
                    value={userForm.otp}
                    required
                    name="otp"
                    onChange={handleChange}
                  />
                </div>
              )} */}
              <div>
                <Label htmlFor="password">New Password</Label>
                <TextInput
                  id="password"
                  type="password"
                  placeholder="Enter new password"
                  required
                  name="password"
                  value={userForm.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <TextInput
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm password"
                  required
                  name="confirmPassword"
                  value={userForm.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <Button className="mt-4 w-full" type="submit" onClick={resetPasswordHandler}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default Profile;
