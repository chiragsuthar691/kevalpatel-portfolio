// export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
  const res = await fetch("https://geolocation-db.com/json/", {
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
