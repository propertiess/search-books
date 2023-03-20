export const getSelectData = (obj: Record<string, string>) => {
  return Object.values(obj).map(val => ({
    value: val,
    label: val
  }));
};
