import React from "react";
import {Container, Title, List, User, Picture, Name} from './profiles.styles';

export default function Profiles({children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
};

Profiles.Title = function ProfilesTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
}

Profiles.List = function ProfilesTitle({children, ...restProps}) {
    return <List {...restProps}>{children}</List>;
}

Profiles.User = function ProfilesTitle({children, ...restProps}) {
    return <User {...restProps}>{children}</User>;
}

Profiles.Picture = function ProfilesTitle({src, ...restProps}) {
    return <Picture {...restProps} src={src ? `../../../public/images/users/${src}.png` : `../../../public/images/misc/loading.gif`} />
}

Profiles.Name = function ProfilesTitle({children, ...restProps}) {
    return <Name {...restProps}>{children}</Name>;
}