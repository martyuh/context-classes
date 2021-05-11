import React, { Component } from 'react'
import {ThemeContext} from './contexts/ThemeContext'

export class PageContent extends Component {

    static contextType = ThemeContext

    render() {
        // access the data by accessing hardcorded this.context
        //destructure this.context that is passed in as a value prop from the themecontext
        const {isDarkMode} = this.context
        const styles = {
            // objects can have ternaries
            backgroundColor: isDarkMode?'black':'white',
            height: '100vh',
            width: '100vw'
        }

        return (
            <div style={styles}>
            {/* allows you to style page content while having the child components residing inside it such as below */}
                {this.props.children}
            </div>
        )
    }
}

export default PageContent

{/* <PageContent>
<Navbar/>
</PageContent> */}