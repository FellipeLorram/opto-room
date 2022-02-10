import React from 'react'

interface Props {
  email: string;
}

const VerificationFailed: React.FC<Props> = ({ email }) => {
  return (
    <div className="row verify-message">
      <p>
        Enviamos um mensagem de verificação para <span>{email}</span>.
        <br />
        <br />
        Parece que você ainda não clicou no link que mandamos pra você por email :(
        <br />
        <br />
        Basta clicar no link, voltar aqui e clicar em Verificar. <br/>
        Não esqueça de olhar na caixa de SPAM. 
        <br />
        <br />
        Caso esse não seja o seu email, é só voltar e corrigir.
      </p>
    </div>
  )
}

export { VerificationFailed };