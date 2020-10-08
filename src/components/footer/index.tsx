import React from "react";

import { Break, Container, Column, Link, Row, Text, Title } from "./styles/footer";

type FooterBaseProps = {
  children?: React.ReactNode;
};

export default function Footer({ children, ...restProps }: FooterBaseProps) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }: FooterBaseProps) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }: FooterBaseProps) {
  return <Column {...restProps}>{children}</Column>;
};

interface FooterLinkProps extends FooterBaseProps {
  href: string;
}

Footer.Link = function FooterLink({ children, href, ...restProps }: FooterLinkProps) {
  return (
    <Link {...{ href }} {...restProps}>
      {children}
    </Link>
  );
};

Footer.Title = function FooterTitle({ children, ...restProps }: FooterBaseProps) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }: FooterBaseProps) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }: FooterBaseProps) {
  return <Break {...restProps}>{children}</Break>;
};
