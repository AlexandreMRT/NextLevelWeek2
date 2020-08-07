import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/11967686?s=460&u=d17a4fc04c7f236bfbe1e27c742a2e696ed8535d&v=4" alt="Alexandre Teixeira"/>
        <div>
          <strong>Alexandre Teixeira</strong>
          <span>Geografia</span>
        </div>
      </header>

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id arcu sed orci vehicula ultrices in ut risus. Phasellus ipsum erat, tempus vel eros sed, tincidunt commodo risus.
      <br />
        Quisque scelerisque dolor eget ipsum eleifend, fringilla egestas sem ullamcorper. Integer tincidunt arcu magna, eget hendrerit elit placerat non. 
        <br />
        Quisque sit amet erat quis diam molestie volutpat ac interdum nunc. In ut lacus quis erat tincidunt dictum et sed elit. Vestibulum dictum ex in tortor feugiat volutpat. Aliquam mollis ipsum at nulla ultrices gravida.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 30,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whats App"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;