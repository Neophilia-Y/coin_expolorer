import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
    
`;
const SLink = styled(Link)`
    text-decoration: none;
`;
const Rank = styled.span`
    font-weight: 700;
`;

const Coins = ({ id, name, symbol, rank }) => (
    <Container><SLink to={`/coin/${id}`} > <Rank>#{rank}</Rank> {name}/{symbol}</SLink ></Container>
);


Coins.propTypes = {
    name: PropTypes.string,
    symbol: PropTypes.string,
    rank: PropTypes.number
}

export default Coins;