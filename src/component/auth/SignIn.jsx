import React from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { clearAllUserErrors, login } from "../../store/slice/userSlice";
import { useEffect } from "react";
import { Eye, EyeOff, LockKeyhole, UserRound } from "lucide-react";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userForm;

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!email || !password) {
      toast.error("All fields are required");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Email is not valid");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const userData = { email, password };
    dispatch(login(userData));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message || error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, isAuthenticated, error, navigate]);

  return (
    <div className="flex justify-center items-center h-screen ">
      <Card className="w-2/4 h-3/4">
        <div className="flex flex-col  gap-4">
          <h1 className="text-white text-center font-bold text-4xl">Play11</h1>
          <h1 className="text-white text-center font-bold text-xl">
            Admin Portal
          </h1>
        </div>
        <form className="flex flex-col gap-4" onSubmit={loginHandler}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Your email</Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Your password</Label>
            </div>

            <TextInput
              id="password1"
              type={showPassword ? "text" : "password"}
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          <Button type="submit" className="mt-4">
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
