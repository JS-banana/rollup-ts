import clonedeep from "lodash.clonedeep"

export default function (arg: any) {
  const res = clonedeep(arg)
  console.log("clonedeep", res)
  return res
}
