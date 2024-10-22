import * as C from './styles';
import logoImage from '../../assets/logo-bolsus.png';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  function handleNavigateRegister() {
    navigate('/register');
  }

  return(
    <C.Container>
      <C.Box>
      <C.Logo>
        <C.Image src={logoImage} />
        <C.HeaderTitle>Bolsus</C.HeaderTitle>
        <C.Subtitle>Controle sua vida financeira e encha os <span style={{color: 'greenyellow'}}>Bolsus</span>.</C.Subtitle>
        </C.Logo>
        <C.Title>Bom te ver por aqui!</C.Title>
        <C.InputBox>
        <C.Input placeholder='Seu e-mail inseparável' type='text' required/>
        <C.Input placeholder='Sua senha super secreta' type='password'/>
        <p style={{marginBottom: 20, width: '80%', textAlign: 'right', textDecoration: 'underline', color: 'greenyellow', cursor: 'pointer' }}>Esqueceu a senha?</p>

        <C.Button>ENTRAR</C.Button>
        <C.RegisterText>É novo (a) por aqui? <br/> <span onClick={handleNavigateRegister} style={{color: 'greenyellow', textDecoration: 'underline', cursor: 'pointer'}}>Cadastre-se</span> e organize suas finanças!</C.RegisterText>
        </C.InputBox>
      </C.Box>
      
    </C.Container>
  );
}