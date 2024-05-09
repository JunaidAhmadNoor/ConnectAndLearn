import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import AppLayout from "../components/AppLayout";
import Card from "../components/card";

export default function GroupStudy() {
  const { user } = useContext(UserContext);
  return (
    <>
      <AppLayout>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </div>
      </AppLayout>
    </>
  );
}
