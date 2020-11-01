import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const ExchangePresenter = ({ loading, error, exchange }) => (loading ? (<Loader />) : (
    exchange && exchange.length && (<Section title="Exchange">{exchange.map(ex => (<span>{ex.id}</span>))}</Section>))
);

ExchangePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    exchange: PropTypes.array
}

export default ExchangePresenter;