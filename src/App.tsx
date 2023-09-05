import NavBar from './components/NavBar';
import AppContent from './components/AppContent';

export default function App() {
  const appStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: '100vh',
    fontFamily: 'sans-serif',
    background: 'linear-gradient(to right, #2c3e50, #246997)',
  };

  return (
    <div style={appStyle} >
      < NavBar />
      < AppContent />
    </div >
  );
};