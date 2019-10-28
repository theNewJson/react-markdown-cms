import { find, findIndex, propEq, reject, update } from 'ramda'
import { useState, useEffect } from 'react'
import uuid from 'uuid'
import useLocalStorage from './useLocalStorage'

export const useArticle = ({ id }) => {
  const [article, setArticle] = useState()

  const localStorageKey = 'articles'
  const [storedValue, setValue] = useLocalStorage(localStorageKey, [])
  useEffect(() => {
    if (storedValue) {
      setArticle(find(propEq('id', id), storedValue))
    }
  }, [storedValue])

  const createArticle = ({ title, content }) => {
    try {
      const id = uuid()
      const newArticle = {
        id,
        title,
        content
      }
      const updatedArticles = [...storedValue, newArticle]
      setValue(updatedArticles)
      return id
    } catch (error) {
      console.log(error)
    }
  }

  const updateArticle = (id, { title, content }) => {
    try {
      const newArticle = {
        id,
        title,
        content
      }
      console.log(newArticle)
      const index = findIndex(propEq('id', id), storedValue)
      console.log(index)
      if (index >= 0) {
        setValue(update(index, newArticle, storedValue))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const removeArticle = (id) => {
    try {
      const updatedArticles = reject(propEq('id', id), storedValue)
      setValue(updatedArticles)
    } catch (error) {
      console.log(error)
    }
  }
  return {
    article, createArticle, removeArticle, updateArticle
  }
}