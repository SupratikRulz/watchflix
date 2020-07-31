import React, { useState } from 'react'

import FaqCards from './FaqCards'

import styles from './Faq.module.scss'

const FAQs = [
  {
    caption: 'What is Watchflix?',
    description: 'This is frontend clone of Netflix made using Gatsby & Firebase.'
  },
  {
    caption: 'How much does Watchflix costs?',
    description: "Unlike Netflix, it doesn't burns your pocket! Its free forever."
  },
  {
    caption: 'What is the tech stack?',
    description: 'Its made in Gatsby and the authorization is implemented via Firebase, hosted with Netlify CDN'
  },
  {
    caption: 'About author',
    description: 'Hi there! Myself Supratik Basu, popularly known by @supratikrulz in web! I am a Frontend Developer. My expertise lies in JavaScript and React. Liked my work? Want to hire me? Contact me on email: mail.supratikbasu@gmail.com'
  }
]

export default function Faq() {
  const [activeFaqId, setActiveFaqId] = useState(-1)
  
  function toggleShowHide(event) {
    const idClicked = Number(event.target.getAttribute('data-id'))

    if (idClicked === activeFaqId) {
      setActiveFaqId(-1)
    } else {
      setActiveFaqId(idClicked)
    }
  }

  return (
    <div className={styles.Faq}>
      <h1>Frequently Asked Questions</h1>
      <div>
        <ul>
          {
            FAQs.map((faq, index) => <li className={styles.FaqCards__container} key={index}><FaqCards {...faq} key={index} id={index} show={activeFaqId === index} toggleShowHide={toggleShowHide}/></li>)
          }
        </ul>
      </div>

    </div>
  )
}
