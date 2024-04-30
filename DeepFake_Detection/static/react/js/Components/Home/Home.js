import React, {Component} from 'react';
import './Home.css';
import Footer1 from '../Footer/Footer';

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="content">
                    <h1 className="heading"> <span style={{color: "#16F7FA", fontWeight: "bold"}}>DEEP</span> FAKE</h1>
                    <p className="para">DeepFake technology is incredibly advance and can easily confuse humans between a real and a fake video. It has a great potential in entertainment, gaming and other various fields if used responsibly. Our application provides you a platform were you can detect your own DeepFake video by uploading the real or fake video. </p>
                </div>
                <Footer1 />
            </React.Fragment>
        );
    }
}

export default Home;