import React, {useState} from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const {chatId, creds} = props

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = value.trim();

    if(text.length > 0){
      sendMessage(creds, chatId, {text});
      setValue('');
    }

  }
  const handleChangeText = (e) => {
    setValue(e.target.value)
    isTyping(props, chatId)
  }

  const handleUploadImage = (e) => {

    sendMessage(creds, chatId, {files: e.target.files, text: ''})
  }
  return (
    <form onSubmit={handleSubmit} className='message-form'>
      <input type="text"  value={value} onChange={handleChangeText} onSubmit={handleSubmit} className='message-input' placeholder='send a message...'/>
      <label htmlFor="upload-button"><span className='image-button'>{<PictureOutlined className='picture-icon'/>}</span></label>
      <input type="file" id='upload-button' multiple={false} style={{display: 'none'}} onChange={handleUploadImage}/>
      <button type="submit" className='send-button'>{<SendOutlined className='send-icon'/>}</button>
    </form>
  )
}

export default MessageForm