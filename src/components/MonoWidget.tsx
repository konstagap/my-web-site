'use client';

import React from 'react';

type Props = {
  src: string;
};

function MonoWidget({ src }: Props) {
  return <iframe src={src} height='380' width='136' title='Mono Bank widget'></iframe>;
}

export default MonoWidget;
