import React from 'react';
import edit from '../img/edit.png';
import del from '../img/del.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
          alt='image'
        />
        <div className='user'>
          <img
            src='https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
            alt='img'
          />
          <div className='info'>
            <span>Dawa</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={edit} alt='edit' />
            </Link>
            <img src={del} alt='edit' />
          </div>
        </div>
        <h1>Page Headings and Subheadings</h1>
        <p>
          Write headings so readers know exactly what the page is about without
          reading it word for word. Headings and subheadings are very important
          for easier scanning. As Web readers scan down a page, they read the
          beginnings of headings more than the ends. Use concise, descriptive
          keywords about the topic at the beginning of subheadings. In the
          heading or subheading, use key ideas for the text that follows.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
