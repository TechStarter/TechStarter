import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProject } from '../actions/projectPageActions.js';
import { isContact } from '../actions/isContactActions.js';
import ProjectPageMain from '../components/projectPageMain.jsx';
import Payment from './payment.jsx';
import Spinner from '../components/spinner.jsx';

class ProjectPage extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    let project = this.props.match.params.project;
    this.props.fetchProject(`${userId}/${project}`);
    console.log(this.props.user);
    if (this.props.user.isLoggedIn) {
      this.props.checkIfContact(Number(userId), this.props.user.fetchedUser);
    }
  }

  render() {
    let sessionOwner = this.props.user;
    let fetched = this.props.projectPage.fetched;
    let project = this.props.projectPage.content;
    return (
      <div className='container project-page'>
        {
          fetched ?
            <ProjectPageMain
              project={project}
              match={this.props.match}
              user={sessionOwner}
              isContact={this.props.isContact.isContact}
              sendContactRequest={this.props.sendContactRequest}
            /> :
            <Spinner style={{marginTop: '150px'}}/>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({ projectPage: state.projectPage, isContact: state.isContact });

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  checkIfContact: (id, sessionOwner) => dispatch(isContact(id, sessionOwner))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectPage));
