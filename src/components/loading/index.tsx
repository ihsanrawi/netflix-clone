import React from "react";

import { Spinner, LockBody, ReleaseBody, Picture } from "./styles/loading";

interface ProfilesBaseProps {
  children?: any;
  [elemName: string]: any;
}

export default function Loading({ src, ...restProps }: ProfilesBaseProps) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
