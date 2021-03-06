import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../../../Components/Form/Input/Input";
import Button from "../../../Components/Form/Button/Button";
import UseForm from "../../../Hooks/useForm";
import { UserContext } from "../../../UserContext"
import Error from "../../../Components/Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../../../Components/Form/Button/Button.module.css";

function LoginForm() {
  const username = UseForm();
  const password = UseForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perder">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastra-se</h2>
        <p>Ainda não possui conta? Cadastra-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
