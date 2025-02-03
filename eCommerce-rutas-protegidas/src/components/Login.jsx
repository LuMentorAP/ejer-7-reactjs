// eslint-disable-next-line react/prop-types
function Login({ handleLogin }) {
    return (
      <div>
        <h2>Iniciar Sesión</h2>
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    );
  }
  
  export default Login;
  