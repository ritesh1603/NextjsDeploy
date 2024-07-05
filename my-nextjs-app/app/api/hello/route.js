// app/api/hello/route.js
export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Hello from Next.js!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  