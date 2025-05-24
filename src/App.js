import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-pink-900 font-sans">
      <main className="flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">🌸 Welcome Cutie Patootie 🌸</h1>
          <p className="mb-4 text-lg">Your magical treasure hunt begins here... 💖</p>
          <audio autoPlay loop className="hidden">
            <source src="nadaniyan.mp3" type="audio/mpeg" />
          </audio>
          <a href="/clue1" className="mt-4 inline-block bg-pink-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-pink-600 transition">Begin the Hunt</a>
        </div>
      </main>
    </div>
  );
}