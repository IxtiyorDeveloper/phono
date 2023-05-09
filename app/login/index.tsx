import React from "react";
import { Flex, Form, Input } from "@/components";
import { useForm } from "react-hook-form";

const Login = () => {
  const { control } = useForm();
  return (
    <Flex>
      <Form>
        <Input name="login" control={control} label="User name" />
        <Input name="password" control={control} type="password" />
      </Form>
    </Flex>
  );
};

export default Login;
