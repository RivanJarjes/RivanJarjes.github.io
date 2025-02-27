import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ArcSimulatorPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the simulator in the app directory
    router.replace('/arc-simulator');
  }, [router]);
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#1A1A1A',
      color: 'white'
    }}>
      <p>Loading ARC Assembly Simulator...</p>
    </div>
  );
} 
