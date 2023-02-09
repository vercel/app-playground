'use client';

import Button from '#/ui/Button';
import React from 'react';

export default function BuggyButton() {
  const [clicked, setClicked] = React.useState(false);

  if (clicked) {
    throw new Error('啊! 出错了...');
  }

  return (
    <Button
      kind="error"
      onClick={() => {
        setClicked(true);
      }}
    >
      触发错误
    </Button>
  );
}
