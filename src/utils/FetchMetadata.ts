export async function fetchMetadata() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/meta?populate=*`;
  const res = await fetch(url).then((res) => res.json());
  return res;
}

export async function fetchData(endpoint: string) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`;
  const res = await fetch(url).then((res) => res.json());
  return res;
}
