import React, {Component, createContext} from 'react'

// must have access to this context to consume it
export const ThemeContext = createContext()

//component returns themecontext.provider
// provides data and methods that are in the provider to components that are wrapped in the provider
export class ThemeProvider extends Component {
    state={isDarkMode:true}

    // toggles darkmode to the opposite of what it is currently at
    toggleTheme =()=>{
        this.setState({isDarkMode:!this.state.isDarkMode})
    }

    render(){ 

        // everytime you run a context you get a provider
        // components passed into themeprovider in app componets will have access to the state and methods that the provider provides
        // value will be passed to the children props
        //value will contain state and methods that are assigned to it
        // value should be passed as an object with desired state or methods
        return (
        <ThemeContext.Provider value={{...this.state,toggleTheme:this.toggleTheme}}>
        {this.props.children}
        </ThemeContext.Provider>
        ) 

    }
}