import React from "react";
import Details from "../components/usersdetails/Details";
import Withdrawer from "../components/usersdetails/Withdrawer";
import Desposit from "../components/usersdetails/Desposit";
import VirtualCard from "../components/usersdetails/VirtualCard";
import Crypto from "../components/usersdetails/Crypto";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../api/usersQueries";
import Loader from "../components/Loader";

const UserDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetUserQuery(id);
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-row justify-between max-h-screen gap-8 pb-6">
          <div className="max-h-screen mt-10 overflow-y-scroll">
            <Details data={data} />
          </div>
          <div className="flex flex-col max-h-screen gap-8 overflow-y-scroll">
            <Withdrawer />
            <VirtualCard />
            <Desposit />
            <Crypto />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
