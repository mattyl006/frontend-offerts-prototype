import React from "react";
import './WebsitesDesktop.scss';

import useOnScreen from "../../../functions/useOnScreen";
import observerNavigation from "../../../functions/observerNavigation";
import View from "../../../components/sections/View";
import Content from "../../../components/sections/Content";
import Decorate from "../../../components/sections/Decorate";
import MiniContact from "../../../components/common/MiniContact";
import Packages from "../../../components/sections/Packages";
import Stages from "../../../components/sections/Stages/Stages";
import WebsiteOrder from "../../../components/common/WebsiteOrder";

import monitor from "../../../assets/monitor.svg";

import database from "../../../database";
import Banner from "../../../components/common/Banner";

function WebsitesDesktop() {

    const [setRefWebsites, visibleWebsites] = useOnScreen({rootMargin: '-48px'});
    const [setRefOffert, visibleOffert] = useOnScreen({rootMargin: '-48px'});

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="WebsitesDesktop">
            {observerNavigation(visibleWebsites, visibleOffert)}
            <div className="observer-div" ref={setRefWebsites}>
                <View>
                    <Decorate titleView={false} url={monitor} alt="Monitor wyświetlający przykładową stronę www."/>
                    <Content titleView={false} header={database.website.header} headerSpan={database.website.headerSpan}
                             describe={database.website.more} id={"websites"} button={false}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefOffert}>
                <Packages section={"websites"} />
                <Stages />
                <WebsiteOrder  link={"/freelance-offert-website/pricing"}/>
                <MiniContact />
            </div>
        </div>
    );
}

export default WebsitesDesktop;