function validEmail(str: string): boolean {
  if (!str) return false;

  // Regular expression for a basic valid email format
  const emailRegex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

  return emailRegex.test(str);
}
