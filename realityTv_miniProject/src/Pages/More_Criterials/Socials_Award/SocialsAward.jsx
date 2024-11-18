import CriterialsBreadCrum from "../../../Components/Criterials_BreadCrum/CriterialsBreadCrum";

const SocialsAward = () => {
  return (
    <>
      <CriterialsBreadCrum text={"Socials Award"} />
      <div className="md:px-16 px-4 pb-20">
        <h1 className="text-3xl font-bold  pt-8 pb-4 px-2">Socials Awards</h1>

        <h2 className="text-3xl font-bold  pt-8 pb-4 ">Purpose:</h2>
        <p className="text-lg">
          To acknowledge and honor individuals who make significant
          contributions across various social causes and initiatives. To inspire
          others to strive for social excellence and foster a culture of
          positive change.
        </p>

        <h2 className="text-3xl font-bold  pt-8 pb-4"> Best DJ award Level</h2>
        <p className="text-lg">
          To qualify for the Best DJ award, an individual should excel in the
          following four major criteria:
        </p>

        <ul className="text-lg px-6 list-decimal ">
          <li>Organizational and Project Management Skills:</li>
          <li>
            Demonstrates exceptional ability to plan, coordinate, and execute
            events from start to finish.
          </li>
          <li>Creativity and Innovation</li>
          <li>
            Customizes events to meet clients specific needs and preferences,
            providing a personalized touch.
          </li>
          <li>
            Builds strong relationships with clients, understanding their vision
            and delivering beyond expectations.
          </li>
        </ul>

        {/* ------------------------------------------------------------ */}
        <h2 className="text-3xl font-bold  pt-8 pb-4">
          Best Blogger Award Level
        </h2>

        <p className="text-lg">
          To qualify for the Best Blogger award, an individual should excel in
          the following four major criteria:
        </p>
        <ul className="text-lg px-6 list-decimal ">
          <li>Content Quality:</li>
          <li>Produces high-quality, well-written, and engaging posts.</li>
          <li>Offers valuable, accurate, and insightful information.</li>
          <li>Demonstrates originality and creativity in their content.</li>
        </ul>

        {/* ------------------------------------------------------------ */}
        <h2 className="text-3xl font-bold  pt-8 pb-4">
          Best Event Planner Award Level
        </h2>

        <p className="text-lg">
          To qualify for the Best Event Planner award, an individual should
          excel in the following four major criteria:
        </p>
        <ul className="text-lg px-6 list-decimal ">
          <li>Content Quality:</li>
          <li>Produces high-quality, well-written, and engaging posts.</li>
          <li>Offers valuable, accurate, and insightful information.</li>
          <li>Demonstrates originality and creativity in their content.</li>
        </ul>
      </div>
    </>
  );
};

export default SocialsAward;
