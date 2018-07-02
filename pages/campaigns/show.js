import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import { Link } from "../../routes";

import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";

import Layout from "../../components/Layout";
import ContributeForm from "../../components/ContributeForm";
class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();

        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
            address: props.query.address
        };
    }

    renderCards() {
        const {
            minimumContribution,
            balance,
            requestsCount,
            approversCount,
            manager
        } = this.props;

        const items = [
            {
                header: manager,
                meta: "Address of Manager",
                description:
                    "The manager created this campaign and can create requests to withdraw funds",
                style: {
                    overflowWrap: "break-word"
                }
            },
            {
                header: minimumContribution,
                meta: "Minimum contribution (wei)",
                description:
                    "You must contribute at least this much wei to become an approver"
            },
            {
                header: requestsCount,
                meta: "Number of Requests",
                description:
                    "A request tries to withdraw funds from the contract. A request must be approved by contributors."
            },
            {
                header: approversCount,
                meta: "Number of Approvers",
                description:
                    "Number of people who have already donated to this campaign."
            },
            {
                header: web3.utils.fromWei(balance, "ether"),
                meta: "Campaign Balance (eth)",
                description:
                    "The amount of funds this campaign has left to spend."
            }
        ];

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Overview</h3>
                <Grid doubling container columns={2}>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <ContributeForm
                                address={this.props.address}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link
                                route={`/campaigns/${
                                    this.props.address
                                }/requests`}
                            >
                                <a>
                                    <Button primary>
                                        View Requests
                                    </Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}

export default CampaignShow;
