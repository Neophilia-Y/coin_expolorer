import React from "react";
import PricePresenter from "./PricePresenter";
import { coinApi } from "../../api"

export default class extends React.Component {
    state = {
        loading: true,
        error: null,
        price: null,
    }

    async componentDidMount() {
        try {
            const { data } = await coinApi.prices()
            this.setState({
                price: data
            })
        } catch {
            this.setState({
                error: "Can't find Price Api"
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { loading, error, price } = this.state;
        return (
            <PricePresenter
                loading={loading}
                error={error}
                price={price}
            />
        );
    }
}