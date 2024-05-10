import Header from "../header/header";
import SocialLinks from "../soical-links/social-links";
import Title from "../titel/titel";
import Slider from "../slider/slider";
import TextContent from "../textcontent/textcontent";
import Button from "../button/button";
import BackgroundDecoration from "../background-decoration/background-decoration";

import './app.css';

function App() {
    return (
        <div className="app">
            <div className="wrapper">
                <Header />
                <SocialLinks />
                <Title text="DualSense"/>
                <Slider />
                <TextContent 
                        text=" DualSense marks a radical departure from our previous controller and
                        captures just how strongly we feel about marking a generational leap with PS5."
                />
                <Button text= "Add to card"/>
                <BackgroundDecoration/>
            </div>
        </div>
    );
}

export default App;