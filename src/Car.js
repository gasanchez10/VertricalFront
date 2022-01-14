import React from "react";
import './Car.css';
import {
  Dropdown,
  DropdownButton,
  Container,
  Row,
  Col,
  Modal,
  Button
} from "react-bootstrap";

import { NavLink } from "react-router-dom";
const Car = props => {
const { title, photo, description, short_description } =
(props.location && props.location.state) || {};
    return (
        <div>
          <div className="form-details">
            <div className="split">
              <strong>{title}</strong> 
            </div>
            <div className="split">
               <img src={photo} alt="Test"/> 
            </div>
            <div className="split">
              <strong>{description}</strong> 
            </div>
            <NavLink className="split" to="/" activeClassName="active">
            Go Back
          </NavLink>
           
          </div>
        </div>
  );}


export default Car;
