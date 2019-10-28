import React from 'react'
import { Link } from 'react-router-dom'
import { map, addIndex } from 'ramda'
import { List, Button, Empty } from 'antd'
import Card from '../common/Card'
import { useArticles } from '../hooks/useArticles'

const ListItem = List.Item

export default () => {
  const { articles } = useArticles()
  if (!articles) {
    return null
  }
  return (
  <div>
    <Link to='/articles/create'><Button type='primary' style={{ marginBottom: '20px' }}>Create articles</Button></Link>
    {articles.length === 0 ? <Empty /> : <List>
      {addIndex(map)((article, index) => <Card key={article.id} extra={<div>#{index + 1}</div>} data={article}/>, articles)}
    </List>}
  </div>
  )
}