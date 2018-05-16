import React from 'react';

import './ProgressBar.less';

export default function ProgressBar({ progress }) {
  return (
    <div className="progressbar">
      <div className="progress" style={{'--percent': `${progress * 100}%` }} />
    </div>
  );
}