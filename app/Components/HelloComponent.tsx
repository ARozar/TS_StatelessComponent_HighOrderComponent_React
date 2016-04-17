import * as React from 'react';
import { IHelloProps } from './Interfaces';

class _HelloComponent extends React.Component<IHelloProps, void>{
    
    constructor(props){
        super(props);
    }
    
    render(){
        
        const { name, handleClick }  = this.props;
        
        return (
                <div onClick={ handleClick }> Hello  {name }</div>
            );
    }
}



 function HighOrderHello<Props, State>(
        Comp: React.ComponentClass<Props & State>,
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

export const HelloComponent = HighOrderHello(_HelloComponent,()=>{ return{name:'World', handleClick:() => console.log('I was clicked!')}; })