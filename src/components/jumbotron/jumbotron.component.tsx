import React from "react";
import {Inner, Container, Title, SubTitle, Image, Pane, Item} from './jumbotron.styles'


const Jumbotron = ({children, direction = 'row', ...restProps}) => {
    return (
    <Item direction = {direction}>
        <Inner>    
        {children}
        </Inner>
    </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronContainer({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronContainer({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Jumbotron.SubTitle = function JumbotronContainer({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = function JumbotronContainer({children, ...restProps}) {
    return <Image {...restProps}>{children}</Image>
}

export default Jumbotron;