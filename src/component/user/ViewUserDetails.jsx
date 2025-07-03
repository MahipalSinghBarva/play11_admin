import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../../store/slice/userSlice";

const ReadOnlyField = ({ label, value }) => (
  <div className="flex flex-col gap-1">
    <label className="text-white text-sm">{label}</label>
    <input
      type="text"
      value={value || "Not provided"}
      disabled
      className="mb-4 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 cursor-not-allowed 
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400"
    />
  </div>
);

const ViewUserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleUser } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [dispatch, id]);

  return (
    <div className="p-4">
      <h1 className="text-white text-2xl font-bold text-center mb-6">
        User Details
      </h1>

      <div className="flex items-center gap-4 mb-8">
        <img
          className="w-20 h-20 rounded-full border border-gray-400"
          src={singleUser?.profilePicture}
          alt="Profile"
        />
        <div className="text-white">
          <h2 className="text-lg font-semibold">
            {singleUser?.name || "Name not available"}
          </h2>
          <p className="text-sm text-gray-400">
            Joined on{" "}
            {singleUser?.createdAt
              ? new Date(singleUser.createdAt).toLocaleDateString()
              : "N/A"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ReadOnlyField label="Email ID" value={singleUser?.email} />
        <ReadOnlyField label="Phone Number" value={singleUser?.phone} />
        <ReadOnlyField label="User ID" value={singleUser?.userId} />
      </div>

      <h2 className="text-white text-xl font-semibold mt-10 mb-4">Address</h2>
      <div className="grid grid-cols-2 gap-6">
        <ReadOnlyField label="City" value={singleUser?.address?.city} />
        <ReadOnlyField label="Country" value={singleUser?.address?.country} />
        <ReadOnlyField label="Door No." value={singleUser?.address?.doorno} />
        <ReadOnlyField label="State" value={singleUser?.address?.state} />
        <ReadOnlyField label="Zip Code" value={singleUser?.address?.zipCode} />
      </div>

      {singleUser?.aadharCardImage && (
        <div className="mt-8">
          <h3 className="text-white mb-2">Aadhaar Card Image</h3>
          <img
            src={singleUser.aadharCardImage}
            alt="Aadhaar"
            className="w-60 rounded border"
          />
        </div>
      )}
    </div>
  );
};

export default ViewUserDetails;
