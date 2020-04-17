export function contentPreprocess(inputData: string): string[] {
  inputData = inputData.replace(/^http:\/\//i, "https://");
  inputData = inputData.replace(/(http|https):/gi, (res) => "\n\n" + res);
  const tokens = inputData.split(/\n(.*?)\n/).filter((s) => s.length);
  return tokens;
}
