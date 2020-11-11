import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
`;

const CoinExPresenter = ({ loading, data }) => (loading ? <Loader /> : (
    data && data.length > 0 && data.map(
        (e, index) => {
            if (e.fiats.length > 0) {
                return (<Container key={index}>
                    <h2>{e.name}</h2>
                    <div>{e.fiats.map((a => (<span>{a.symbol}  </span>)))}</div>
                </Container>)
            }
        }
    )
))



export default CoinExPresenter;