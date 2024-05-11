import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import AppLayout from "../components/AppLayout";
import GroupCard from "../components/groupCard";
import { ArrowRight } from "lucide-react";

export default function groups() {
  const { user } = useContext(UserContext);
  return (
    <>
      <AppLayout>
        <div className="">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-black px-3 py-2  text-sm font-semibold text-white hover:bg-black/80 mt-6 ml-10"
          >
            Create New Group
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12 p-6 md:p-9 mt-0">
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
          </div>
        </div>
      </AppLayout>
    </>
  );
}
