export const championNameTransformer = (name: string): string => {
  let newName = name
    .replaceAll(" ", "")
    .replaceAll("'", "")
    .replaceAll(".", "");
  if (name === "Wukong") {
    newName = "MonkeyKing";
  } else if (name === "Nunu&Willump") {
    newName = "Nunu";
  } else if (name === "RenataGlasc") {
    newName = "Renata";
  }
  return newName;
};
