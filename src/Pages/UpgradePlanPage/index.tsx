import React from 'react'
import { BackArrow } from '../../Assets/svgs/BackArrow'
import { OptoLogo } from '../../Components/Logo/Index'
import history from '../../Services/history'
import Background from './components/Background'
import Card from './components/Card/Index'
import { PageContainer } from './styled'

const UpgradePage: React.FC = () => {
  const montlyBenefits = [
    'Adicione quantos pacientes quiser',
    'Crie e gerencie seu locais de atendimento',
    'Faça o download de suas receitas',
    'Organize suas fichas por locais de atendimento',
  ];
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

      <div className="card-container">
        <Card
          benefits={montlyBenefits}
          CTA={false}
          header='MENSAL'
          price='40'
        />
        <Card
          benefits={[...montlyBenefits, 'Economize mais que uma mensalidade']}
          CTA
          header='ANUAL'
          price='350'
        />
      </div>
    </PageContainer>
  )
}

export default UpgradePage;