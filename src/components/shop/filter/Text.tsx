// src/components/shop/Text.tsx
import React from 'react';

interface TextProps {
    numStart: number;
    numEnd: number;
    numFull: number;
}

const Text: React.FC<TextProps> = ({ numStart, numEnd, numFull }) => {
  return (
    <div className='txt-filter'>
        <p>Showing {numStart}-{numEnd} of {numFull} results</p>
    </div>
  )};

export default Text;
