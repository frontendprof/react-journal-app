import { useReducer, useEffect,useRef } from 'react';

import s from './JournalForm.module.css';
import Button from '../Button/Button';

import cn from 'classnames';
import { INIT_STATE, formReducer } from './JournalForm.state.js';

const JournalForm = ({ onSubmit }) => {
  const [formState, dispatchForm] = useReducer(formReducer, INIT_STATE);

  const { isValid, isFormReadyToSubmit, values } = formState;
    const titleRef=useRef();
    const dateRef=useRef();
    const textRef=useRef();

    const focusError=(isValid)=>{
      switch(true){
        case !isValid.title:
          titleRef.current.focus();
          break;
        
        case !isValid.date:
          dateRef.current.focus();
          break;

        case !isValid.text:
          textRef.current.focus();
          break;
      }
    };


  useEffect(() => {
    let timerId;
    if (!isValid.title || !isValid.date || !isValid.text) {
      focusError(isValid);
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
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isFormReadyToSubmit, values, onSubmit]);

  const onChange = (e) => {
    dispatchForm({
      type: 'SET_VALUES',
      payload: { [e.target.name]: e.target.value },
    });
  };

  const addJournalItem = (e) => {
    e.preventDefault();

    dispatchForm({ type: 'SUBMIT' });
  };

  return (
    <form className={s['journal-form']} onSubmit={addJournalItem}>
      <div>
        <input
          type="text"
          name="title"
          onChange={onChange}
          value={values.title}
          ref={titleRef}
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
          id="date"
          ref={dateRef}

          value={values.date}
          name="date"
          onChange={onChange}
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
        <input
          type="text"
          id="tag"
          name="tag"
          className={cn(s['input'])}
          value={values.tag}
          onChange={onChange}
        />
      </div>
      <textarea
        name="text"
        id="text"
        cols="30"
        rows="10"
        ref={textRef}

        onChange={onChange}
        value={values.text}
        className={cn(s['input'], {
          [s['invalid']]: !isValid.text,
        })}
      ></textarea>
      <Button text="Save me" />
    </form>
  );
};

export default JournalForm;
