import * as C from './styles';
import logoImage from '../../assets/logo-bolsus.png';
import { useNavigate } from 'react-router-dom';
import { readClientLogin } from '../../api/axiosInstance';
import { useState } from 'react';

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleNavigateRegister() {
    navigate('/register');
  }

  function handleEmail(text: string) {
    setEmail(text);

    if (text.length > 0 && text.match(emailRegex)) {
      setIsValidEmail(true);
    }
  }

  function handlePassword(text: string) {
    setPassword(text);

    if (text.length > 0) {
      setIsValidPassword(true);
    }
  }

  const handleLogin = async() => {
    if (isValidEmail && isValidPassword) {
      try {
        const data = { email, password };
        const result = await readClientLogin(data);
        localStorage.setItem('token', result.token);

        navigate("/");

      } catch (err) {
        console.log(err);
      }
    }
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
        <C.Input placeholder='Seu e-mail inseparável' type='text' required onChange={(e) => handleEmail(e.target.value)}/>
        <C.Input placeholder='Sua senha super secreta' type='password'required onChange={(e) => handlePassword(e.target.value)}/>
        <p style={{marginBottom: 20, width: '80%', textAlign: 'right', textDecoration: 'underline', color: 'greenyellow', cursor: 'pointer' }}>Esqueceu a senha?</p>

        <C.Button onClick={handleLogin}>ENTRAR</C.Button>
        <C.RegisterText>É novo (a) por aqui? <br/> <span onClick={handleNavigateRegister} style={{color: 'greenyellow', textDecoration: 'underline', cursor: 'pointer'}}>Cadastre-se</span> e organize suas finanças!</C.RegisterText>
        </C.InputBox>
      </C.Box>
      
    </C.Container>
  );
}