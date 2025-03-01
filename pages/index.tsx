import dynamic from 'next/dynamic';

const SEOToolFinder = dynamic(() => import('../components/SEOToolFinder'), { 
  ssr: false,
  loading
