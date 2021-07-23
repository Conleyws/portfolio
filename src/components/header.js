import React from "react"
import "../index.css"

class Header extends React.Component {
    render() {
        return (
            <div className="section header" class="h-24 rounded-full bg-red-800 flex items-center text-3xl font-medium">
                Hello!
                
                {/* Links to LinkedIn, Github, Contact Me (Scrolls to bottom), Back to Top? */}
            </div> 
        )
    }
}

export default Header