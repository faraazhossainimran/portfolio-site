import React from "react";
import Button from "../../../components/Button/Button";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSend = (e) => {
    e.preventDefault()
    Swal.fire("Email Sent");
  }
  return (
    <div className="flex items-center justify-center pb-12 m-4" id="contact">
      <div className="w-[500px]">
        <h1 className="text-3xl text-center text-[#a6c7e3] py-6">
          Contact me
        </h1>
        <div></div>
        <div className="flex-col ">
          <div className="w-full">
            <form className="">
              <div className="form-control my-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered bg-gray-800 text-white"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered bg-gray-800 text-white"
                  required
                />
              </div>
              <div className="form-control my-4">
                <textarea className="textarea textarea-bordered bg-gray-800 text-white" placeholder="Write message"></textarea>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleSend}><Button label={"Send"}></Button></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
