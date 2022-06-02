import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  margin: 3rem 0;
  p,
  ul {
    font-size: 0.9em;
  }
  ul {
    padding: 0 0 0 2.5rem;
  }
  li {
    margin: 1rem 0 1.25rem;
    list-style: none;
    position: relative;
    line-height: 1.5;
  }
  li:last-child {
    margin: 1rem 0 0;
  }
  li:before {
    content: '*';
    position: absolute;
    left: -2.25rem;
    top: 0;
    font-weight: bold;
    font-size: 1.25em;
    line-height: 1.2;
  }
`;

export default function About() {
  return (
    <Styles>
      <h2 id="about">Tips</h2>
      <p>
       Secure passwords are your first defense when safeguarding against threats
        online.
      </p>
      <ul>
        <li>Don’t use personal info in your passwords, like your dog’s birthday or your name.</li>
        <li>
          Don’t share credentials over email or text message. They’re completely wide-open
          to interception by 3rd parties.
        </li>
        <li>
        Do not use the same password, security question and answer for multiple important accounts.
        </li>
        <li>
        Do not let your Web browsers( FireFox, Chrome, Safari, Opera, IE, Microsoft Edge ) to store your passwords, since all passwords saved in Web browsers can be revealed easily
        </li>
        <li>
        Do not send sensitive information online via unencrypted( e.g. HTTP or FTP ) connections, because messages in these connections can be sniffed with very little effort. You should use encrypted connections such as HTTPS, SFTP, FTPS, SMTPS, IPSec whenever possible.
        </li>
        <li>
        Turn on 2-step authentication whenever possible.
        </li>
         <li>
        It's recommended that you remember a few master passwords, store other passwords in a plain text file and encrypt this file with GPG or a disk encryption software such as BitLocker, or manage your passwords with a password management software.
        </li>

      </ul>
    </Styles>
  );
}
