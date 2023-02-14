const func = (el, binding) => {
  const { arg, value } = binding;
  const addClass = (className) => el.classList.add(className);
  if (!value) {
    addClass(arg);
  } else {
    addClass(arg);
    addClass(`${arg}--${value}`);
  }
};

export const bem = {
  updated: (el, binding) => {
    el.className = "";
    func(el, binding);
  },
  beforeMount: (el, binding) => {
    func(el, binding);
  },
};
