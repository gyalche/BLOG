import axios from '../axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
const Write = () => {
  const state = useLocation().state;
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [title, setTitle] = useState(state?.title || '');
  const [img, setImg] = useState(null);
  const [cat, setCat] = useState(state?.cat || '');

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', img);
      const res = await axios.post('/upload', formData);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: img ? imgUrl : '',
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: img ? imgUrl : '',
            data: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
          });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='add'>
      <div className='content'>
        <input
          type='text'
          placeholder='title'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <div className='editorContainer'>
          <ReactQuill className='editor' value={value} onChange={setValue} />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input
            style={{ display: 'none' }}
            type='file'
            name=''
            id='file'
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label className='file' htmlFor='file'>
            Upload Image
          </label>
          <div className='buttons'>
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='art'
              id='art'
              onChange={(e) => setCat(e.target.value)}
              checked={cat === 'art'}
            />
            <lable htmlFor='art'>Art</lable>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='science'
              id='science'
              onChange={(e) => setCat(e.target.value)}
              checked={cat === 'science'}
            />
            <lable htmlFor='science'>Science</lable>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='technology'
              id='technology'
              onChange={(e) => setCat(e.target.value)}
              checked={cat === 'technology'}
            />
            <lable htmlFor='technology'>technology</lable>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='cinema'
              id='cinema'
              onChange={(e) => setCat(e.target.value)}
              checked={cat === 'cinema'}
            />
            <lable htmlFor='cinema'>Cinema</lable>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='design'
              id='design'
              onChange={(e) => setCat(e.target.value)}
              checked={cat === 'design'}
            />
            <lable htmlFor='design'>Design</lable>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='food'
              id='food'
              onChange={(e) => setCat(e.target.value)}
              checked={cat === 'food'}
            />
            <lable htmlFor='food'>Food</lable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
