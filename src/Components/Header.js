import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.ul`
    display: flex;
`;
const SLink = styled(Link)`
    text-decoration: none;
    color: black;
    
`;
const Item = styled.li`
    display: inline-block;
    margin: 10px;
    background-color: ${(props) => props.current ? "yellow" : "transparent"};
`;
const Header = ({ location: { pathname } }) => (
    <header>
        <h2>Coin Explorer</h2>
        <Nav>
            <Item current={pathname === "/"}>
                <SLink to="/">Price</SLink>
            </Item>
            <Item current={pathname === "/coin"}>
                <SLink to="/coin">Coin</SLink>
            </Item>
            <Item current={pathname === "/exchange"}>
                <SLink to="/exchange">Exchange</SLink>
            </Item>
        </Nav>
    </header>
);

export default withRouter(Header);