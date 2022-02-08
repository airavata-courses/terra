import React, { useState } from "react";
import temp from "./Assets/temp.png"
import progress from "./Assets/progress.png"
import help from "./Assets/help.png"
import { useNavigate } from "react-router-dom";
import {Animated} from "react-animated-css";

import './CSS/Dashboard.css'

import Logout from './Logout';

function Header(props) {

    return(
        <div class = "header-container">
          <div class="profile-info">
              <div class = "profile-image">
                  <img src={temp} alt="header-image" class="avatar"/>
              </div>
              <div class ="profile">
                  <p class="name">{props.name}</p>
              </div>
          </div>
          <div class = 'nav'>
            <Logout />
          </div>    
        </div>
    )
}

export default Header;