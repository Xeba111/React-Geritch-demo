import React from "react";

import "./Laurels.css";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";

//No se crea afuer como MenuItem o SubHeading porque solo va a ser usado en esta sección
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
	<div className="app__laurels-awards_card">
		<img src={imgUrl} alt="award" />
		<div className="app__laurels-awards_card-content">
			<p className="p__cormorant" style={{ color: "#DCCA87" }}>
				{title}
			</p>
			<p className="p__opensans">{subtitle}</p>
		</div>
	</div>
);

const Laurels = () => (
	<div className="app__bg app__wrapper section__padding" id="awards">
		<div className="app__wrapper_info">
			<SubHeading title="Awards and Recognitions" />
			<h1 className="headtext__cormorant">Our Laurels</h1>

			<div className="app__laurels-awards">
				{data.awards.map((award) => (
					<AwardCard award={award} key={award.title} />
				))}
			</div>
		</div>

		<div className="app__wrapper_img">
			<img src={images.laurels} alt="laurels" />
		</div>
	</div>
);

export default Laurels;
