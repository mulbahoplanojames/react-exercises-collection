import { faqdata } from "../../Data/Data";

const FAQ = () => {
  return (
    <>
      <div className="mt-20 pb-20">
        <h1 className="text-4xl font-bold text-center pb-10">FAQ</h1>

        <div className="join join-vertical w-full ">
          {faqdata.map((faq) => (
            <div
              className="collapse collapse-arrow join-item border-base-300 border"
              key={faq.id}
            >
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
