import React, {Component,createContext} from 'react'


export const LanguageContext = createContext()

export class LanguageProvider extends Component {
    state={
        language:'french'
    }
//extract the event value from the select menu
   changeLanguage = (e) =>{
        this.setState({...this.state,language:e.target.value})
    }

    render(){
    return(
        // value can be passed as a single piece of state without being in an object or array
        // but pass as a state object so that it can be destructured
        <LanguageContext.Provider value={{...this.state,changeLanguage: this.changeLanguage}}>
            {this.props.children}
        </LanguageContext.Provider>
    )
}
}

// create a high order component which will have a component passed in. languagecontext.consumer will provide it access to the value data from the languagecontext
export const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
    {/* pass value as a prop into component so that it can access the data */}
    {/* pass in all props by using the spread operator */}
    {/* withlanguageContext component returns the passed in component with the newly injected value prop but also it's current props */}
        {value=><Component languageContext={value}{...props}/>}
    </LanguageContext.Consumer>
)