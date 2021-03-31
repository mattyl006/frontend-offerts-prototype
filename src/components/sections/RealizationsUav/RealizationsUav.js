import React from "react";
import "./RealizationsUav.scss";
import Video from "../../common/Video";

function RealizationsUav({src}) {
    return (
        <section className="RealizationsUav">
            <h2 className="RealizationsUav__header">
                Nasze realizacje
            </h2>
            <p className="RealizationsUav__paragraph">
                FILMY
            </p>
            <div className="RealizationsUav__container">
                <Video src={src} />
                <div className="RealizationsUav__content">
                    <p className="RealizationsUav__paragraph">
                        Film zrealizowany w celu uatrakcyjnienia
                        sprzedaży samochodu BWM 1 F20.
                        Wykonany przez nas przy użyciu drona
                        DJI MAVIC AIR 2.
                    </p>
                    <p className="RealizationsUav__paragraph">
                        ZAPRASZAMY DO ZAPOZNANIA SIĘ I SKORZYSTANIA
                        Z NASZEJ USŁUGI!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default RealizationsUav;