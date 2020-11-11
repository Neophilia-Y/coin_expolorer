import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    
`;

const Prices = ({ name, symbol, quotes }) => (
    <Container>{name} / {symbol}: ${quotes.USD.price}</Container>
);


Prices.propTypes = {
    name: PropTypes.string,
    symbol: PropTypes.string,
    quotes: PropTypes.shape({
        USD: PropTypes.shape({
            price: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
}

export default Prices;