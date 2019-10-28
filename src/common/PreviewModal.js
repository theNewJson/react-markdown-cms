import React from 'react'
import { Modal } from 'antd'
import ReactMarkdown from 'react-markdown/with-html'

export default (props) => {
  const { article, visible, onCancel } = props
  const { title, content } = article

  return (
  <Modal
    title={article.title}
    visible={visible}
    onOk={onCancel}
    onCancel={onCancel}
    cancelButtonProps={{ style: { display: 'none' } }}
  >
    <ReactMarkdown source={article.content} escapeHtml={false}/>
  </Modal>
  )
}