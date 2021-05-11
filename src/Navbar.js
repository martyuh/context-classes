import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import {ThemeContext} from './contexts/ThemeContext'
// provides access to higher order component
import {LanguageContext, withLanguageContext} from './contexts/LanguageContext'

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷"
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
}; 

class Navbar extends Component {

  // instructs the component to determine if it is nested within the component tree to see if it is nested within a provider a provider
  static contextType = ThemeContext
  render() {
  // access the data by accessing hardcorded this.context
  //destructure this.context that is passed in as a value prop from the themecontext
  const {isDarkMode, toggleTheme} = this.context

    // classes are what are in the style object that is created and then passed in with withStyles into Navbar, turning it into a higher order componenet and providing it with the styles props classes.root access the root class within the style object
    const { classes } = this.props;
    // destructure language from prop from higher order function in languagecontext
    const{language} = this.props.languageContext
    // destructure content above to select the language that is passed in from the context, search and flag will be updated as a result of that
    const{search,flag} = content[language]
    return (
      // <LanguageContext.Consumer>
      /* value contains the value data from language context. wrapping everything within the consumer allows access to the value. */
        // {value=>(
        <div className={classes.root}>
      {/* to change the background, of the navbar ternary isDarkmode */}
        <AppBar position='static' color={isDarkMode?'@grey':'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title
            </Typography>
            {/* toggle button that changes when clicked */}
            <Switch onChange={toggleTheme}/>
            <div className={classes.grow} />
            {/* style a search bar */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  // input rootRoot will go to the root class of inputbase
                  root: classes.inputRoot,
                  // inputinput will go to the actual input
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      // )}
      // </LanguageContext.Consumer>
    );
  }
} 

// withstyles function returns navbar with new props
//withlanguagecontext function returns navbar with new value languagecontext prop
// higher order context component withLanguageContext provides access to value prop languagecontext by passing Navbar in as an argument
// must wrap the entire export
export default withLanguageContext(withStyles(styles)(Navbar));
