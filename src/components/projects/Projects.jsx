import React from 'react';
import Icon from '../../utils/Icons';
import './utils/styles/Projects.css';

export const Projects = () => {
    return (
        <div className="bg-custom" id="project">
            <div className="container">
                <h2>Projects</h2>
                <Icon src="project" className="images-group" />
            </div>
        </div>
    )
}
