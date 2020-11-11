import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader"
import { Link, withRouter, Route } from "react-router-dom"
import Market from "../Market";
import CoinExchange from "../CoinExchange";

const Container = styled.div`
    margin-bottom: 30px;
`;
const Title = styled.div`
    font-size:20px;
    font-weight: 700;
    margin: 20px 0px;
`;
const List = styled.div`
    margin: 20px 0px;
    font-weight: 600;
`;
const Item = styled.div`
`;
const SubHeader = styled.div`
    margin: 20px 0px;
`;
const Button = styled(Link)`
    padding: 10px 30px;
    margin: 15px;
    border: 1px solid green;
    text-decoration: none;
    color: black;
    background-color: ${(props) => (
        props.currency ? "yellow" : "transparency"
    )};
`;


const DetailPresenter = withRouter(({ location: { pathname }, loading, name, symbol, description, rank, open_source, proof_type, org_structure, id }) => (
    loading ? <Loader /> : (<Container>
        <Title>{name} / {symbol}</Title>
        <p>{description}</p>
        <List>
            <Item>Rank: {rank}</Item>
            <Item>Open Source: {open_source ? "Yes" : "No"}</Item>
            <Item>Proof Type: {proof_type}</Item>
            <Item>Structure: {org_structure}</Item>
        </List>
        <SubHeader>
            <Button to={`/coin/${id}/markets`} currency={pathname.includes("markets")}>Markets</Button>
            <Button to={`/coin/${id}/exchanges`} currency={pathname.includes("exchanges")}>Exchanges</Button>
        </SubHeader>
        <Route path="/coin/:id/markets" component={Market} />
        <Route path="/coin/:id/exchanges" component={CoinExchange} />
    </Container>)
))

export default DetailPresenter;