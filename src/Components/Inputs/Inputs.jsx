import React from 'react';

import Input from 'Components/Input/Input';

import './Inputs.less';

export default function Inputs({ values, onPress }) {
  return (
    <div className="inputs">
      {values.map(val => (
        <Input key={val} val={val} onPress={onPress} />
      ))}
    </div>
  );
}