import isequal from "lodash.isequal"

export default function (arg1: any, arg2: any) {
  const res = isequal(arg1, arg2)
  console.log("isequal：", res)
  return res
}
