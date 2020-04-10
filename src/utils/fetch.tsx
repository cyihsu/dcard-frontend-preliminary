export const jsonFetcher = (url: string) => fetch(url).then((r) => r.json());
