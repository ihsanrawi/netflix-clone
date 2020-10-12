import React from "react";

import { Container, Title, SubTitle } from "./styles/feature";

interface FeatureBaseProps {
  children?: any;
  [elemName: string]: any;
} 

export default function Feature({ children, ...restProps }: FeatureBaseProps) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }: FeatureBaseProps) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }: FeatureBaseProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
