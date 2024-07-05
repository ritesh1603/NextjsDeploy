// app/page.js
"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>{message}</p>
    </div>
  );
}
