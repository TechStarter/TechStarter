import React from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../actions/projectPageActions.js';


class ProjectPage extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  render() {
    let fetched = this.props.projectPage.fetched;
    const { id, name, images, description, companyName } = this.props.projectPage.content;
    return (
      <div className='Container'>
        <div className='col-md-3 content-left'>

        </div>
        <div className='col-md-6 content-mid'>
          <div className='row justify-content-center'>
            {fetched ? images.map((image, index) => <img src={`${image.full}`} key={index}></img>) : 'loading...'}
          </div>
          <div className='row justify-content-center'>

          </div>
        </div>
        <div className='col-md-3 content-right'>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ projectPage: state.projectPage });

const mapDispatchToProps = dispatch => ({
  fetchProject: (id) => dispatch(fetchProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
