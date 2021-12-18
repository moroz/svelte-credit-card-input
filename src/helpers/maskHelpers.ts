export function maskValueToPlaceholder(value: string, placeholder: string) {
  let result = "";
  const placeholderChars = placeholder.split("");
  const valueChars = value.split("");
  while (valueChars.length) {
    const nextChar = placeholderChars.shift();
    if (!nextChar) return result;
    if (nextChar === " ") result += " ";
    else {
      result += valueChars.shift();
    }
  }
  return result;
}
