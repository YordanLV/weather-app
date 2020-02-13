export default <F extends ((...args: any) => any)>(func: F, waitFor: number) => {
  let timeout: number = 0

  const debounced = (...args: any) => {
    clearTimeout(timeout)
    setTimeout(() => func(...args))
  }

  return debounced as (...args: Parameters<F>) => ReturnType<F>
}