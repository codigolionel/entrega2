import Navegation from '../../components/Navegation/Navegation'
import './contact.css'

export default function Contact() {
  return (
    <div>
      <Navegation />

      <header className="d-flex justify-content-center ">

        <div className="container-contact d-flex flex-column justify-content-center">
          <div>
            <h2 className="text-1 text-center">Contact</h2>
            <h3 className="text-2 text-center">Leave us your information so we can contact you</h3>
          </div>
          <form className="container-form justify-content-md-center p-4" action="https://formspree.io/f/xgejnork" method="POST">
            <div className="nombreymail d-flex flex-row justify-content-md-center justify-content-between align-items-center mt-5 ">
              <div className="div-1 d-flex flex-column">
                <label className="label-form" for="name">Name</label>
                <input className="input-text rounded-2 p-3 border border-0" type="text" name="userName" id="name" required=""></input>
              </div>
              <div className="div-2 d-flex flex-column">
                <label className="label-form" for="email">Email</label>
                <input className="input-text rounded-2 p-3 border border-0" type="email" name="userEmail" id="email" required=""></input>
              </div>
            </div>
            <div className=" divmx-auto p-5 m-5 d-flex flex-column">
              <label className="label-form" for="messege">Messege</label>
              <textarea className=" rounded-2 border border-0 p-2" name="userMessege" id="messege" cols="30" rows="10" required=""> </textarea>
            </div>
            <div className="div-4">
              <input className="btn-form rounded-2 border border-0" type="submit" value="Send"></input>
            </div>
          </form>
        </div>
      </header>

    </div>
  )
}