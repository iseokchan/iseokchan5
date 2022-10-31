/**
 * @see : https://stackoverflow.com/a/62438143
 */

type ParseResult<T> =
  | { parsed: T; hasError: false; error?: undefined }
  | { parsed?: undefined; hasError: true; error?: unknown };

export const safeJsonParse =
  <T>(guard: (o: any) => o is T) =>
  (text: string): ParseResult<T> => {
    console.log(text);
    const parsed = JSON.parse(text);
    return guard(parsed) ? { parsed, hasError: false } : { hasError: true };
  };
