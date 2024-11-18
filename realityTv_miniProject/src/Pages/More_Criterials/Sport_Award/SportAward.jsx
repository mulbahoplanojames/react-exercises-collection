import CriterialsBreadCrum from "../../../Components/Criterials_BreadCrum/CriterialsBreadCrum";

const SportAward = () => {
  return (
    <>
      <CriterialsBreadCrum text={"Sport Award"} />
      <div className="md:px-16 px-4 pb-20">
        <h1 className="text-3xl font-bold  pt-8 pb-4 px-2">Football Award</h1>

        <p className="text-lg">
          To honor and celebrate footballers who exemplify excellence on the
          field, inspiring fans and teammates alike with their skill,
          dedication, and sportsmanship. Through their passion and performance,
          they elevate the game and foster a culture of teamwork and
          achievement.
        </p>

        <ul className="text-lg px-6 list-decimal ">
          <li>One must be an active Football player known by the public</li>
          <li>
            One must have participated in at least two or three local
            tournaments organized in the general Liberian community, his
            university, or Province respectively.
          </li>
          <li>
            {" "}
            One must have a track record of violent free, and respectful &
            peaceful exhibition of conduct on and off the playing pitch
          </li>
          <li>
            One must have a consistent and demonstrated performance record in
            his category of nomination.
          </li>
        </ul>

        {/* ------------------------------------------------------------ */}
        <h2 className="text-3xl font-bold  pt-8 pb-4">Basketball Award</h2>

        <p className="text-lg">
          To recognize and celebrate basketball players who embody excellence on
          the court, inspiring fans and teammates through their skill,
          dedication, and sportsmanship. Their passion and performance elevate
          the game, fostering a culture of teamwork and achievement
        </p>
        <ul className="text-lg px-6 list-decimal ">
          <li>One must be an active Basketball player known by the public</li>
          <li>
            One must have participated in at least two or three local
            tournaments organized in the general Liberian community, his
            university, or Province respectively
          </li>
          <li>
            One must have a track record of violent free, and respectful &
            peaceful exhibition of conduct on and off the playing pitch.
          </li>
          <li>
            One must have a consistent and demonstrated performance record in
            his category of nomination.
          </li>
        </ul>

        {/* ------------------------------------------------------------ */}
        <h2 className="text-3xl font-bold  pt-8 pb-4">Baseball Award Level</h2>

        <p className="text-lg">
          To honor and celebrate baseball players who exemplify excellence on
          the field, inspiring fans and teammates alike with their skill,
          dedication, and sportsmanship. Through their passion and performance,
          they elevate the game and cultivate a culture of teamwork and
          achievement
        </p>
        <ul className="text-lg px-6 list-decimal ">
          <li>One must be an active Baseball player known by the public.</li>
          <li>
            One must have participated in at least two or three local
            tournaments organized in the general Liberian community, her
            university, or Province respectively.
          </li>
          <li>
            One must have a track record of violent free, and respectful &
            peaceful exhibition of conduct on and off the playing pitch.
          </li>
          <li>
            One must have a consistent and demonstrated performance record in
            her category of nomination
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

        {/* --------------------------------------------------------------------------------- */}
      </div>
    </>
  );
};

export default SportAward;
