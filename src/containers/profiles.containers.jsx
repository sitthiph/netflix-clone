import React from "react";
import { Header } from "../components/component.export";
import { Profiles } from "../components/component.export";
import * as ROUTES from '../env/routes'
import logo from '../logo.svg'

export function SelectProfileContainer({user, setProfile}) {
    return <React.Fragment>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix Logo" />
            </Header.Frame>
        </Header>
        <Profiles>
            <Profiles.Title>Who's watching?</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={() => setProfile({
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                })}>
                    <Profiles.Picture src={user.photoURL} />
                  <Profiles.Name></Profiles.Name>  
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    </React.Fragment>
}