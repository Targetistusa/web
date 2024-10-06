import React, { useState } from 'react';
import '../styles/Home.css';
import Swal from 'sweetalert2';
import { SeparateAway } from './magicUIComponents/seperateAway';
import MailChimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";

interface CustomFormProps {
  onValidated: (formData: EmailFormFields) => void;
  status: String | null;
  message: String | Error | null;
}

const CustomForm: React.FC<CustomFormProps> = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = () => {
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
    }
  };

  return (
    <div className="email-container">
      <input
        type="email"
        placeholder="Enter your work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      />
      <button onClick={handleSubmit} className="request-button">
        Request Access
      </button>
    </div>
  );
};

const Home: React.FC = () => {
  const mailChimpUrl = process.env.REACT_APP_URL || '';
  return (
    <div className="container">
      <button className="top-button">
        <span role="img" aria-label="celebration">🎉</span>
        free during beta
      </button>
      <div className='flex justify-center items-center text-center gap-3'>
        <SeparateAway
          upper_text='Setting Targets Has Never'
          lower_text=''
          className='heading'
          duration={2}
          hidden_opacity={0}
          visible_opacity={1}
        />
        <SeparateAway
          upper_text=''
          lower_text='Been This Easy'
          className='heading02'
          duration={2}
          hidden_opacity={0}
          visible_opacity={1}
        />
      </div>
      <MailChimpSubscribe
        url={mailChimpUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm onValidated={(formData: EmailFormFields) => subscribe(formData)} status={status} message={message} />
        )}
      />
    </div>
  );
};

export default Home;
