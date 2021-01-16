import './App.scss';
import React from 'react';

import View from './components/View';
import Decorate from './components/Decorate';
import Content from './components/Content';
import Contact from "./components/Contact";

import logo from './assets/main-logo.svg';
import aboutImage from './assets/about.svg';
import monitor from './assets/monitor.svg';
import exampleLogo from './assets/your-logo.svg';
import uavFlying from './assets/uav-flying.svg';
import miniLogo from './assets/mini-logo.svg';
import arrowIcon from './assets/arrow-icon.svg';

import database from './database.js';
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";

function useOnScreen(options) {
    const [ref, setRef] = React.useState(null);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return() => {
            if(ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return [setRef, visible];
}

function App() {

    const [setRefHome, visibleHome] = useOnScreen({rootMargin: '-48px'});
    const [setRefAbout, visibleAbout] = useOnScreen({rootMargin: '-48px'});
    const [setRefWebsites, visibleWebsites] = useOnScreen({rootMargin: '-48px'});
    const [setRefLogotypes, visibleLogotypes] = useOnScreen({rootMargin: '-48px'});
    const [setRefUav, visibleUav] = useOnScreen({rootMargin: '-48px'});
    const [setRefContact, visibleContact] = useOnScreen({rootMargin: '-48px'});
    const darkColor = '#171820';
    const lightColor = '#D7D7D7';
    const darkColorBackground = 'rgba(23, 24, 32, 0.8)';
    const lightColorBackground = 'rgba(215, 215, 215, 0.8)';

    function observerNavigation(visibleHome, visibleAbout, visibleWebsites, visibleLogotypes, visibleUav, visibleContact) {
        if(!visibleHome && visibleAbout) {
            // return ("lewa ciemna, prawa jasna, napisy ciemne");
            return (
                <Navigation logo={miniLogo}
                leftBackgroundColor={darkColorBackground} rightBackgroundColor={lightColorBackground} linkColor={darkColor}/>
            );
        }
        if(!visibleAbout && visibleWebsites) {
            // return ("lewa jasna, prawa ciemna, napisy jasne");
            return (
                <Navigation logo={miniLogo}
                leftBackgroundColor={lightColorBackground} rightBackgroundColor={darkColorBackground} linkColor={lightColor}/>
            );
        }
        if(!visibleWebsites && visibleLogotypes) {
            // return ("lewa ciemna, prawa jasna, napisy ciemne");
            return (
                <Navigation logo={miniLogo}
                leftBackgroundColor={darkColorBackground} rightBackgroundColor={lightColorBackground} linkColor={darkColor}/>
            );
        }
        if(!visibleLogotypes && visibleUav) {
            // return ("lewa jasna, prawa ciemna, napisy jasne");
            return (
                <Navigation logo={miniLogo}
                leftBackgroundColor={lightColorBackground} rightBackgroundColor={darkColorBackground} linkColor={lightColor}/>
            );
        }
        if(!visibleUav && visibleContact) {
            // return ("lewa ciemna, prawa ciemna, napisy jasne");
            return (
                <Navigation logo={miniLogo}
                leftBackgroundColor={lightColorBackground} rightBackgroundColor={lightColorBackground} linkColor={darkColor}/>
            );
        }
        // return ("startowy przypadek");
        return (
            <Navigation logo={miniLogo}
            leftBackgroundColor={lightColorBackground} rightBackgroundColor={darkColorBackground} linkColor={lightColor}/>
        );
    }

    return (
    <div className="App">
        {observerNavigation(visibleHome, visibleAbout, visibleWebsites, visibleLogotypes, visibleUav, visibleContact)}
        <div className="observer-div" ref={setRefHome}>
            <View>
                <Decorate titleView={true} url={logo} alt="Logo G&M. Podkreślony napis G&M w okręgu."/>
                <Content titleView={true} id={"home"}/>
            </View>
        </div>
        <div className="observer-div" ref={setRefAbout}>
            <View>
                <Content titleView={false} header={database.about.header}
                         headerSpan={database.about.headerSpan} describe={database.about.paragraph} id={"about"}/>
                <Decorate titleView={false} url={aboutImage} alt="Znak równowagi. Okrąg z jasną i ciemną połową, które nachodzą na siebie."/>
            </View>
        </div>
        <div className="observer-div" ref={setRefWebsites}>
            <View>
                <Decorate titleView={false} url={monitor} alt="Monitor wyświetlający przykładową stronę www."/>
                <Content titleView={false} header={database.website.header}
                         headerSpan={database.website.headerSpan} describe={database.website.paragraph} id={"websites"}/>
            </View>
        </div>
        <div className="observer-div" ref={setRefLogotypes}>
            <View>
                <Content titleView={false} header={database.logotypes.header}
                         headerSpan={database.logotypes.headerSpan} describe={database.logotypes.paragraph} id={"logotypes"}/>
                <Decorate titleView={false} url={exampleLogo} alt="Przykładowe logo zaprojektowane przez Grzegorza."/>
            </View>
        </div>
        <div className="observer-div" ref={setRefUav}>
            <View>
                <Decorate titleView={false} url={uavFlying} alt="Blond ludzik latający dronem."/>
                <Content titleView={false} header={database.uav.header}
                         headerSpan={database.uav.headerSpan} describe={database.uav.paragraph} id={"uav"}/>
            </View>
        </div>
        <div className="observer-div" ref={setRefContact}>
            <Banner url={arrowIcon} alt="Iconka ze strzałką." />
            <Contact />
        </div>
    </div>
    );
}

export default App;
