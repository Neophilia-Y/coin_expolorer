import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const CoinPresenter = ({ loading, error, coins }) => (loading ? (<Loader />) : (
    coins && coins.length && (<Section title="Coin value">{coins.map(coin => (<span>{coin.rank}. {coin.id}</span>))}</Section>))
);

CoinPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    coin: PropTypes.array
}

export default CoinPresenter;