import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button, Form } from 'antd'
import { useArticle } from '../hooks/useArticle'
import { BackToList } from '../common/BackButton'
import { ArticleForm } from './form'
import PreviewModal from '../common/PreviewModal'
const FormItem = Form.Item

const { TextArea } = Input
const CreateArticle = ({ history, form }) => {
  const { getFieldDecorator, getFieldsValue } = form
  const { createArticle } = useArticle({ id: null })
  const [visible, setVisible] = useState(false)
  const handleCreate = () => {
    const id = createArticle(getFieldsValue())
    history.push(`/articles/${id}`)
  }
  return (
    <div>
      <PreviewModal visible={visible} article={getFieldsValue()} onCancel={() => setVisible(false)}/>
      <Form>
        <ArticleForm getFieldDecorator={getFieldDecorator} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <BackToList/>
          <div>
            <Button type='dashed' style={{ marginRight: '20px' }} onClick={() => setVisible(true)}>Preview</Button>
            <Button type='primary' onClick={handleCreate}>Submit</Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Form.create()(CreateArticle)
