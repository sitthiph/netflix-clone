import React, { useContext, useEffect, useState } from "react";
import { SelectProfileContainer } from "./profiles.containers";
import { FirebaseContext } from "../context/firebase.context";

export function BrowseContainer({slides}) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [profile.displayName]);

    return profile.displayName ? (loading ? <Loading src={user.photoURL} /> : null) : <SelectProfileContainer user={user} setProfile={setProfile} />
};