type Key = string | number | symbol;

export default function groupBy<T extends Record<Key, any>>(
  array: T[],
  key: keyof T
): Record<Key, T[]> {
  return array.reduce((result, currentItem) => {
    const groupKey = currentItem[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(currentItem);
    return result;
  }, {} as Record<Key, T[]>);
}
