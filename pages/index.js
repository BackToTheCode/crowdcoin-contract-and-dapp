import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "../routes";

import factory from "../ethereum/factory";

import Layout from "../components/Layout";
// import 'semantic-ui-css/semantic.min.css';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods
            .getDeployedCampaigns()
            .call();
        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View campaign</a>
                    </Link>
                ),
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <h3>Open campaigns</h3>
                <Link route="/campaigns/new">
                    <a>
                        <Button
                            floated="right"
                            content="Create Campaign"
                            icon="add circle"
                            primary
                        />
                    </a>
                </Link>
                <div>{this.renderCampaigns()}</div>
            </Layout>
        );
    }
}

export default CampaignIndex;
