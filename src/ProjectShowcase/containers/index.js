import React, { Component } from 'react';
import { connect } from 'react-redux';
import { imagesFetch } from '../actions';

class ProjectShowcase extends Component {
  componentDidMount() {
    this.props.fetchImages(this.props.query);
  }
  render() {
    const {
      images
    } = this.props;
    return (
      <div>
        {images.imgData.length > 0 &&
          <img
            alt="Internet not working"
            src={images.imgData[images.currentImageIndex].urls.small}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const images = state[ownProps.query];
  return {
    images
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: (q) => dispatch(imagesFetch(q)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShowcase);
