import "../Contact Us/Style/contact-us.css"

function ContactUs() {
  return (
    <div className="contact-section">
     <form action="" className="contact-form my-10">
          <div className="contact-us m-10">
            <div className="contact-intro flex flex-col justify-center items-center">
              <h4 className="font-bold text-3xl text-[#001562]">Contact Us</h4>
              <p className="font-medium text-base text-[#272727] mt-5">
                Please fill out the form below, and our team will get back to
                you as soon as possible.
              </p>
            </div>
            <div className="forminputs">
              <div className="name flex justify-around items-center mt-10">
                <div className="firstinput">
                  <p className="text-[#272727] font-medium text-sm">
                    First Name
                  </p>
                  <input type="name" className="" />
                </div>
                <div className="lastinput">
                  <p className="text-[#272727] font-medium text-sm">
                    Last Name
                  </p>
                  <input type="name" className="" />
                </div>
              </div>
              <div className="course-option flex flex-col flex justify-center items-center mt-10">
                <p className="text-[#272727] font-medium text-sm">
                  Please select your course of enquiry.
                </p>
                <div className="course-select">
                  <select id="courses">
                    <option value="---">--Select One--</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="data-analyst">Data Analyst</option>
                    <option value="frontend">Frontend Web Developer</option>
                    <option value="backend">Backend Web Developer</option>
                  </select>
                </div>
              </div>
              <div className="text-enquiry flex flex-col justify-center items-center mt-10">
                <p className="text-[#272727] font-medium text-sm text-">
                  How can we help?
                </p>
                <div className="field">
                  <input type="name" className="" />
                </div>
              </div>
              <div className="mail-website flex justify-around items-center mt-10">
                <div className="mailinput">
                  <p className="text-[#272727] font-medium text-sm">Email</p>
                  <input type="email" className="" />
                </div>
                <div className="websiteinput">
                  <p className="text-[#272727] font-medium text-sm">
                    Website (Optional)
                  </p>
                  <input type="text" className="" />
                </div>
              </div>
            </div>
            <div className="submit-form flex justify-center mt-10">
              <button type="submit">
                <p className="font-semibold text-sm">Send</p>
              </button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default ContactUs;