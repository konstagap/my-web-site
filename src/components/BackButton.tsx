'use client';
import router from 'next/router';
import React from 'react';

type Props = {};

function BackButton({}: Props) {
  return <button onClick={() => router.back()}> go back </button>;
}

export default BackButton;
