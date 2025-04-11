import { Suspense } from 'react';
import Dashboard from '@/components/dashboard/Dashboard';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    </main>
  );
}
