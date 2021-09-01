import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useGlobalContext } from "./Context"
import Seo from "../components/Seo"

const Contact = () => {
  const { lang } = useGlobalContext()
  return (
    <>
      <Seo
        title={`${lang}` === "en-US" ? "Contact me" : "Свяжитесь со мной"}
        description={
          `${lang}` === "en-US"
            ? "the page where you can contact me"
            : "страница на которой вы можете связаться со мной"
        }
      />
      <div className="section-center">
        <h2 className="title">
          {`${lang}` === "en-US" ? "Contact me" : "Свяжитесь со мной"}
        </h2>
        <div className="underline"></div>
        <div className="flex">
          <StaticImage
            src="../assets/images/contact.svg"
            alt="my photo"
            placeholder="blurred"
          />
          <form
            action="https://formspree.io/f/xjvjjgrw"
            method="POST"
            className="contact-form"
          >
            <article className="form-group">
              <input
                type="text"
                name="name"
                placeholder={`${lang}` === "en-US" ? "Name" : "Имя"}
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder={`${lang}` === "en-US" ? "email" : "почта"}
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder={`${lang}` === "en-US" ? "message" : "сообщение"}
                className="form-control"
              ></textarea>
            </article>
            <button type="submit" className="submit-btn">
              {`${lang}` === "en-US" ? "submit here" : "отправить"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
