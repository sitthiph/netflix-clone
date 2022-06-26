import React from "react";
import { LockBody, Picture, Spinner } from "./loading.styles";

export default function Loading(children, ...restProps) {
    return(
    <Spinner {...restProps}>
        <LockBody />
        <Picture src={`../../../public/images/users/${src}.png`} />
    </Spinner>
    );
};

Loading.Other = function LoadingOther(children, ...restProps) {
    return <Loading {...restProps}>{children}</Loading>
};