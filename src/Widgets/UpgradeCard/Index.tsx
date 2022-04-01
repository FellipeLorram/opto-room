import React, { useState } from 'react'
import Lottie from 'react-lottie'
import { UpgradeCardContainer } from './styled'
import resources from '../../Assets/Animations/resources.json'
import history from '../../Services/history'

const UpgradeCard = () => {
  const [animate, setAnimate] = useState(false)

  const defaultOptions = {
    loop: animate,
    autoplay: true,
    animationData: resources,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <UpgradeCardContainer onClick={() => history.push('/upgrade-my-plan')}>
      <div
        onMouseEnter={() => setAnimate(true)}
        onMouseLeave={() => setAnimate(false)}
        className='shadow-wrapper'
      >
        <div className='content'>
          <div className='animation'>
            <Lottie
              options={defaultOptions}
              height={150}
              width={150}
            />
          </div>
          <div className='upgrade-text-container'>
            <h3>
              Upgrade para o Premium
            </h3>

            <p>
              Faça o upgrade agora e tenha acesso a todos os recursos
            </p>
          </div>

        </div>
        <div className='upgrade-button'>
          Upgrade
        </div>
      </div>
    </UpgradeCardContainer>
  )
}

export default UpgradeCard