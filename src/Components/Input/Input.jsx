import React from 'react';

export default function Input({ val, onPress }) {
  return (
    <button className="input" onClick={() => onPress(val)}>
      {val}
    </button>
  );
}