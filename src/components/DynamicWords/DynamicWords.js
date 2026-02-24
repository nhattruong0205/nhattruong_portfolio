import Reaadded the scroll ct, { useState, useEffect } from 'react';

function DynamicWords() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ['Developer', 'Data Scientist', 'Researcher'];
  const [currentWord, setCurrentWord] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isDeleting) {
        setCurrentWord((prev) => prev.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setCurrentWord(words[index].slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === words[index].length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? 60 : 60); // Speed of typing and deleting

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [index, charIndex, isDeleting, words]);

  return (
    <div className="text-3xl font-bold text-center">
      <span> {currentWord}</span>
    </div>
  );
}

export default DynamicWords;
