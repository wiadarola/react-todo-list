import NavBar from './components/NavBar';
import AppContent from './components/AppContent';

export default function App() {
  const appStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: '100vh',
    backgroundColor: '#032c62',
    fontFamily: 'sans-serif',
  };

  return (
    <div style={appStyle} >
      < NavBar />
      < AppContent />
    </div >
  );
};