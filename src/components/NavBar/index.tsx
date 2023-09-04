export default function NavBar() {
    const navStyle: React.CSSProperties = {
        width: '100%',
        height: '50px',
        backgroundColor: 'navy',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const spanStyle: React.CSSProperties = {
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
    };

    return (
        <nav style={navStyle}>
            <span style={spanStyle}>A React-TypeScript ToDo List</span>
        </nav>
    );
}