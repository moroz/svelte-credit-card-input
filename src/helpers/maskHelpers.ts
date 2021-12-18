export function maskValueToPlaceholder(value: string, placeholder: string) {
  if (!value) return value;

  let result = "";
  const placeholderChars = placeholder.split("");
  const valueChars = value.split("");
  ("");
  while (valueChars.length) {
    const nextChar = placeholderChars.shift();
    if (!nextChar) return result;
    if (["/", " "].includes(nextChar)) result += nextChar;
    else {
      result += valueChars.shift();
    }
  }
  return result;
}
