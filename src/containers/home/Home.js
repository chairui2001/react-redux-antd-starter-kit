import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getGeoLocation} from '../../actions/geolocation';
import Googlemap from '../../components/googlemap/Googlemap';
import './home.css';

export default class Home extends Component {

    render() {
        const {actions, geolocation} = this.props;

        return (
            <Row>
                <Col sm={8} smOffset={2} md={6} mdOffset={3}>
                    <Googlemap actions={actions} lat={geolocation.lat} lon={geolocation.lon}/>
                </Col>
            </Row>
        );
    }
}

Home.contextTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

Home.propTypes = {
    user: PropTypes.object,
};

function mapStateToProps(state) {
    const {auth, geolocation} = state;
    if (auth) {
        return {
            user: auth.user,
            geolocation: geolocation
        };
    }

    return {user: null};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({getGeoLocation}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


