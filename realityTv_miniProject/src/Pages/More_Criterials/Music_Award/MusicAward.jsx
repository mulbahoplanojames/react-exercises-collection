import CriterialsBreadCrum from "../../../Components/Criterials_BreadCrum/CriterialsBreadCrum";

const MusicCriterials = () => {
  return (
    <>
      <CriterialsBreadCrum text={"Musical Awards"} />
      <div className="md:px-16 px-4 pb-20">
        <h1 className="text-3xl font-bold  pt-8 pb-4 px-2">
          Musical Award Criteria’s
        </h1>
        <ul className="text-lg px-6 list-decimal">
          <li>Best rapper </li>
          <li>Artist of the year</li>
          <li>Gospel artist </li>
        </ul>
        <h2 className="text-3xl font-bold  pt-8 pb-4 ">Purpose:</h2>
        <p className="text-lg">
          To acknowledge and celebrate students who excel comprehensively in
          their musical endeavors. To inspire aspiring musicians towards
          excellence and enhance their motivation.
        </p>
        <h2 className="text-3xl font-bold  pt-8 pb-4"> Year Level </h2>
        <ul className="text-lg px-6 list-decimal ">
          <li>
            The nominees must have released at least 2 hit songs within the
            Liberian community in Rwanda from the past year up to the current
            year of 2024
          </li>
          <li>
            The number of streams on various social media platforms,
            particularly audio Mack and YouTube. (10%){" "}
          </li>
          <li>
            Nominees must have released a new song during the first six months
            of 2024
          </li>
          <li>
            The length of messages, lyrics and vocal delivery of the song.
          </li>
        </ul>
        {/* ------------------------------------------------------------------------------------------ */}
        <div className="pt-8">
          <h1 className="text-3xl font-bold  pt-8 pb-4 px-2">
            Best Dancer Criteria’s
          </h1>

          <ul className="text-lg px-6 list-decimal ">
            <li>
              The dancer must have released a minimum of 4 dance videos on any
              of the listed social media platforms: TikTok, Facebook, YouTube,
              and Instagram.
            </li>
            <li>
              They should demonstrate quality of movement, body position, and an
              excellent understanding of dance styles in at least three of their
              videos over the past 24 months. Additionally, proficiency in
              Liberian cultural dance will also be considered.
            </li>
            <li>
              The dancer must have a well-established social media page or
              account showcasing their performances.
            </li>
          </ul>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <div className="pt-8">
          <h1 className="text-3xl font-bold  pt-8 pb-4 px-2">
            Best producer Criteria’s
          </h1>

          <ul className="text-lg px-6 list-decimal ">
            <li>
              Each producer must have produced a minimum of 5 songs in the past
              18 months.
            </li>
            <li>
              Producers must maintain an active social media page or account
              dedicated to promoting their produced music. Best TikToker
            </li>
            <li>
              The TikToker must have released a minimum of 30 dance videos on
              any of the listed social media platforms: TikTok, Facebook,
              YouTube, and Instagram.
            </li>
          </ul>
        </div>
        {/* --------------------------------------------------------------------------------------- */}
        {/* ------------------------------------------------------------------------------ */}
        <div className="pt-8">
          <h1 className="text-3xl font-bold  pt-8 pb-4 px-2">
            Best TikToker Criteria’s
          </h1>

          <ul className="text-lg px-6 list-decimal ">
            <li>
              The TikToker must have released a minimum of 30 dance videos on
              any of the listed social media platforms: TikTok, Facebook,
              YouTube, and Instagram.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MusicCriterials;
