export async function jsonFetcher(url: string) {
  return await fetch(url).then((r) => r.json());
}
