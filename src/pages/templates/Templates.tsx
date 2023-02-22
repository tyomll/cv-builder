import React from 'react';
import s from './Templates.module.scss';

const Templates: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.heading}>
          <h1>Choose Your Template</h1>
        </div>
        <div className={s.templates}>
          <div className={s.template}>
            <div className={s.image}>
              <img
                src="https://marketplace.canva.com/EAE8mhdnw_g/2/0/1131w/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg"
                alt="template"
              />
              <div className={s.description}>
                <span>Minimalistic CV Template</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
