import Histogram from '@/components/Histogram/Histogram';
import RootLayout from './layout';

import './globals.css';

export default function Home() {
  return (
    <RootLayout>
      <div className="container h-full flex flex-col justify-center relative">
        <Histogram />
      </div>
    </RootLayout>
  );
}
