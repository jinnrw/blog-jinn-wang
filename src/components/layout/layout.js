import React from "react"

export default ({ children }) => {
    const styles = {
        maxWidth: "1080px",
        margin: "0 auto",
        padding: "50px 0",
    }

    return (
        <div id="app" style={styles}>
            {children}
        </div>
    )
}
