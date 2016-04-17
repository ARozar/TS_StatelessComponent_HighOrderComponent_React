import * as React from 'react';
import { IHelloProps } from './Interfaces';


const _StateLessHello =  ( { name, handleClick }: IHelloProps) => <div onClick={handleClick}>Hello {name}</div>;
 
function HighOrderHello<Props, State>(
        Comp: React.StatelessComponent<Props & State>,
        getState: () => State
    ) {
        return class HOCBase extends React.Component<Props, State> {
            
            constructor(props){
                super(props);
                
                this.state = getState();
            }
            
            render() {
                return <Comp {...this.props} {...this.state}/>;
            }
        }
}



export const StateLessHello = HighOrderHello(_StateLessHello, ()=> { return { name : 'World', handleClick: () => console.log('I was clicked!')}; })