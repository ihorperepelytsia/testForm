export const forbiddenSymbol = (e) => {
  if (e.target.type === "number") {
    if (e.code === "KeyE") {
      return e.preventDefault();
    }
    if (e.code === "NumpadSubtract") {
      return e.preventDefault();
    }
    if (e.code === "NumpadAdd") {
      return e.preventDefault();
    }
    if (e.code === "NumpadDecimal") {
      return e.preventDefault();
    }
    if (e.code === "Equal") {
      return e.preventDefault();
    }
    if (e.code === "Minus") {
      return e.preventDefault();
    }
    if (e.code === "Period") {
      return e.preventDefault();
    }
    if (e.code === "Slash") {
      return e.preventDefault();
    }
  }
};
