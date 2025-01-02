type HasCategory = {
  category: string;
  [key: string]: any;
};

export default <T extends HasCategory>(
  categories: Record<string, T[]>
): Map<string, T[]> => {
  // Helper function to check if a category is a National subcategory
  const isNationalSubcategory = (category: string): boolean => {
    return category.startsWith("National /") && category !== "National";
  };

  // Helper function to get priority score
  const getPriority = (category: string): number => {
    if (category === "National") return 1;
    if (category === "National / NSW") return 2;
    if (isNationalSubcategory(category)) return 3;
    if (category.startsWith("Politics")) return 4;
    if (category.startsWith("Culture")) return 5;
    if (category.startsWith("Sport")) return 6;
    return 7;
    return 6;
  };

  // Sort the keys based on priority
  const sortedKeys = Object.keys(categories).sort((a, b) => {
    const aPriority = getPriority(a);
    const bPriority = getPriority(b);

    if (aPriority === bPriority) {
      // If priorities are equal, sort alphabetically
      return a.localeCompare(b);
    }
    return aPriority - bPriority;
  });

  // Create and return a new Map with sorted categories
  return new Map(sortedKeys.map((key) => [key, categories[key]]));
};
