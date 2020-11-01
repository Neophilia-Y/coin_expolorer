import React from "react";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
`;
const Item = styled.span`
    font-size: 20px;
`
const Loader = () => (
    <Container><Item>Loader..</Item></Container>
)

export default Loader;