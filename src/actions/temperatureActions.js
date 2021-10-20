export const TOGGLE_TEMPERATURE_UNITS = 'TOGGLE_TEMPERATURE_UNITS';

export const toggleTemperatureUnits = (unit) => ({
  type: TOGGLE_TEMPERATURE_UNITS,
  payload: unit,
});
