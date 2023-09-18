export const INIT_STATE = {
  isValid: {
    title: true,
    text: true,
    date: true,
  },
  values: {
    title: undefined,
    text: undefined,
    date: undefined,
  },
  isFormReadyToSubmit: false,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'RESET_VALIDITY':
      return { ...state, isValid: INIT_STATE.isValid };

    case 'SUBMIT': {
      const titleValidity = action.payload.title?.trim().length;
      const textValidity = action.payload.text?.trim().length;
      const dateValidity = action.payload.date;

      return {
        values: action.payload,
        isValid: {
          title: titleValidity,
          text: textValidity,
          date: dateValidity,
        },
        isFormReadyToSubmit: titleValidity && textValidity && dateValidity,
      };
    }
  }
};
