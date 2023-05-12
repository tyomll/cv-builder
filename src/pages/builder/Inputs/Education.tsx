import React, { ChangeEvent, FC, useState } from "react";
import s from "../Builder.module.scss";
import {
	faAdd,
	faArrowDown,
	faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IEmail {
	setEducation: any;
	education: any;
}
const Education: FC<IEmail> = ({ setEducation, education }) => {
	const [addMode, setAddMode] = useState(false);
	const onEducationStartDateChange = (
		event: ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		setEducation(
			education.map((item: any) => {
				if (item.id === index) {
					return { ...item, startDate: event.target.value };
				} else {
					return item;
				}
			})
		);
	};
	const onEducationEndDateChange = (
		event: ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		setEducation(
			education.map((item: any) => {
				if (item.id === index) {
					return { ...item, endDate: event.target.value };
				} else {
					return item;
				}
			})
		);
	};
	const onEducationTitleChange = (
		event: ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		setEducation(
			education.map((item: any) => {
				if (item.id === index) {
					return { ...item, title: event.target.value };
				} else {
					return item;
				}
			})
		);
	};
	return (
		<div className={s.education}>
			<div>
				<div
					className={s.add}
					onClick={() => {
						setAddMode(true);
						setEducation([
							...education,
							{ id: education.length, startDate: "", endDate: "", title: "" },
						]);
					}}
				>
					<span>Education</span>
					<div>
						<FontAwesomeIcon icon={faAdd} />
					</div>
				</div>
				{education.length > 0 && (
					<button onClick={() => setAddMode(!addMode)}>
						<FontAwesomeIcon icon={addMode ? faArrowUp : faArrowDown} />
					</button>
				)}
			</div>
			{addMode &&
				education.map((_: any, i: number) => {
					return (
						<div key={i} className={s.inputs}>
							<input
								type="number"
								placeholder="Start Date"
								onChange={(e) => onEducationStartDateChange(e, i)}
							/>
							<input
								type="number"
								placeholder="End Date"
								onChange={(e) => onEducationEndDateChange(e, i)}
							/>
							<input
								type="text"
								placeholder="Title"
								onChange={(e) => onEducationTitleChange(e, i)}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default Education;
