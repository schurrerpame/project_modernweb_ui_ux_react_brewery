import React from 'react';
import { SubHeading, BeerItem } from '../../components';
import { images, data } from '../../constants'
import './TypeBeer.css';

const TypeBeer = () => {
    return (
        <div className="app__typebeer flex__center section__padding" id="beers">
            <div className="app__typebeer-title">
                <SubHeading title="Discover our range of exquisite beers" />
                <h1 className="headtext__cormorant">Crafted to Perfection</h1>
            </div>
            <div className="app__typebeer-content">
                <div className="app__typebeer-imgBeer">
                    <img src={images.ipa} alt="beer" />
                </div>

                <div className="app__typebeer-type">
                    <div className="app__typebeer-type-ipa">
                        <SubHeading title="IPA" />
                        {data.ipa.map((ip, index) => (
                            <BeerItem key={ip.title + index} title={ip.title} ibu={ip.ibu} tags={ip.tags} />
                        ))}
                    </div>
                    <div className="app__typebeer-type-apa">
                        <SubHeading title="APA" />

                        {data.apa.map((ap, index) => (
                            <BeerItem key={ap.title + index} title={ap.title} ibu={ap.ibu} tags={ap.tags} />
                        ))}
                    </div>
                </div>


            </div>
        </div>


    )
}

export default TypeBeer