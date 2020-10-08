import React from "react";
import { Container, Image, Inner, Item, Pane, Title, SubTitle } from "./styles/jumbotron";

type JumbotronBaseProps = {
  children?: React.ReactNode;
};

interface JumbotronProps extends JumbotronBaseProps {
  direction: string;
}

export default function Jumbotron({ children, direction = "row" }: JumbotronProps) {
  return (
    <Item>
      <Inner {...{ direction }}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }: JumbotronBaseProps) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }: JumbotronBaseProps) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }: JumbotronBaseProps) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }: JumbotronBaseProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

interface JumbotronImageProps extends JumbotronBaseProps {
  src: string;
  alt: string;
}

Jumbotron.Image = function JumbotronImage({ children, src, alt }: JumbotronImageProps) {
  return <Image {...{ src, alt }}>{children}</Image>;
};
