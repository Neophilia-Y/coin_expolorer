import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Prices from "../../Components/Prices";

const PricePresenter = ({ loading, error, price }) => (loading ? (<Loader />) : (
    price && price.length && (
        price.map(p =>
            <Prices key={p.id} {...p} />)
    ))
);

PricePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
}

export default PricePresenter;