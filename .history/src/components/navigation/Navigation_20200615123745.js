import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render(){
        return (
            <div style={styles.container}>
                <div style={styles.navContainer}>
                    <Link style={styles.navLink}>Home</Link>
                    <Link style={styles.navLink}>About</Link>
                    <Link style={styles.navLink}>Contact</Link>
                    <Link style={styles.navLink}>NFPA Codes</Link>
                </div>
            </div>
        )
    }
}
export default Navigation;

const styles = {
    container: {
        display: 'flex',
        padding: '1em',
        userSelect: 'none',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto'
    },
    logo: {
        height: '50px auto'
    },
    navLink: {
        paddingRight: '2em',
        fontSize: '1.2em',
        fontWeight: '500',
        color: 'darkgrey'
    }
}