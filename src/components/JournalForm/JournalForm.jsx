import { useReducer, useEffect } from 'react';

import s from './JournalForm.module.css';
import Button from '../Button/Button';

import cn from 'classnames';
import { INIT_STATE, formReducer } from './JournalForm.state.js';

const JournalForm = ({ onSubmit }) => {
  const [formState, dispatchForm] = useReducer(formReducer, INIT_STATE);

  const { isValid, isFormReadyToSubmit, values } = formState;

  useEffect(() => {
    let timerId;
    if (!isValid.title || !isValid.date || !isValid.text) {
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY' });
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
    }
  }, [isFormReadyToSubmit]);

  const addJournalItem = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    dispatchForm({ type: 'SUBMIT', payload: formProps });
  };

  return (
    <form className={s['journal-form']} onSubmit={addJournalItem}>
      <div>
        <input
          type="text"
          name="title"
          className={cn(s['input-title'], {
            [s['invalid']]: !isValid.title,
          })}
        />
      </div>
      <div className={s['form-row']}>
        <label htmlFor="date" className={s['form-label']}>
          <img src="/calendar.svg" alt="Calendar icon" />
          <span>Date: </span>
        </label>
        <input
          type="date"
          id="name"
          name="date"
          className={cn(s['input'], {
            [s['invalid']]: !isValid.date,
          })}
        />
      </div>

      <div className={s['form-row']}>
        <label htmlFor="tag" className={s['form-label']}>
          <img src="/folder.svg" alt="Folder icon" />
          <span>Tag: </span>
        </label>
        <input type="text" id="tag" name="tag" className={cn(s['input'])} />
      </div>
      <textarea
        name="text"
        id="text"
        cols="30"
        rows="10"
        className={cn(s['input'], {
          [s['invalid']]: !isValid.text,
        })}
      ></textarea>
      <Button text="Save me" />
    </form>
  );
};

export default JournalForm;
