import React from "react";

import { Base, Container, Error, Input, Link, SmallText, Submit, Text, Title } from "./styles/form";

interface FormBaseProps {
  children?: any;
  [elemName: string]: any;
}

export default function Form({ children, ...restProps }: FormBaseProps) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }: FormBaseProps) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }: FormBaseProps) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }: FormBaseProps) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }: FormBaseProps) {
  return <Text {...restProps}>{children}</Text>;
};

Form.SmallText = function FormSmallText({ children, ...restProps }: FormBaseProps) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

Form.Link = function FormLink({ to, children, ...restProps }: FormBaseProps) {
  return (
    <Link {...{ to }} {...restProps}>
      {children}
    </Link>
  );
};

Form.Input = function FormInput({ children, ...restProps }: FormBaseProps) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }: FormBaseProps) {
  return <Submit {...restProps}>{children}</Submit>;
};
