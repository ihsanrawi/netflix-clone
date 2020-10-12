import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Background, ButtonLink, Container, Logo } from "./styles/header";

interface HeaderBaseProps {
  children?: any;
  [elemName: string]: any;
}

export default function Header({ bg = true, children, ...restProps }: HeaderBaseProps) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }: HeaderBaseProps) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }: HeaderBaseProps) {
  return (
    <ReactRouterLink {...{ to }}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ to, children }: HeaderBaseProps) {
  return <ButtonLink {...{ to }}>{children}</ButtonLink>;
};
