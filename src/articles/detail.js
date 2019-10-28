import React, { useState } from 'react'
import { Icon, Form, Button } from 'antd'
import { useArticle } from '../hooks/useArticle'
import Card from '../common/Card'
import { BackToList } from '../common/BackButton'
import { ArticleForm } from './form'
import PreviewModal from '../common/PreviewModal'

export const Article =  (props) => {
  const { match, form } = props
  const { id } = match && match.params
  const { getFieldDecorator, getFieldsValue } = form
  const [onEdit, setOnEdit] = useState(false)
  const [visible, setVisible] = useState(false)
  const { article, updateArticle } = useArticle({ id })
  
  const handleUpdate = () => {
    updateArticle(id, getFieldsValue())
    setOnEdit(false)
  }

  if (!article) {
    return null
  }
  return onEdit ? (
    <div>
      <PreviewModal visible={visible} article={getFieldsValue()} onCancel={() => setVisible(false)}/>
      <ArticleForm initialArticle={article} getFieldDecorator={getFieldDecorator} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button type='default' onClick={() => setOnEdit(false)}>Cancel</Button>
        <div>
          <Button type='dashed' style={{ marginRight: '20px' }} onClick={() => setVisible(true)}>Preview</Button>
          <Button type='primary' onClick={handleUpdate}>Update</Button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Card data={article} extra={<Icon type="edit" onClick={() => setOnEdit(true)}/>} />
      <div style={{ marginTop: '20px' }}>
        <BackToList/>
      </div>
    </div>
  )
}

export default Form.create()(Article)
