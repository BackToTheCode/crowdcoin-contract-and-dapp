import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import { Router } from "../routes";

import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

export default class RequestRow extends Component {
    state = {
        approving: false,
        finalizing: false
    };

    onFinalize = async () => {
        this.setState({ finalizing: true });

        const { address } = this.props;
        const campaign = Campaign(address);
        const accounts = await web3.eth.getAccounts();

        await campaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        });

        Router.replaceRoute(`/campaigns/${address}/requests`);

        this.setState({ finalizing: false });
    };

    onApprove = async () => {
        this.setState({ approving: true });

        const { address } = this.props;
        const campaign = Campaign(address);
        const accounts = await web3.eth.getAccounts();

        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });

        Router.replaceRoute(`/campaigns/${address}/requests`);

        this.setState({ approving: false });
    };

    render() {
        const { Row, Cell } = Table;
        const { id, approversCount } = this.props;
        const {
            description,
            value,
            recipient,
            approvalCount,
            complete
        } = this.props.request;

        const readyToFinalize = approvalCount > approversCount / 2;

        return (
            <Row
                disabled={complete}
                positive={readyToFinalize && !complete}
            >
                <Cell>{id}</Cell>
                <Cell>{description}</Cell>
                <Cell>{web3.utils.fromWei(value, "ether")}</Cell>
                <Cell>{recipient}</Cell>
                <Cell>
                    {approvalCount} / {approversCount}
                </Cell>
                <Cell>
                    {complete || readyToFinalize ? null : (
                        <Button
                            loading={this.state.approving}
                            onClick={this.onApprove}
                            color="green"
                            basic
                        >
                            Approve
                        </Button>
                    )}
                </Cell>
                <Cell>
                    {complete ? null : (
                        <Button
                            loading={this.state.finalizing}
                            onClick={this.onFinalize}
                            color="orange"
                            basic
                        >
                            Finalize
                        </Button>
                    )}
                </Cell>
            </Row>
        );
    }
}
