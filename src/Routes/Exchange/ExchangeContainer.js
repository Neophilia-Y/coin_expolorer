import React from "react";
import { coinApi } from "../../api";
import ExchangePresenter from "./ExchangePresenter";


export default class extends React.Component {
    state = {
        loading: true,
        error: null,
        exchange: null,
    }
    async componentDidMount() {
        try {
            const { data } = await coinApi.exchanges();
            this.setState({
                exchange: data
            })
        } catch {
            this.setState({
                error: "Can't find Exchange Api"
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }
    render() {
        const { loading, error, exchange } = this.state;
        return (
            <ExchangePresenter
                loading={loading}
                error={error}
                exchange={exchange}
            />
        );
    }
}