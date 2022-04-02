import React, { useState } from 'react'
import { BackArrow } from '../../Assets/svgs/BackArrow';
import { OptoLogo } from '../../Components/Logo/Index';
import history from '../../Services/history';
import Background from './components/Background';
import { ScreenMapContext } from './Context/Index';
import PlanSelection from './PlanSelection/Index';
import PreparingCheckoutSession from './PreparingCheckoutSession/Index';
import { PageContainer } from './styled'

const UpgradePage: React.FC = () => {
  const [preparingCheckoutSessionOnScreen, setPreparingCheckoutSessionOnScreen] = useState(false)
  return (
    <PageContainer>
      <Background />
      <div className="header">
        <BackArrow className='back-arrow' onClick={() => history.push('/')} />
        <OptoLogo className='opto-logo' />
      </div>
      <div className="promo-text">
        Tenha acesso a todos os recursos<br /> Adicione quantos pacientes quiser
      </div>

      <ScreenMapContext.Provider value={{ setPreparingCheckoutSessionOnScreen }}>
        <PlanSelection NonScreen={preparingCheckoutSessionOnScreen} />
        <PreparingCheckoutSession onScreen={preparingCheckoutSessionOnScreen} />
      </ScreenMapContext.Provider>
    </PageContainer>
  )
}

export default UpgradePage;