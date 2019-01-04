import { Component } from 'react';
import { connect } from 'react-redux';
import { reSize } from '../action';

class CheckMobile extends Component {

  constructor(props) {
    super(props);
    this.query = window.matchMedia('(max-width: 768px)');
  }

  componentDidMount() {
    this.query.addListener(this.monitorSizeChange);
  }

  componentWillUnmount() {
    this.query.removeListener(this.monitorSizeChange);
  }

  monitorSizeChange = query => {
    this.props.changeSize(query.matches);
  };

  render() {
    return this.props.isMobile ? this.props.yes : this.props.no;
  }
}
const mapStateToProps = (state) => {
  const { isMobile } = state.isMobile;
  return {
    isMobile
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeSize: (q) => dispatch(reSize(q)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckMobile);