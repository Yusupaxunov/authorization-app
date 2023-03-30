import { FormEvent, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useAuthStore } from "../store/auth.store";

const Auth = () => {

    const [auth, setAuth] = useState<'singup' | 'signin'>('signin');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [invalid, setInvalid] = useState<boolean>(false);
    const {signUp, signIn} = useAuth();
    const {loading, error, user} = useAuthStore()

    const authToggle = (state: 'singup' | 'signin' ) => {
        setAuth(state)
    }

    const Submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!password.length || !email.length){
            setInvalid(true);
        }
        setInvalid(false);
        if (auth === 'singup') {
            signUp(email, password);
        }else{
            signIn(email, password);
        }
    }

  return (
    <main className="form-signin container m-auto">
  <form className="m-auto w-50 mt-5" onSubmit={Submit}>
    <h1 className="h3 mb-3 fw-normal text-start">{auth == 'singup' ? 'Sing Up' : 'Sign In'}</h1>
    {error && <div className="alert alert-danger">{error}</div>}
    <div className="form-floating">
      <input type="email"  onChange={(e) => setEmail(e.target.value)} value={email} className={`form-control ${invalid && "is-invalid"}`} id="floatingInput" placeholder="name@example.com" />
      <label htmlFor="floatingInput">Email address</label>
    </div>

    <div className="form-floating mt-3">
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className={`form-control ${invalid && "is-invalid"}`} id="floatingPassword" placeholder="Password" />
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3 mt-3">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" disabled={loading} type="submit">{loading ? 'Loading...' : auth == 'singup' ? 'Sing Up' : 'Sign In'}</button>

    <p className="fw-normal mt-2 text-center">
        {auth === 'singup' ? "Already have account" : "Not account yet"} {' '}
        {auth == 'singup' 
        ? (<span className="fw-bold text-primary " style={{cursor: "pointer"}} onClick={()=>authToggle('signin')}>sign in</span>)
        : (<span className="fw-bold text-primary " style={{cursor: "pointer"}} onClick={()=>authToggle('singup')}>sign up</span>)}
        
    </p>
  </form>
</main>
  )
}

export default Auth;