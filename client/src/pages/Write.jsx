import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='title' />
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
          <input style={{ display: 'none' }} type='file' name='' id='file' />
          <label className='file' htmlFor='file'>
            Upload Image
          </label>
          <div className='buttons'>
            <button>Save</button>
            <button>Update</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
            <input type='radio' name='cat' value='art' id='art' />
            <lable htmlFor='art'>Art</lable>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='science' id='science' />
            <lable htmlFor='science'>Science</lable>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='technology' id='technology' />
            <lable htmlFor='technology'>technology</lable>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='cinema' id='cinema' />
            <lable htmlFor='cinema'>Cinema</lable>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='design' id='design' />
            <lable htmlFor='design'>Design</lable>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='food' id='food' />
            <lable htmlFor='food'>Food</lable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
