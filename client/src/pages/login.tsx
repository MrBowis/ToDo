"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    // For example, you can call an API to authenticate the user
    // If successful, redirect to the dashboard or home page
  };

  return (
    <div>
      <Card className="max-w-[400px]">
        <form onSubmit={handleSubmit}>
          <CardHeader className="flex gap-3">
            <h2 className="bg-slate-400">Login</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </CardBody>
        </form>
        <Link href="../"> Go Home </Link>
      </Card>
    </div>
  );
};

export default LoginPage;
