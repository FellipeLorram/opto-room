import React from 'react'


interface Props {
  children: React.ReactNode;
}
const Appwrapper: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      {children}
    </div>
  )
}
export const MainWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  )
}

export default Appwrapper