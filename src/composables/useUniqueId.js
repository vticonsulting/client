let UUID = 1

export default function useUniqueId() {
  const getId = () => {
    UUID++
    return UUID
  }

  return {
    getId,
  }
}
