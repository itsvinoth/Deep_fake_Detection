import React, {Component} from 'react';
import Footer1 from '../Footer/Footer';
import './Detect.css';
import DetectImage from '../../Assets/facesearch.svg';
import axios from 'axios';

class Detect extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            file: null,
            output: null,
            confidence: null,
            
        }
        
        this.onFileSelect = this.onFileSelect.bind(this);
        
    }

    componentDidMount(){
        console.log("component Mounted");   
        window.addEventListener('load', this.handleLoad);
    }
    
    handleLoad = () => {
        console.log(window.data);
        var test = window.data;
        test = test.replaceAll("&#34;", "\"");
        console.log(test);
        test = JSON.parse(test);
        this.setState({output: test.output, confidence: test.confidence});
    }

    uploadFile2Backend = () => {
        document.getElementById("line").style.display = "none";
        const formData = new FormData();
        formData.append("video", this.state.file, this.state.file.name)
        axios.post('http://127.0.0.1:3000/Detect', formData).catch(error => {
            console.log(error);
          }).then(res => {
            console.log(res);
        });
    }

    onFileSelect = (event) => {
        if (event.target.files && event.target.files[0]){
            this.setState({file: event.target.files[0]});
        }
        document.getElementById("sub").style.display = "inline-block";
    }

    render(){
        const {output, confidence} = this.state;
        return(
            <React.Fragment>
                <div className="background1">
                    <h1 className="detectHeading">IS YOUR VIDEO FAKE ? CHECK IT !</h1>
                    <form method="POST" action="" encType="multipart/form-data">
                    
                        <label for="video" className="button" style={{top: "15vh", padding: "0"}}>+ ADD VIDEO</label>
                        <input id="video" name="video" type="file" style={{display: "none"}} onChange = {this.onFileSelect}/>
                        <br/>
                        <input type="submit" id="sub" value="submit" onSubmit= {this.uploadFile2Backend} style={{display: "none",verticalAlign: "middle", textAlign: "center",  top: "16vh", position: "relative"}}/>
                        
                    </form>
                    
                    <img src={DetectImage} alt="detect image" style={{height: "35vh", width: "35vh", top: "20vh",position: "relative"}}/>
                    <h2 id="line" style={{color: "#16F7FA", top: "20vh", position: "relative"}}>RESULT OF THE VIDEO WILL GO HERE!</h2>
                    <h2 id="result" style={{color: "#16F7FA", top: "22vh", position: "relative"}}>Result: <span style={{color: "white"}}>{output}</span></h2>
                    <h2 id="result" style={{color: "#16F7FA", top: "22.5vh", position: "relative"}}>Confidence: <span style={{color: "white"}}>{confidence}</span></h2>
                    
                </div>
                <Footer1 />
            </React.Fragment>
        );
    }
}

export default Detect;