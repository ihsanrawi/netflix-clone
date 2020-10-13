import React from "react";

import { Container, Title, List, Item, Picture, Name } from "./styles/profiles";

interface ProfilesBaseProps {
  children?: any;
  [elemName: string]: any;
}

export default function Profiles({ children, ...restProps }: ProfilesBaseProps) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }: ProfilesBaseProps) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }: ProfilesBaseProps) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }: ProfilesBaseProps) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }: ProfilesBaseProps) {
  return (
    <Picture {...restProps} src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"} />
  );
};

Profiles.Name = function ProfilesName({ children, ...restProps }: ProfilesBaseProps) {
  return <Name {...restProps}>{children}</Name>;
};
