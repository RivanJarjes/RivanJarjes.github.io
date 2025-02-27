export default function RedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/arc-simulator" />
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#1A1A1A',
        color: 'white'
      }}>
        <p>Redirecting to ARC Assembly Simulator...</p>
      </div>
    </>
  );
} 
