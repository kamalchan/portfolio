import React, { useRef, useState } from "react";
import "./Contact.css";
//import emailjs from "emailjs-com";

const Contact = () => {
  const [done, setDone] = useState(false);
  const formRef = useRef();
  const [values, setValues] = useState({
    email: '',
    text: '',
    contact: '',
    username: '',
    usermessage: ''
    
  });
  

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //    emailjs
  //     // .sendForm(
  //     //   // Replace with your actual EmailJS service ID
  //     //   "YOUR_SERVICE_ID_HERE",
  //     //   // Replace with your actual EmailJS template ID
  //     //   "YOUR_TEMPLATE_ID_HERE",
  //     //   formRef.current,
  //     //   // Replace with your actual EmailJS user ID
  //     //   "YOUR_USER_ID_HERE"
  //     // )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // };

  const onSubmit = () => {
    // const answer = count.map((item, index) => {
    //     return `${value[`material${index}`].label} - ${value[`quantity${index}`]}`
    // })
    // const materialData = answer && answer.join()
// if (materialData) {
        var formattedBody =
            `Dear Constro,\n` +
            `We are interested in purchasing the following materials:\n\n` +
            `Name - ${values.username} \n` +
            `Email - ${values.email} \n` +
            `Phone Number - ${values.mobile} \n` +
            `message-${values.usermessage}\n`+
            ``
            // `Address - ${value.address}, ${value.city} \n` +
            // `Materials - ${materialData} \n`
            ;
var mailToLink = `mailto:kamalysk1997@gmail.com?subject=${values.text}&body=` + encodeURIComponent(formattedBody);
        window.location.href = mailToLink;
    
}

  return (
    <div id="contact">
      <div className="container abdc">
        <div className="row abdc">
          <div className="col-sm-6 offset-sm-3">
            <h2 className="">Contact</h2>
            <br />
            <form onSubmit={onSubmit} ref={formRef}>
              <input
                type="text"
                placeholder="Your Name"
                onChange={(e) => setValues({ ...values, username: e.target.value })}
                className="form-control"
                name="user_name"
                required
              />
              <div className="row">
                <div className="col-sm-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                    className="form-control"
                    name="user_email"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    placeholder="Contact Number"
                    onChange={(e) => setValues({ ...values, contact: e.target.value })}
                    className="form-control"
                    name="user_contact"
                    pattern="[0-9]{10}"
                    title="Please enter a valid number."
                    required
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Subject"
                onChange={(e) => setValues({ ...values, text: e.target.value })}
                className="form-control"
                name="user_subject"
                required
              /><textarea
              name="user_message"
              rows="4"
              className="form-control"
              placeholder="Your Message"
              onChange={(e) => {
                setValues({ ...values, usermessage: e.target.value });
                e.target.classList.toggle('black-text', e.target.value === '');
              }}
              required
            ></textarea>
            
              <br />
              <button type="submit" className="btn btn-primary">
                Send
              </button>
              <br />
              <br />
              {done ? <p>Thank you for contacting :)</p> : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
