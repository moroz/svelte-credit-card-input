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

export function defaultValidThru() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = (now.getFullYear() % 100) + 1;
  return String(month).padStart(2, "0") + "/" + year;
}
