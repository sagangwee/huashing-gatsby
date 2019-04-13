import React from "react";
import Layout from "../components/layout/Layout"
import huashing from "../images/huawang.jpg";

export default class About extends React.Component {
  componentDidMount() {
  	document.body.scrollTop = 0;
  }

  render() {
    return (
      <Layout location={this.props.location}>
    		<div>
    			<h1 className="page-title">About</h1>
    			<div className="about-container">
    				<div className="name-module">
    					<img src={huashing} className="huawang"/>
    					<div className="title-module">
    						<h1>Hua Wang LAc</h1>
    						<h2 className="headline-module">Acupuncture Specialist </h2>
    					</div>
    				</div>
    				<div className="summary-module">
    					<h2 className="tagline"> Quality. Love. Responsibility.</h2>
    					<p>Hua Wang is an expert in TCM (Traditional Chinese Medicine) and acupuncture specializing in pain and stress management.
    					She graduated from Cheng Du University of Traditional Chinese Medicine in China after 5 years of study.
    					Hua Wang has been practicing acupuncture and TCM since 1993. </p>
    				</div>
    				<div className="qualifications-module">
    					<h2 className="qualifications-header">Qualifications</h2>
    					<br/>
    					<strong className="bold-brown">Years in Practice:</strong> 20+ <br/>
    					<strong className="bold-brown">Education:</strong> Cheng Du University of TCM 1993 <br/>
    					<strong className="bold-brown">License No. and State:</strong> 0438 Arizona <br/>
    					<strong className="bold-brown">Languages:</strong> English, Mandarin
    				</div>
    			</div>
    		</div>
      </Layout>
    );
  }
}
