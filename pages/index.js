import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

class CampaignIndex extends Component {

    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View campaign</a>,
                fluid: true
            }
        });

        return <Card.Group items={items} />;

    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
                <h1>{this.renderCampaigns()}</h1>
            </div>
        )
    }
}

export default CampaignIndex;