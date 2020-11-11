import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Exchanges from "../../Components/Exchanges";

const ExchangePresenter = ({ loading, error, exchange }) => (loading ? (<Loader />) : (
    exchange && exchange.length && (
        exchange.map(ex => (<Exchanges key={ex.id} {...ex} />)
        )
    )
));

ExchangePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    exchange: PropTypes.array
}

export default ExchangePresenter;