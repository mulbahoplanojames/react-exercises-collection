import { Link } from "react-router-dom";
import { criterialsLinks } from "../../Data/Data";

const CriterialsBreadCrum = ({ text }) => {
  return (
    <>
      <div className="md:pt-28 pt-20 md:px-10 px-1 ">
        <div className="navbar bg-blue-200 rounded-md ">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Criterials</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>{text}</a>
              </li>
              <li>
                <details>
                  <summary>Criterials</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    {criterialsLinks.map((link) => (
                      <li key={link.label} className="text-black">
                        <Link to={link.path}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------- */}
      </div>
    </>
  );
};

export default CriterialsBreadCrum;
