export const beforeMount = (el, binding) => {
  const { arg, value } = binding;
  el.classList.add(!value ? `${arg}` : `${arg}--${value}`);
};

// const baseClass = `${this.blockClassName}__${childrenName}`;

// if (!Array.isArray(modifiers)) {
//   return `${baseClass} ${baseClass}--${modifiers}`;
// }

// return modifiers.length === 0
//   ? `${baseClass}`
//   : `${baseClass} ${modifiers.map((modifier) => `${baseClass}--${modifier}`).join(' ')}`;
// },
