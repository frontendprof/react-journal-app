import { useState, useEffect } from 'react';

import s from './JournalForm.module.css';
import Button from '../Button/Button';

import cn from 'classnames';

const INIT_STATE = {
  title: true,
  text: true,
  date: true,
};

const JournalForm = ({ onSubmit }) => {
  const [formValid, setFromValid] = useState(INIT_STATE);

  useEffect(() => {
    let timerId;
    if (!formValid.title || !formValid.date || !formValid.text) {
      timerId = setTimeout(() => {
        setFromValid(INIT_STATE);
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [formValid]);

  const addJournalItem = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    let isFormValid = true;

    if (!formProps.title?.trim().length) {
      setFromValid((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setFromValid((state) => ({ ...state, title: true }));
    }

    if (!formProps.text?.trim().length) {
      setFromValid((state) => ({ ...state, text: false }));
      isFormValid = false;
    } else {
      setFromValid((state) => ({ ...state, text: true }));
    }

    if (!formProps.date.length) {
      setFromValid((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setFromValid((state) => ({ ...state, date: true }));
    }
    if (!isFormValid) {
      return;
    }

    onSubmit(formProps);
  };

  return (
    <form className={s['journal-form']} onSubmit={addJournalItem}>
      <div>
        <input
          type="text"
          name="title"
          className={cn(s['input-title'], {
            [s['invalid']]: !formValid.title,
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
            [s['invalid']]: !formValid.date,
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
          [s['invalid']]: !formValid.text,
        })}
      ></textarea>
      <Button text="Save me" />
    </form>
  );
};

export default JournalForm;
