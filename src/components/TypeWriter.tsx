'use client';

import { useState, useEffect } from 'react';

interface Word {
  text: string;
  language: string;
}

const DEFAULT_WORDS: Word[] = [
  { text: 'Hello and Welcome', language: 'English' },
  { text: 'Привіт і ласкаво просимо', language: 'Ukrainian' },
  { text: 'Ahoj a vitajte', language: 'Slovakian' },
  { text: 'Hola y Bienvenido', language: 'Spanish' },
  { text: 'Bonjour et Bienvenue', language: 'French' },
  { text: 'Hallo und Willkommen', language: 'German' },
  { text: '你好和欢迎', language: 'Mandarin Chinese' },
  { text: 'こんにちは、ようこそ', language: 'Japanese' },
  { text: 'नमस्ते और स्वागत है', language: 'Hindi' },
];

interface TypeWriterProps {
  words?: Word[];
  delay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
}

const TypeWriter = ({
  words = DEFAULT_WORDS,
  delay = 2000,
  typingSpeed = 100,
  deletingSpeed = 50,
}: TypeWriterProps) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentWord = words[wordIndex].text;

        if (isDeleting) {
          setText(currentWord.substring(0, text.length - 1));
        } else {
          setText(currentWord.substring(0, text.length + 1));
        }

        if (!isDeleting && text === currentWord) {
          setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && text === '') {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, delay, typingSpeed, deletingSpeed]);

  const currentLanguage = words[wordIndex].language;

  return (
    <span aria-label={`Currently typing in ${currentLanguage}`} role='status' aria-live='polite'>
      {text}
    </span>
  );
};

export default TypeWriter;
