/**
 * Array to object 一维数据
 * @param arr Array
 * @returns object
 */
export default function array2object(arr: any[]): object {
  if (!arr || !Array.isArray(arr)) {
    console.warn("must be a Array type!")
    return {}
  }
  return arr.reduce((prev, cur) => ({ ...prev, ...cur }), {})
}
