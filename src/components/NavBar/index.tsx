import './index.css';

export default function NavBar() {
    const navStyle: React.CSSProperties = {
        width: '100%',
        height: '50px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        fontSize: '25px',
    };

    const spanStyle: React.CSSProperties = {
        color: 'white',
        fontWeight: '600',
        marginLeft: '20px',
        cursor: 'default',
    };

    const lowerH1Style: React.CSSProperties = {
        fontFamily: 'serif',
        fontWeight: 'normal',
        fontSize: '40px',
    };

    const upperH1Style: React.CSSProperties = {
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: '40px',
    };

    return (
        <nav style={navStyle}>
            <span style={spanStyle}><span style={lowerH1Style}>my</span><span style={upperH1Style}>Lists</span>&nbsp;-&nbsp;<span>A React & TypeScript ToDo List</span></span>
            <div id="nav-icons">
                <a href="https://wiadarola.github.io" target="_blank" rel="noreferrer" className="nav-icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/home.png" alt="Website" />
                </a>
                <a href="https://github.com/wiadarola" target="_blank" rel="noreferrer" className="nav-icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/wiadarola/" target="_blank" rel="noreferrer" className="nav-icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
                </a>
            </div>
        </nav>
    );
}