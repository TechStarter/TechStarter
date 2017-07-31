import React from 'react';
import { Link } from 'react-router-dom';
import ProjectEntry from '../components/projectEntry.jsx';

class LandingPage extends React.Component {
  componentDidMount() {
    this.props.handleProjectFetching('landing page');
  }

  render() {
    return (
      <div className='container' style={{backgroundColor: 'rgb(252, 252, 252)'}}>
        <div className='row justify-content-center landing_page clearfix'>
          <div className='col-md-6 col-md-offset-3' style={{textAlign: 'center', marginTop: '200px'}}>
            <h2 style={{fontSize: '64px'}}>Platform of ideas.</h2>
            <div className='col-md-2 col-md-offset-5' style={{border: '1px solid rgb(240, 95, 64)'}}></div>
          </div>
          <div className='col-md start_project_btn'>
            <Link to='/create'>
              <button className='get-started'>GET STARTED!</button>
            </Link>
          </div>
        </div>
        <div className='row col-md-10 col-md-offset-1 project-miniview'>
          <div className='row'>
            <h2>Most Popular Projects</h2>
            <div style={{border: '1px solid rgb(240, 95, 64)', width: '50px', left: '50%', marginLeft: '-25px', position: 'absolute'}}></div>
          </div>
          <div className='row justify-content-center project-miniview-content'>
            {this.props.projects.content.map((project, index) => <ProjectEntry project={project} key={index}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
