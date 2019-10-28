import { map, range } from 'ramda'
import { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const fakeArticles = map(index => ({
  id: index,
  title: `title${index}`,
  content: `content${index}`
}), range(1, 6))
export const useArticles = () => {
  const [articles, setArticles] = useState()
  const localStorageKey = 'articles'
  const [storedValue, setValue] = useLocalStorage(localStorageKey, [])
  useEffect(() => {
    if (storedValue) {
      setArticles(storedValue)
    }
  }, [storedValue])

  return {
    articles
  }
}