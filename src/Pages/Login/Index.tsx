import React, { useState } from 'react';
import { OptoLogo } from '../../Components/Logo/Index';
import { CardContainer } from './styled';
import { PageBackground } from '../../Widgets/PageBackground/Index';
import UserGoogleLogin from '../../Widgets/GoogleLogin/Index';
import { Promotion } from './Promotion/Index';
import ArrowLink from './ArrowLink';
import LoginForm from './LoginForm';
import { SignupModal } from '../../Widgets/Signup/Index'

const transition = {
  duration: 0.3,
  ease: 'easeInOut',
};

const CardVariant = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: transition },
  exit: { scale: 0, opacity: 0, transition: transition },
};


const Login: React.FC = () => {
  const [signupModalOnScreen, setSignupModalOnScreen] = useState(false);

  const handleCreateAccountClick = () => {
    setSignupModalOnScreen(true);
  };

  return (
    <PageBackground style={{ flexDirection: 'row', gap: '2rem', padding: '2rem' }}>
      <Promotion />
      <CardContainer
        variants={CardVariant}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="container-header">
          <OptoLogo />
        </div>
        <LoginForm />
        <UserGoogleLogin />

        <ArrowLink text="Crie sua conta em menos de 5 minutos." onClick={handleCreateAccountClick} />

      </CardContainer>
      <SignupModal 
        onScreen={signupModalOnScreen}
        setOnScreen={setSignupModalOnScreen}
      />
    </PageBackground>
  );
};

export { Login };