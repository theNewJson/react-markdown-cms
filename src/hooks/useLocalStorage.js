import { reject, propEq } from 'ramda'
import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  const removeValue = () => {
    try {
      setStoredValue(null)
      window.localStorage.removeItem(key)
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue, removeValue]
}

export default useLocalStorage
