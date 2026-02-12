export function fixName(name) {
  const trimmedName = name.toLowerCase().trim();
  const fixedName = trimmedName[0].toUpperCase() + trimmedName.slice(1);
  return fixedName;
}

export function maskEmail(email) {
  const index = email.indexOf("@");
  const partToMask = email.substring(0, index);
  const maskedText = email[0] + "*".repeat(partToMask.length - 1);

  const result = maskedText + email.substring(index);
  return result;
}
