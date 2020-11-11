import React from "react";
import DetailPresenter from "./DetailPresenter";
import { coinApi } from "../../api";


export default class extends React.Component {
    state = {
        loading: true,
        error: null,
        detailData: null
    }

    componentDidMount = async () => {
        try {
            const { match: {
                params: { id }
            } } = this.props
            const { data } = await coinApi.getDetail(id);
            this.setState({
                detailData: data,
                id: id
            })
        } catch {
            this.setState({
                error: "Can't find Detail Api"
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { loading, detailData, id } = this.state
        return (
            <DetailPresenter loading={loading} {...detailData} id={id} />
        )
    }

}