import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {useEffect} from 'react';

export default function Home() {
  useEffect(() => {
    window.location.replace('/docs/intro');
  }, []);

  if (ExecutionEnvironment.canUseDOM) {
    return null;
  }

  // SSR fallback — meta refresh for non-JS environments
  return (
    <head>
      <meta httpEquiv="refresh" content="0; url=/docs/intro" />
    </head>
  );
}
