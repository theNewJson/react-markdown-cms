import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item
const { TextArea } = Input

export const ArticleForm = (props) => {
  const { initialArticle = {}, getFieldDecorator } = props

  return (
    <>
    <FormItem>
      {getFieldDecorator('title', {
        initialValue: initialArticle.title
      })(<Input/>)}
    </FormItem>
    <FormItem>
      {getFieldDecorator('content', {
        initialValue: initialArticle.content
      })(<TextArea rows={30} />)}
    </FormItem>
    </>
  )
}