"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Link,
  Button,
  Input,
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
          <CardHeader className="w-full flex justify-center gap-3">
            <p>Hola</p>
            <Button
              as={Link}
              color="primary"
              href="../"
              variant="flat"
              className="w-1/3 self-center"
            >
              Go Home
            </Button>
          </CardHeader>
          <Divider />
          <CardBody>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              variant="underlined"
              label="Email"
              className="self-center w-3/4 my-2 rounded-md ease-in-out duration-300 text-slate-900"
            ></Input>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              variant="underlined"
              label="Passsword"
              className="self-center w-3/4 my-2 ease-in-out duration-300 text-slate-900"
            ></Input>
            <Button
              as={Link}
              color="primary"
              variant="ghost"
              className="w-1/3 self-center my-3"
            >
              Log In
            </Button>
          </CardBody>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
