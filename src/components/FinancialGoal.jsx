import { useState } from "react";

const GoalSetting = () => {
	const [goal, setGoal] = useState(10000);
	const [currentSavings, setCurrentSavings] = useState(2000);

	return (
		<div className="w-full flex flex-col justify-center items-center self-center">
			<h3>Financial Goal: ₹{goal}</h3>
			<progress value={currentSavings} max={goal}></progress>
			<p>
				Saved: ₹{currentSavings} / ₹{goal}
			</p>
		</div>
	);
};

export default GoalSetting;
