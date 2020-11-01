import React from "react";
import CoinPresenter from "./CoinPresenter";
import { coinApi } from "../../api";

export default class extends React.Component {
    state = {
        loading: true,
        error: null,
        coins: null,
    }

    async componentDidMount() {
        try {
            const { data } = await coinApi.coins();
            this.setState({
                coins: data
            })
        } catch {
            this.setState({ error: "Can't find Api" });
        } finally {
            this.setState({
                loading: false,
            });
        }

    }
    render() {
        const { loading, error, coins } = this.state;
        return (
            <CoinPresenter loading={loading} error={error} coins={coins} />
        );
    }
}