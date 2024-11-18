import { useState } from "react";
import Swal from "sweetalert2";

const NewsLetter = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "be41465b-b33a-4603-aab8-6c235bb6443e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        // Display a success message using SweetAlert2
        title: "🎉👏🙌✨🎊",
        text: "Email sent successfully!",
        icon: "success",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
      Swal.fire({
        // Display an error message using SweetAlert2
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  return (
    <>
      <div className="shadow-2xl shadow-slate-400 text-center p-8 rounded-lg mb-16">
        <h1 className="text-3xl font-semibold uppercase pb-4">
          SIGN UP TO OUR NEWS LATTER
        </h1>
        <p className="md:px-[16rem] px-1 text-lg mb-6">
          Sign up to get daily updates on the reality tv show, and news about
          International Students Studying in Rwanda, Africa and many more...
        </p>

        <form
          className="flex gap-4 md:px-20 md:flex-nowrap flex-wrap"
          onSubmit={onSubmit}
        >
          <input
            name="email"
            type="text"
            placeholder="Enter your email address"
            className="w-full p-2 rounded-md border-2 border-blue-300 outline-none"
          />
          <p className="pb-5">{result}</p>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-300 text-xl text-white border-none md:rounded-full rounded-md md:w-[30%] w-full hover:bg-opacity-70"
            onClick={(e) => e.preventDefault()}
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default NewsLetter;
