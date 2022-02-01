export const allStrings = (obj: object): boolean =>
  Object.values(obj).every((item) => item && typeof item === "string");

export const isEmail = (email: string): boolean => {
  if (email.length === 0) {
    return false;
  }
  if (!email.includes("@")) {
    return false;
  } else {
    return true;
  }
};

export const isPassword = (password: string): boolean => {
  if (password.length < 8) {
    return false;
  } else {
    return true;
  }
};
