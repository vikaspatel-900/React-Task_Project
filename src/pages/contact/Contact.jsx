import React from "react";
import './contact.css'



export default function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2d36f5e5-586f-49b0-892a-70d23e591326");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert("Form submitted successfully")
        }

        
      };



    return (
        <div className="footer-section" id="contact">
            <div className="footer-top">
                <h2 className="">Get in touch</h2>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <h2>Let's talk</h2>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="footer-bottom-left-details">
                        <p><i className="bi bi-envelope-arrow-down-fill email" title="email"></i> vikaspatel221999@gmai.com</p>
                        <p><i class="bi bi-telephone-plus-fill"></i> +91 8269741974</p>
                        <p><i class="bi bi-geo-alt-fill"></i> Noida,India</p>
                    </div>

                    

                </div>

                <form onSubmit={onSubmit} className="footer-bottom-right">
                    <div>
                        <label>Your Name</label>
                        <input type="text" name="name" placeholder="Enter your name" required/>
                    </div>

                    <div>
                        <label>Your Email</label>
                        <input type="email" name="email" placeholder="Enter your Email" required/>
                    </div>


                    <div>
                        <label>Write your message here</label>
                        <textarea rows={6} name="message" placeholder="Enter your message" required/>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
