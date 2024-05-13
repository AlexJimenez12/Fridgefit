//Main Home Page
import React from 'react';
import NavBar from './navBar.js';

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">Welcome to My Next.js App!</h1>
        <p className="mt-4 text-xl">This is a simple home page with a NavBar component at the top.</p>
      </main>
    </div>
  );
}
