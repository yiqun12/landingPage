import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <Pricing />
        </>
    )
}

export default Home;