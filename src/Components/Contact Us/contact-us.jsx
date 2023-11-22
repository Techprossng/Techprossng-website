import "../Contact Us/Style/contact-us.css"

function ContactUs() {
  return (
    <>
    <div className="contact-form my-10">
    <div className="contact-us m-10">
      <div className="contact-intro flex flex-col justify-center items-center">
        <h4 className="font-bold text-3xl text-[#001562]">Contact Us</h4>
        <p className="font-medium text-base text-[#272727] mt-5">
          Please fill out the form below, and our team will get back to
          you as soon as possible.
        </p>
      </div>
      <form action="" className="forminputs">
        <div className="name flex justify-around items-center mt-10">
          <div className="firstinput flex flex-col">
            <label className="text-[#272727] font-medium text-sm">
              First Name
            </label>
            <input type="name" className="" />
          </div>
          <div className="lastinput flex flex-col">
            <label className="text-[#272727] font-medium text-sm">
              Last Name
            </label>
            <input type="name" className="" />
          </div>
        </div>
        <div className="mail-website flex justify-around items-center mt-10">
          <div className="mailinput flex flex-col">
            <label className="text-[#272727] font-medium text-sm">
              Email
            </label>
            <input type="email" className="" />
          </div>
          <div className="websiteinput flex flex-col">
            <label className="text-[#272727] font-medium text-sm">
              Website (Optional)
            </label>
            <input type="text" className="" />
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="course-option mt-10">
            <label className="text-[#272727] font-medium text-sm">
              Please select your course of enquiry.
            </label>
            <div className="course-select">
              <select id="courses">
                <option value="---">--Select One--</option>
                <option value="digital-marketing">
                  Digital Marketing
                </option>
                <option value="data-analyst">Data Analyst</option>
                <option value="frontend">Frontend Web Developer</option>
                <option value="backend">Backend Web Developer</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="text-enquiry mt-10">
          <label className="text-[#272727] font-medium text-sm text-">
            How can we help?
          </label>
          <div className="field">
            <input type="name" className="" />
          </div>
        </div>
        </div>
        <div className="submit-form flex justify-center mt-10">
        <button type="submit">
          <p className="font-semibold text-sm">Send</p>
        </button>
      </div>
      </form>
    </div>
  </div>
  </>
  )
}

export default ContactUs;