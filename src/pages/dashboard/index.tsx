/* eslint-disable react-hooks/rules-of-hooks */
import type { GetStaticProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const DashboardPage:NextPage = () => {
  if (!useSession()?.data) {
   useRouter().replace('/')
  }

  return (
  <div className="page">
    <div className="black-wrapper">
      <h1 className="font-mono font-light">Dashboard</h1>
      <p>Lorem ipsum</p>
    </div>
  </div>
)}
export default DashboardPage

