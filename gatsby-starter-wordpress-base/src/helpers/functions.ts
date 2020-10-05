export const removeClassesFromArray = (
  remove: string[],
  original: string[]
) => {
  const newArr = [...original]

  remove.forEach((cls) => {
    const index = newArr.indexOf(cls)
    ;-1 < index && newArr.splice(index, 1)
  })

  return newArr
}
