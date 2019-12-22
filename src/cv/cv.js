import React from 'react';
import jul from "../images/unnamed.jpg";
import profileData from "../profile.json";
import { Chip,Avatar} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ViewListIcon from '@material-ui/icons/ViewList';
import CodeIcon from '@material-ui/icons/CodeOutlined';

export default function Cv() {
        return (
            <div className="col-md-12 bg-light p-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src={jul} alt="Julien Rajerison" className="rounded-circle jul-photo"/>
                    </div>
                    <div className="col-md-8">
                        <h2 className="text-left">Hello , I'm Julien.</h2>
                        <hr/>
                        <h5>Professional developer</h5>
                        <span>{profileData.profile.me}</span>
                    </div>
                </div>
            
                    <div className="col-md-12 mt-3">
                        <h1>PROFILE</h1>
                        <h4>Full Name</h4>
                        {profileData.profile.nom + ' ' + profileData.profile.prenom}
                        <hr/>
                        <h4>Born</h4>
                        {profileData.profile.dn}
                        <hr/>
                        <h4>Email</h4>
                        {profileData.profile.email}
                        <hr/>
                        <h4>Phone</h4>
                        {profileData.profile.phone}
                        <hr/>
                        <h4>State</h4>
                        {profileData.profile.state}
                        <hr/>
                        <h4>Network</h4>
                        <Chip 
                            avatar={<Avatar><GitHubIcon/></Avatar>} 
                            component="a" 
                            href={profileData.network.github}
                            target="_blank" 
                            variant="outlined" 
                            label="Github"
                            />
                        <Chip className="ml-2 text-danger"
                            avatar={<Avatar><LinkedInIcon/></Avatar>} 
                            component="a" 
                            href={profileData.network.linkedin}
                            target="_blank"
                            color="secondary"
                            variant="outlined" 
                            label="Linkedin"
                            />
                         <Chip className="ml-2"
                            avatar={<Avatar><ViewListIcon/></Avatar>} 
                            component="a" 
                            href={profileData.network.stackoverflow}
                            target="_blank" 
                            color="primary" 
                            variant="outlined" 
                            label="Stackoverflow"
                            />
                        <Chip className="ml-2"
                            avatar={<Avatar><FacebookIcon/></Avatar>} 
                            component="a" 
                            href={profileData.network.facebook}
                            target="_blank" 
                            color="primary" 
                            variant="outlined" 
                            label="Facebook"
                            />
                        <hr/>
                    </div>

                <div className="col-md-12 mt-5">
                    <h1>EXPERIENCE</h1>
                    <h4>BOCASAY</h4>
                    {profileData.experience.bocasay}
                    <hr/>
                    <h4>CONSULTANT</h4>
                    {profileData.experience.consultant}
                    <hr></hr>
                    <h4>LIVENEXX</h4>
                    {profileData.experience.livenexx}
                    <hr></hr>
                    <h4>TELMA</h4>
                    {profileData.experience.telma}
                    <hr></hr>
                    <h4>ORANGE</h4>
                    {profileData.experience.orange}
                </div>

                <div className="col-md-12 mt-5">
                    <h1>SKILLS</h1>
                    <h4>PROFESSIONAL</h4>
                    {profileData.skills.professional.map((item,key)=>{
                        return <Chip label={item} key={key} variant="outlined" color="primary" className="m-2"/>
                    })}
                    <hr/>
                    <h4>DATABASE</h4>
                    {profileData.skills.database.map((item,key)=>{
                        return <Chip label={item} variant="outlined"  key={key} color="primary" className="m-2"/>
                    })}
                    <hr></hr>
                    <h4>TOOLS</h4>
                    {profileData.skills.tools.map((item,key)=>{
                        return <Chip label={item} variant="outlined"  key={key} color="primary" className="m-2"/>
                    })}
                    <hr></hr>
                    <h4>ENVIRONMENT</h4>
                    {profileData.skills.environment.map((item,key)=>{
                        return <Chip label={item} variant="outlined" key={key} color="primary" className="m-2"/>
                    })}
                    <hr></hr>
                    <h4>CONFIGURATION</h4>
                    {profileData.skills.configuration.map((item,key)=>{
                        return <Chip label={item} variant="outlined" key={key} color="primary" className="m-2"/>
                    })}
                    <hr></hr>
                    <h4>OTHER</h4>
                    {profileData.skills.other.map((item,key)=>{
                        return <Chip label={item} variant="outlined" key={key} color="primary" className="m-2"/>
                    })}
                </div>
                <div className="col-md-12 mt-5">
                    <h1>CERTIFICATE</h1>
                    <Chip className="ml-2"
                            avatar={<Avatar><CodeIcon/></Avatar>} 
                            component="a" 
                            href={profileData.certificate.symfony4}
                            target="_blank" 
                            color="primary" 
                            variant="outlined" 
                            label="Symfony 4"
                    />
                    <Chip className="ml-2"
                            avatar={<Avatar><CodeIcon/></Avatar>} 
                            component="a" 
                            href={profileData.certificate.symfony3}
                            target="_blank" 
                            color="primary" 
                            variant="outlined" 
                            label="Symfony 3"
                    />
                    <Chip className="ml-2"
                            avatar={<Avatar><CodeIcon/></Avatar>} 
                            component="a" 
                            href={profileData.certificate.bootstrap4}
                            target="_blank" 
                            color="primary" 
                            variant="outlined" 
                            label="Bootstrap 4"
                    />
                </div>
                <div className="mb-5"></div>
                <div className="col-md-12">
                    <h1 className="text-center">Thank You !</h1>
                </div>
            </div>
        );
    }