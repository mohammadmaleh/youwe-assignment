import * as React from 'react';

import { ActivityIndicator } from '..';
import cancelIcon from '../../assets/images/cancel.svg';
import { DirectLinksType } from '../../types/dashboard.types';
import Widget from '../HOC/Widget/Widget';

interface DirectLinksProps {
    directLinks: DirectLinksType[] | null;
}
const DirectLinks: React.FunctionComponent<DirectLinksProps> = (props) => {
    const {directLinks} = props;
    if (!directLinks || directLinks === null) return <ActivityIndicator size="mid" />;

    const renderDirectLinks = () => {
        if (!DirectLinks) return false;
        return directLinks.map((DirectLinksItem: DirectLinksType) => (
            <li className="DirectLinks-item widget-item" key={DirectLinksItem.id}>
                <img src={DirectLinksItem.image} alt="" />
                <div className="DirectLinks-description">
                    <p className="title">{DirectLinksItem.title}</p>
                </div>
            </li>
        ));
    };
    return (
        <Widget title="Nieuws" icon={cancelIcon} footerText={'sdsdads'}>
            <div className="DirectLinks">
                <ul className="DirectLinks-holder">{renderDirectLinks()}</ul>
            </div>
        </Widget>
    );
};

export default DirectLinks;
