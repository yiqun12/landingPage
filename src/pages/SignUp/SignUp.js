import React from 'react';
import { InfoSection } from '../../components';

import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';

function SignUp() {
  return (
    <>
        <InfoSection {...homeObjThree} />
    </>
  );
}

export default SignUp;