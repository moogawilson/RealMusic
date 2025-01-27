import he from "he";

export const processText = (field: string) => {
  const decodedField = he.decode(field);
  return decodedField.length > 30
    ? decodedField.slice(0, 27) + "..."
    : decodedField;
};
