import React, { ChangeEvent, FC } from "react";
import s from "../Builder.module.scss";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IEmail {
  setEducation: any;
  education: any;
}
const Education: FC<IEmail> = ({ setEducation, education }) => {
  const onEducationDateChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setEducation(
      education.map((item: any) => {
        if (item.id === index) {
          return { ...item, date: event.target.value };
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
      <div
        className={s.add}
        onClick={() => {
          setEducation([
            ...education,
            { id: education.length, date: "", title: "" },
          ]);
        }}
      >
        <span>Education</span>
        <div>
          <FontAwesomeIcon icon={faAdd} />
        </div>
      </div>
      {education &&
        education.map((_: any, i: number) => {
          return (
            <div key={i}>
              <input
                type="text"
                placeholder="Date"
                onChange={(e) => onEducationDateChange(e, i)}
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
