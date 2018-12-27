import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { init } from '../../services/home-service';
import '../../components/home/home.scss';
import HomeHeader from '../../components/home/home-header';

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <div className="home-container">
        <HomeHeader />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  init: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
