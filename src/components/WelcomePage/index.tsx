import React from 'react';

export default function WelcomePage() {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%', // Use full height of the container it's placed in
        padding: '20px',
        textAlign: 'center',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '2em',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#2c3e50', // Deep blue to contrast against the white background
    };

    const textStyle: React.CSSProperties = {
        fontSize: '25px',
        color: '#246997', // Slightly lighter blue for regular text
    };

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>Welcome to myLists!</div>
            <div style={textStyle}>
                This to-do list application is designed to help you keep track of tasks,
                organize your day, and enhance productivity. Whether it's groceries, work
                tasks, or personal goals, jot them down and never forget a task again.
                <br /><br />
                This application was built using React and TypeScript. It is fully
                responsive and can be used on any device. All data is stored locally
                in your browser, so you can access your lists from anywhere. No account
                required!
                <br /><br />
                Click on the sidebar to start creating your lists. Happy organizing!
            </div>
        </div>
    );
}
