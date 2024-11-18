import { Link } from "react-router-dom";

/*
 * ============================================================================
 * This component LinksDropdown is used with in the SidebarLinks component and
 * also the sidebar component to render all links dropdown with in the sidebar
 */

const LinksDropdown = ({ object, title, icon }) => {
	return (
		<>
			<div className='flex items-center justify-center mb-3'>
				<ul className='menu bg-base-200 rounded-box  w-56'>
					<li>
						<details onClick={() => open}>
							<summary className='active:bg-blue-600 hover:text-blue-500 text-base'>
								{icon}
								<span>{title}</span>
							</summary>
							{/* //! Mapping over all the sidebar links data from the Constants data component  */}
							{object.map((item) => (
								<li className='py-1 text-base' key={item.id}>
									<Link to={item.path}>{item.label}</Link>
								</li>
							))}
						</details>
					</li>
				</ul>
			</div>
		</>
	);
};

export default LinksDropdown;
