import React from 'react';

function Article({ title, date, preview, minutes }) {
  // Default date if not provided
  const defaultDate = 'January 1, 1970';

  // Calculate the number of emojis based on reading time
  const calculateEmojis = (time) => {
    const emojis = [];
    const coffeeCup = '☕️';
    const bentoBox = '🍱';

    if (time < 30) {
      const coffeeCups = Math.ceil(time / 5);
      for (let i = 0; i < coffeeCups; i++) {
        emojis.push(coffeeCup);
      }
    } else {
      const bentoBoxes = Math.ceil(time / 10);
      for (let i = 0; i < bentoBoxes; i++) {
        emojis.push(bentoBox);
      }
    }

    return emojis.join('');
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      <p>
        {calculateEmojis(minutes)} {minutes} min read
      </p>
    </article>
  );
}

export default Article;
