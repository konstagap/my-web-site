import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Paper({ children, className }: Props) {
  return (
    <div
      className={`prose-sm bg-white dark:bg-base-300 p-5 md:p-10 rounded-2xl shadow-xl relative ${
        className ? className : ''
      }`}
    >
      <div>{children}</div>
    </div>
  );
}

export default Paper;
