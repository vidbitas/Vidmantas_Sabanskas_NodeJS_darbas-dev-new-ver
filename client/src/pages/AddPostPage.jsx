import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../redux/features/post/postSlice';

export const AddPostPage = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [imgUrl2, setImgUrl2] = useState('');
  const [price, setPrice] = useState(0);
  const [announce, setAnnounce] = useState(0);
  const [announceDate, setAnnounceDate] = useState(0);
  const [bid, setBid] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    try {
      const data = new FormData();
      data.append('title', title);
      data.append('text', text);
      data.append('image', image);
      data.append('imgUrl2', imgUrl2);
      data.append('price', price);
      data.append('announce', announce);
      data.append('announceDate', announceDate);
      data.append('bid', bid);

      dispatch(createPost(data));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const clearFormHandler = () => {
    setText('');
    setTitle('');
  };

  return (
    <form
      className='w-1/5 mx-auto py-10 border-2 pl-5 pr-5 rounded-r-3xl'
      onSubmit={(e) => e.preventDefault()}
    >
      {/* <label className='text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer'>
        Attach Image:
        <input
          type='file'
          className='hidden'
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      <div className='flex object-cover py-2'>
        {image && <img src={URL.createObjectURL(image)} alt={image.name} />}
      </div> */}

      <div className='text-center'>
        <label className='text-xl text-white opacity-70 text-center'>
          Add product
        </label>
      </div>
      <label className='text-xs text-white opacity-70'>
        URL:
        <input
          type='text'
          value={imgUrl2}
          onChange={(e) => setImgUrl2(e.target.value)}
          placeholder='URL link'
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700 cursor-pointer'
        />
      </label>
      <div className='flex object-cover py-2'>
        {imgUrl2 && <img src={imgUrl2} alt='img' />}
      </div>

      <label className='text-xs text-white opacity-70'>
        Title:
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title text'
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700 cursor-pointer'
        />
      </label>

      <label className='text-xs text-white opacity-70'>
        Price:
        <input
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder='Price'
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700 cursor-pointer'
        />
      </label>

      <label className='text-xs text-white opacity-70'>
        Offer time:
        <input
          type='number'
          value={announceDate}
          onChange={(e) => setAnnounceDate(e.target.value)}
          placeholder='Announce time'
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700 cursor-pointer'
        />
      </label>

      <div className='mt-2 flex flex-row'>
        <div className=' items-center'>
          <label className='grow w-14 text-xs text-white opacity-70'>
            Offer start:
          </label>
        </div>
        <div>
          <input
            type='checkbox'
            value={announce}
            onChange={(e) => setAnnounce(e.target.checked ? 1 : 0)}
            placeholder='Announce'
            className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700 cursor-pointer'
          />
        </div>
      </div>

      <label className='text-xs text-white opacity-7'>
        Description:
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder='Description text'
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none resize-none h-15 placeholder:text-gray-700 cursor-pointer'
        />
      </label>

      <div className='flex gap-8 items-center justify-center mt-4'>
        <button
          onClick={submitHandler}
          className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4'
        >
          Add
        </button>

        <button
          onClick={clearFormHandler}
          className='flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4'
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
