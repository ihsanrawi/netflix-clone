import React from "react";

import { Break, Button, Container, Input, Text } from "./styles/opt-form";

type OptFormBaseProps = {
  children?: any;
};

export default function OptForm({ children, ...restProps }: OptFormBaseProps) {
  return <Container {...restProps}>{children}</Container>;
}

interface OptFormInputProps extends OptFormBaseProps {
  placeholder: string;
}

OptForm.Input = function OptFormInput({ placeholder }: OptFormInputProps) {
  return <Input {...{ placeholder }} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }: OptFormBaseProps) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }: OptFormBaseProps) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }: OptFormBaseProps) {
  return <Break {...restProps} />;
};
