import React from 'react';
import dynamic from 'next/dynamic';

// Import dynamiczny zapobiega błędom podczas renderowania po stronie serwera
const SEOToolFinder = dynamic(() => import('../components/SEOToolFinder'), {
  ssr: false,
  loading: () => <p>Ładowanie narzędzia...</p>
});

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <SEOToolFinder />
    </div>
  );
}
