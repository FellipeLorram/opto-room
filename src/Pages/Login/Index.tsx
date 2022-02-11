import React, { useState } from 'react';
import { OptoLogo } from '../../Components/Logo/Index';
import { CardContainer, PageContainer } from './styled';
import UserGoogleLogin from '../../Widgets/GoogleLogin/Index';
import { Promotion } from './Promotion/Index';
import ArrowLink from './ArrowLink';
import LoginForm from './LoginForm';
import { SignupModal } from '../../Widgets/Signup/Index'
import { Wave } from '../../Assets/svgs/Wave';

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
    <PageContainer>
      <Wave className="background-wave" />

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
    </PageContainer>
  );
};

export { Login };