import React from "react";
import "./App.css";
// import ImgToText from "./components/imageToText/ImgToText";
// import RegistratioForm from "./components/interview/RegistratioForm";
import InterviewQuestions from "./components/interview/InterviewQuestions";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <InterviewQuestions />
                {/* <ImgToText /> */}
                {/* <RegistratioForm/> */}
            </div>
        );
    }
}

export default App;
