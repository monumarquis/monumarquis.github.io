import React from 'react'
import Monu from "../assets/img/Monu.png";
import "./common.css";
const MyProfile = () => {
  return ( <div className="col-md-4 col-sm-6">
            <div className="box">
            <img className="slide-up-center imageMonu rounded-full mb-10 bg-white " src={Monu} alt="Monu" />
                <div className="box-content">
                    <h3 className="title">Monu Yadav</h3>
                    <span className="post">Full Stack Developer</span>
                    <ul className="icon">
                        <li><a href="#"><i class="fa fa-search"></i></a></li>
                        <li><a href="#"><i class="fa fa-link"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default MyProfile