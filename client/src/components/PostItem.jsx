import React, { useState, useEffect } from 'react';
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export const PostItem = ({ post, loginUserName }) => {
  // const x = Date.now();
  const [rez, setRez] = useState(Date.now());
  const [iki, setIki] = useState(Date.now() + 10000);
  const [liko, setLiko] = useState(iki - rez);
  // const currentTime = rez;
  // const iki2 = rez + 2000;

  // const xx = rez + 10000;
  // console.log(rez, iki, iki - rez);
  // setRez(xx);

  // console.log('PostItem.jsx post === ', loginUserName, rez, iki2);

  // const getRealTime = () => {
  //   // const currentTime = Date.now();
  //   console.log(new Date(Math.round(currentTime / 1000) * 1000), currentTime);
  //   return (Math.floor(currentTime / 1000) + 1) * 1000 - currentTime;
  // };

  // function start() {
  //   console.log('start');
  //   let reduceTime = 0;
  //   while (true) {
  //     reduceTime = getRealTime();
  //     sleep(reduceTime);

  //     clearTimeout(reduceTime);
  //   }
  // }

  // function sleep(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  // start();

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCount(count + 1);
  //     console.log(count, loginUserName);
  //     clearTimeout(timer);
  //     return timer;
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // });

  // useEffect(() => {
  //   // if (rez === iki) return;
  //   const timer = setTimeout(() => {
  //     setRez(rez + 1000);
  //     // setIki(iki - 1000);
  //     console.log('effect === ', rez);

  //     clearTimeout(timer);
  //     return timer;
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [rez]);

  if (!post) {
    return;
    // return (
    //   <div className='text-xl text-center text-white py-10'>Loading111...</div>
    // );
  }

  const getDate = (n) => {
    // const d = new Date(n);
    // let liko = iki - rez;
    // const x = iki - 1000;
    // setLiko(x);
    console.log('getDate === ', liko);
    return liko;
    // return d.toLocaleString('lt-LT');
  };

  return (
    // <Link to={`/${post._id}`}>
    <Link to={loginUserName ? `/${post._id}` : ''}>
      <div className='flex flex-row basis-1/4 px-5 border-2 pt-3 pb-2 rounded-r-3xl'>
        <div className='w-1/2'>
          <div>
            <Link to={`/${post._id}`}>
              {post.announce === 1 && (
                <span className='bg-lime-400 text-xs text-black opacity-50 p-1 rounded-r-3xl'>
                  Published
                </span>
              )}
              {post.announce === 0 && (
                <span className='bg-orange-400 text-xs text-black opacity-80 p-1 rounded-r-3xl'>
                  No published
                </span>
              )}
            </Link>
          </div>
          <div
            className={
              post.imgUrl
                ? 'flex rouded-sm h-80'
                : 'flex rounded-sm w-fit rounded-r-3xl'
            }
          >
            {/* {post.imgUrl && (
              <img
                src={`http://localhost:5000/${post.imgUrl}`}
                alt='img'
                className='object-cover w-full'
              />
            )} */}
            {post.imgUrl2 && (
              <div className='flex flex-col rouded-sm h-40 w-70 text-cemter rounded-r-3xl'>
                <img
                  src={post.imgUrl2}
                  alt='img'
                  className='w-80 h-40 pr-3 mt-5 rounded-r-3xl'
                />
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col w-1/2 justify-between'>
          <div>
            <div className='flex justify-between items-center pt-2 w-100'>
              <div className='text-xs text-white opacity-50'>
                {post.username}
              </div>
              <div className='text-xs text-white opacity-50 w-100'>
                <div className='bg-white text-black text-center animate-bounce w-18 h-4 rounded-r-3xl'>
                  Entered
                </div>
                <div>
                  <Moment date={post.createdAt} format='YYYY MMM DD hh:mm:ss' />
                </div>
                <div className='bg-white text-black text-center w-18 h-4 rounded-r-3xl'>
                  Offers ends
                </div>
                <div className='w-50  text-white'>
                  {/* <Moment date={getDate(rez)} format='YYYY MMM DD hh:mm:ss' /> */}
                  <p>{getDate(rez)}</p>
                </div>
              </div>
            </div>
            <div className='text-white text-xl'>{post.title}</div>
            {/* <p className='text-white opacity-60 text-xs pt-4 line-clamp-4'>
              {post.text}
            </p> */}
            <div className='text-xs text-white opacity-50'>
              <div className='text-black w-18 rounded-r-3xl text-xl h-20 bg-white'>
                <span className='p-2 text-black opacity-80 text-xs line-clamp-4'>
                  {post.text}
                </span>
              </div>
            </div>
          </div>
          <div className='flex gap-3 items-center mt-2 justify-between'>
            <div className='flex justify-between gap-3'>
              <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                <AiFillEye /> <span>{post.views} VIEWS</span>
              </button>
              <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                <AiOutlineMessage />{' '}
                <span>{post.comments?.length || 0} LIKES</span>
              </button>
            </div>
            <div>
              <p className='text-xs text-black-600 opacity-90 bg-yellow-300 p-1 rounded-r-3xl'>
                Price: {post.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
