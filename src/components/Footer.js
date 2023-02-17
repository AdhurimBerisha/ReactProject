import React from 'react'
import '../styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos, faFacebook, faGooglePlay, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { ArrowRightCircleFill} from 'react-bootstrap-icons';


const fbicon = <FontAwesomeIcon icon={faFacebook} />
const twtIcon = <FontAwesomeIcon icon = {faTwitter} />
const instaIcon = <FontAwesomeIcon icon = {faInstagram} />

function Footer(){
    return(
        <div>
        <div>
            <div className="bottom-sidebar kopa-area"  style = {{backgroundColor:"rgba(66,65,65,1.00)", height : "-50%" }}>
            <div className="container">
			<div className="row" >
				<div className="col-md-6">	
					<div  style={{textAlign: "center", fontSize: "25px"}} >
						<p class="bottom-logo-title" style={{color : "white"}}>About Us</p>
					</div>
						

					<div class="bottom-logo-caption"  style = {{borderRight : "2px solid white", color : "white"}}>
						<p> Feel free to contact me through these methods written down below:</p>
						<p>Email: aadhurimberisha@gmail.com <br/>Phone : 043-123-456</p>	
					</div>
		</div>
			  
			  <div className="col-md-6">
				<article class="entry-item">
						<div className="entry-content"> 
							<h4 class="entry-title style-03 newsletter-title" style={{color:"white"}}>
								Newsletter Sign Up
							</h4>
								<p style = {{color :"white"}}>
									Sign up for the Best Made newsletter to get the latest news, announcements, special offers and event information
								</p>
								<div className="enter-mail">
									<form method="post" action="#">
										<input class="mail-input" placeholder="Your email address" type="text" value="" name="mail" id="mail"/>
										<button type="submit" class="mail-submit" style = {{color:"white", fontSize:"20px", borderRadius:'8px'}}><ArrowRightCircleFill />
										</button>										
									</form>
								</div>
						</div>
				</article>
			  </div>  
			</div>

				
					<div className="widget millside-module-mail" style = {{marginLeft: "60%", marginTop : "1%"}}>		
						<div className="kopa-social-links-2 text-center" style = {{marginLeft :" -150%" }}>
							<div className="container" style={{marginBottom:"2%", marginTop:" 2%"}}>
							</div>
							<ul class="clearfix">
								<li><a href="#" >{fbicon}</a></li>												
								<li><a href="#">{twtIcon}</a></li>
								<li><a href="#">{instaIcon}</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>


			<footer class="kopa-page-footer" style = {{backgroundColor:"black"}}>
			<div className="container" style = {{marginBottom:"-2%"}}>			
				<p class="text-center" style = {{marginTop : "-2%", color:"white"}}>
				Copyright © 2023 <span style={{fontWeight: 'bold', color:"white"}}>Adhurim Berisha</span> All Rights Reserved. 
				</p>
			</div>
		</footer>
        </div>
    );
}

export default Footer