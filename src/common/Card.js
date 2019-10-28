import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown/with-html'
import { Card, Button } from 'antd'

export default (props) => {
  const { data, extra } = props
  const LinkedTitle = <Link to={`/articles/${data.id}`}>{data.title}</Link>

  if (!data) {
    return null
  }
  
  return <Card title={LinkedTitle} extra={extra}>
    {/* <h3>{title}</h3> */}
    <ReactMarkdown source={data.content} escapeHtml={false}/>
    {/* <Button type='primary'>123</Button> */}
   </Card>
}