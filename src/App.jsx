<<<<<<< HEAD
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import EmailInput from "./components/EmailInput";
import Thanks from "./components/Thanks";

import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState();

  return (
    <section className="wrapper">
      {isSubmitted ? (
        <Thanks
          email={email}
          setIsSubmitted={setIsSubmitted}
          setEmail={setEmail}
        />
      ) : (
        <section className="container">
          <Header />
          <main>
            <MainBody />
            <EmailInput
              setIsSubmitted={setIsSubmitted}
              email={email}
              setEmail={setEmail}
            />
          </main>
        </section>
      )}
    </section>
  );
=======
import Header from './components/Header';
import MainBody from './components/MainBody';
import EmailInput from './components/EmailInput';
import Thanks from './components/Thanks';

import { useState } from 'react';

function App() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState();

    return (
        <section className='wrapper'>
            {isSubmitted ? (
                <Thanks
                    email={email}
                    setIsSubmitted={setIsSubmitted}
                    setEmail={setEmail}
                />
            ) : (
                <section className='container'>
                    <Header />
                    <main>
                        <MainBody />
                        <EmailInput
                            setIsSubmitted={setIsSubmitted}
                            email={email}
                            setEmail={setEmail}
                        />
                    </main>
                </section>
            )}
        </section>
    );
>>>>>>> 99277e2a53de645fddfc6c266683b92ae5cb01ca
}

export default App;
