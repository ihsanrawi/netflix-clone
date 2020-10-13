import React, { useContext, useEffect, useState } from "react";

import { SelectProfilesContainer } from "./index";
import { FirebaseContext } from "../context/Firebase";

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return <SelectProfilesContainer {...{ user, setProfile }} />;
}
