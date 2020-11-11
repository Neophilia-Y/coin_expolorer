import React from "react";
import CoinExPresenter from "./CoinExPresenter";
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
            const { data } = await coinApi.getExchange(id);
            this.setState({ data: data })
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({
                loading: false
            })
        }
    }
    render() {

        return (
            <CoinExPresenter {...this.state} />
        )
    }
}