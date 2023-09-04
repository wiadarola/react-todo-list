import NavBar from './components/NavBar';
import AppContent from './components/AppContent';

export default function App() {
  const appStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: '100vh',
    backgroundColor: 'lightgray',
    fontFamily: 'sans-serif',
  };

  return (
    <div style={appStyle} >
      < NavBar />
      < AppContent />
    </div >
  );
};