import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Coins from "../../Components/Coins";

const CoinPresenter = ({ loading, error, coins }) => (loading ? (<Loader />) : (
    coins && coins.length && (
        <>
            <h2>Coins Informain</h2>
            {
                coins.map(coin => (
                    <Coins key={coin.id} id={coin.id} symbol={coin.symbol} rank={coin.rank} name={coin.name} />
                ))
            }

        </>
    )
));

CoinPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    coin: PropTypes.array
}

export default CoinPresenter;