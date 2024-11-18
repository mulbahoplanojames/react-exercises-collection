import CriterialsBreadCrum from "../../Components/Criterials_BreadCrum/CriterialsBreadCrum";

const Criterial = () => {
  return (
    <>
      <CriterialsBreadCrum text={"Academics Award"} />
      <div className="md:px-16 px-4 pb-20">
        <h1 className="text-3xl font-bold  pt-8 pb-4 px-2">Academics Awards</h1>

        <ul className="text-lg px-6 list-decimal">
          <li>Faculty of Law</li>
          <li>Faculty of Business</li>
          <li>Faculty of Computer Science</li>
        </ul>

        <h2 className="text-3xl font-bold  pt-8 pb-4 ">Purpose:</h2>
        <p className="text-lg">
          To recognize and honor students who achieve well across the breadth of
          their subjects. To promote students aspiring to academic excellence
          and provide additional motivation.
        </p>

        <h2 className="text-3xl font-bold  pt-8 pb-4"> Year Level </h2>

        <ul className="text-lg px-6 list-decimal ">
          <li>
            Have attained 4 or more 85 standards relative to the number of
            subjects they study in that year level.
          </li>
          <li>Having have no level of achievement below 75 standard. </li>
          <li>
            Excellent/very good behavior with no more than one (1) satisfactory
            behavior. Nothing less than B and Intelligent
          </li>
          <li>
            Legal Advocacy: Engaged in moot court competitions, mock trial
            teams, or other activities that demonstrate advocacy skills. Note,
            these trial court or practice court, nominees must be given an award
            or certificate as act of performance.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Criterial;
