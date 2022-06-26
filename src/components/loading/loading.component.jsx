import React from "react";

export default function Loading(children, ...restProps) {
    return <Loading {...restProps}>{children}</Loading>
}