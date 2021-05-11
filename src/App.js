import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from './PageContent'
import {ThemeProvider} from './contexts/ThemeContext'
import {LanguageProvider} from './contexts/LanguageContext'

class App extends Component {
  render() {
    return (
      // wrapping in themeprovider to pass as children to themecontext 
      // navbar and form will be children of pagecontent
      <ThemeProvider>
     <LanguageProvider>
      <PageContent>
      
        <Navbar />
        <Form />
        
      </PageContent>
      </LanguageProvider>
      </ThemeProvider>
      
    );
  }
}

export default App;