import logo from './logo.svg';
import { GoogleFrame } from './components/GoogleFrame24';
import { EmailForm } from './components/EmailForm';
import { PasswordForm } from './components/PasswordForm';
import { SigninButton } from './components/SigninButton';
import './style.css';

function App() {
  return (
    <div className="App">
      <GoogleFrame onClick={() => {}} />
      <EmailForm> </EmailForm>
      <PasswordForm> </PasswordForm>
      <SigninButton></SigninButton>

    </div>
  );
};


export default App;
