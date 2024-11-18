import CriterialsBreadCrum from "../../../Components/Criterials_BreadCrum/CriterialsBreadCrum";

const EnterpreneurAward = () => {
  return (
    <>
      <CriterialsBreadCrum text={"Enterpreneur Award"} />
      <div className="md:px-16 px-4 pb-20">
        <h1 className="text-3xl font-bold  pt-8 pb-4 px-2">
          Best Enterpreneur Awards
        </h1>

        <h2 className="text-3xl font-bold  pt-8 pb-4 ">Purpose:</h2>
        <p className="text-lg">
          To recognize and celebrate entrepreneurs who innovate and create
          positive impact through their ventures and initiatives. Inspiring
          future entrepreneurs, we aim to cultivate a culture where bold ideas
          thrive and drive meaningful change in our society.
        </p>

        <ul className="text-lg px-6 list-decimal ">
          <li>
            Business Success: Demonstrated success in creating and managing a
            business venture, such as generating revenue, customer satisfaction,
            or growth. Note: nominees in this category must have an established
            well-known business running and own by a Liberian
          </li>
          <li>
            Innovation and Creativity: Implemented innovative ideas or solutions
            in the business field, showing creativity and entrepreneurial
            spirit.
          </li>
          <li>
            Leadership and Vision: Exhibited strong leadership skills, strategic
            vision, and the ability to inspire and motivate others. Note; if no
            one in the Liberian community has been inspired by a nominee to
            carry out his or her own business or other things than it’s out.
            Therefore, there should be proof of people who a nominee has
            inspired, and they have had personal growth and development.
          </li>
          <li>
            Impact and Sustainability: Nominees must have made a positive impact
            on the community or industry while maintaining a sustainable and
            ethical business model.
          </li>
        </ul>
      </div>
    </>
  );
};

export default EnterpreneurAward;
