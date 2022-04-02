import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { LoadingConainer, LoadingDot } from './styled';

interface Props {
  onScreen: boolean;
}


const Loading: React.FC<Props> = ({ onScreen }) => {
  return (
    <AnimatePresence>
      {onScreen && (
        <LoadingConainer>
          <LoadingDot />
        </LoadingConainer>
      )}
    </AnimatePresence>
  )
}

export default Loading