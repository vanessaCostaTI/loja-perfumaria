"use client";
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
//import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const router = useRouter();

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Senha:', password);
    // Exemplo de redirecionamento após o login
    //router.push('/dashboard');
  };

  return (
    <Container maxWidth="xs" >
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
      <Grid item xs={3} >
      <Typography variant="h4" align="center" gutterBottom>
        Vanessa Perfumaria
      </Typography>
      <form>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{backgroundColor:'blue'}}
          fullWidth
          onClick={handleLogin}
        >
          Entrar
        </Button>
      </form>
      </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
