import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const PricePresenter = ({ loading, error, price }) => (loading ? (<Loader />) : (
    price && price.length && (<Section title="Coin Price">{price.map(coin => (<span>{coin.symbol}: {coin.quotes.USD.price}</span>))}</Section>))
);

PricePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    price: PropTypes.array
}

export default PricePresenter;