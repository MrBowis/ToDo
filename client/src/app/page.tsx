'use client';

// import axios from "axios";
import { useState } from "react";
import Navbar from "../components/nav";
import LoginPage from "../pages/login";

export default function Home() {

  const [data, setData] = useState<any>(null);

  // axios.get("http://localhost:8000/api/task")

  return (
    <div>
      <Navbar></Navbar>
      <LoginPage></LoginPage>
    </div>
  );
}
