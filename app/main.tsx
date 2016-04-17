import * as React from 'react';
import * as ReactDom from 'react-dom';

import { StateLessHello, HelloComponent } from './Components';

ReactDom.render((
    <div>
        <StateLessHello/>
        <HelloComponent/>
    </div>
    
),document.getElementById('app'));
