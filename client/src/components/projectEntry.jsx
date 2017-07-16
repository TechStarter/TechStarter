import React from 'react';
import { Modal, Fade } from 'react-bootstrap';
import { styles } from '../styles';

const ProjectEntry = ({ project }) => (
  <div className='col-md-4 project_entry'>
    <div className='thumbnails'>
      <img src={`/assets/pageres/${project.images[0].url}`}></img>
    </div>
    <div className='project_entry_info'>
      <h4>{project.name}</h4>
    </div>
  </div>
);

export default ProjectEntry;
