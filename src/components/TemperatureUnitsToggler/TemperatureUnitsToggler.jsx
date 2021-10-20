import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Button from '../Button/Button';
import { toggleTemperatureUnits } from '../../actions/temperatureActions';

const TemperatureUnitsToggler = () => {
  const dispatch = useDispatch();
  const temperatureUnitsType = useSelector(
    (state) => state.temperature.temperatureUnitsType,
  );

  useEffect(() => {
    localStorage.setItem('temperatureUnitsType', temperatureUnitsType);
  }, [temperatureUnitsType]);

  return (
    <div className='controls__toggler'>
      <Button
        className='controls__button'
        onClick={() => dispatch(toggleTemperatureUnits('fahrenheit'))}
        active={temperatureUnitsType === 'fahrenheit' ? true : null}
      >
        &deg;F
      </Button>
      <Button
        className='controls__button'
        onClick={() => dispatch(toggleTemperatureUnits('celsius'))}
        active={temperatureUnitsType === 'celsius' ? true : null}
      >
        &deg;C
      </Button>
    </div>
  );
};

export default TemperatureUnitsToggler;
