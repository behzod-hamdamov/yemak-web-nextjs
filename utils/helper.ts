export async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}