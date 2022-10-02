import React, { useContext, useEffect, useState } from 'react';
import edit from '../img/edit.png';
import del from '../img/del.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from '../axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Single = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [post, setPost] = useState([]);

  const location = useLocation();
  console.log(location);
  const postId = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/posts/${postId}`);
      navigate('/');
    } catch (error) {}
  };

  return (
    <div className='single'>
      <div className='content'>
        <img src={post.img} alt='image' />
        <div className='user'>
          {post.userImg && <img src={post.userImg} alt='img' />}
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className='edit'>
              <Link to={`/write?edit=2`} state={post}>
                <img src={edit} alt='edit' />
              </Link>
              <img onClick={handleDelete} src={del} alt='edit' />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
