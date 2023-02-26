/* eslint-disable react/no-unescaped-entities */
import React from 'react';

//TODO: make request to some service to get a list of quotes, create carousel

const QuoteOfTheDay = () => {
  return (
    <div className='prose prose-base hidden md:block  '>
      <blockquote cite="That's Life Song by Frank Sinatra">
        That's life! <br /> That's what all the people say <br /> You're riding high in April, shot down in May <br />{' '}
        But I know I'm gonna change that tune <br /> When I'm back on top, back on top in June... <br />{' '}
        <span className='text-right block'>Frank Sinatra</span>
      </blockquote>
    </div>
  );
};

export default QuoteOfTheDay;
