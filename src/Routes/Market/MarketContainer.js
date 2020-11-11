import React from "react";
import MarketPresenter from "./MarketPresenter";
import { coinApi } from "../../api";

export default class extends React.Component {
    state = {
        loading: false,
        error: null,
        data: null
    }
    componentDidMount = async () => {
        try {
            this.setState({
                loading: true
            })
            const { match: { params: { id } } } = this.props;
            const { data } = await coinApi.getMarket(id);
            this.setState({ data: data })
        } catch (e) {
            console.log(e)
        } finally {
            this.setState({
                loading: false
            })
        }
    }
    render() {
        return (
            <MarketPresenter {...this.state} />
        )
    }
}