import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
const exchangeName = []
const MarketPresenter = ({ loading, data }) => (loading ? <Loader /> : (
    data && data.length > 0 && (
        data.map((market, index) => {
            if (exchangeName.includes(market.exchangeName)) {
                return 0;
            }
            exchangeName.push(market.exchange_name)

            return (<Container key={index}>{market.exchange_name}</Container>);

        }
        ))

))

export default MarketPresenter;