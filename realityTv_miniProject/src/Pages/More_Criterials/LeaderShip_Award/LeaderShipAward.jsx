import CriterialsBreadCrum from "../../../Components/Criterials_BreadCrum/CriterialsBreadCrum";

const LeaderShipAward = () => {
  return (
    <>
      <CriterialsBreadCrum text={"LeaderShip Award"} />
      <div className="md:px-16 px-4 pb-20">
        <h1 className="text-3xl font-bold  pt-8 pb-4 px-2">
          LeaderShip Awards
        </h1>

        <h2 className="text-3xl font-bold  pt-8 pb-4 ">Purpose:</h2>
        <p className="text-lg">
          To recognize and celebrate leaders who drive impactful change across
          diverse social causes and initiatives. Inspiring others to pursue
          social excellence, we aim to cultivate a culture where positive
          transformation thrives
        </p>

        <p className="text-lg">
          Only nominations of a current leadership especially during the period
          of nomination is eligible. Leadership: Nominees must possess some
          leadership qualities, such as vision, initiative, and the ability to
          inspire others whilst in leadership
        </p>

        {/* ------------------------------------------------------------ */}
        <h2 className="text-3xl font-bold  pt-8 pb-4">Mento Level</h2>

        <p className="text-lg">
          To acknowledge and empower mentors who profoundly impact others
          through their guidance and support across diverse fields. Inspiring
          future mentors, we aim to cultivate a culture where knowledge sharing
          and personal growth flourish
        </p>
        <ul className="text-lg px-6 list-decimal ">
          <li>
            Mentorship: Nominees must have a proven track record of mentoring
            others
          </li>
          <li>
            Moral: Nominees must be in good moral and ethical standing with
            others in the Liberian community.
          </li>
        </ul>

        {/* ------------------------------------------------------------ */}
        <h2 className="text-3xl font-bold  pt-8 pb-4">
          Outstanding Personality Award Level
        </h2>

        <p className="text-lg">
          Achievements and Contributions: A proven track record of nominees
          ‘notable achievements, contributions, or innovations in their
          respective communities or the Liberian community at large.
        </p>
        <ul className="text-lg px-6 list-decimal ">
          <li>
            Integrity and Ethics: Nominees must demonstrate high ethical
            standards, integrity, and honesty in their endeavors.
          </li>
          <li>
            Service and Dedication: nominees must have been committed to
            service, whether to their profession, community, or a cause.
          </li>
          <li>Offers valuable, accurate, and insightful information.</li>
          <li>
            Personal Growth and Development: Considering nominees personal
            growth and development over time, including how they have overcome
            challenges or adversity are paramount.
          </li>
        </ul>

        {/* ------------------------------------------------------------ */}
        <h2 className="text-3xl font-bold  pt-8 pb-4">
          Most Influential Personality Awards
        </h2>

        <p className="text-lg">
          Influence: Evaluate the extent to which the nominee has influenced
          others positively or brought about change.
        </p>
        <ul className="text-lg px-6 list-decimal ">
          <li>
            Impact: Nominee must have made an impact in their work or actions on
            their field or community at large.
          </li>
          <li>
            Social: Nominee must be a people&apos;s person and must be in good
            social and moral standing with others in the community.
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeaderShipAward;
