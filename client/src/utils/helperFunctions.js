export const getSelectOptions = options =>
  Object.values(options).sort((a, b) => a.order - b.order);
