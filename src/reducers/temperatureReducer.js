import { TOGGLE_TEMPERATURE_UNITS } from '../actions/temperatureActions';

const temperatureUnitsType = localStorage.getItem('temperatureUnitsType') || 'celsius';

const initialState = { temperatureUnitsType };

export const temperatureReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TEMPERATURE_UNITS:
      return { temperatureUnitsType: action.payload };

    default:
      return state;
  }
};
