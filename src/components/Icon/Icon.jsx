import PropTypes from 'prop-types';
import { ReactComponent as RefreshBgIcon } from '../../assets/icons/refresh.svg';
import { ReactComponent as ThunderstormRainIcon } from '../../assets/icons/weather/tstorm.svg';
import { ReactComponent as ThunderstormDrizzleIcon } from '../../assets/icons/weather/tstormdrizzle.svg';
import { ReactComponent as FlurriesDayIcon } from '../../assets/icons/weather/flurriesd.svg';
import { ReactComponent as FlurriesNightIcon } from '../../assets/icons/weather/flurriesn.svg';
import { ReactComponent as RainIcon } from '../../assets/icons/weather/rain.svg';
import { ReactComponent as ShowerRainDayIcon } from '../../assets/icons/weather/chanceraind.svg';
import { ReactComponent as ShowerRainNightIcon } from '../../assets/icons/weather/chancerainn.svg';
import { ReactComponent as SnowDayIcon } from '../../assets/icons/weather/snowd.svg';
import { ReactComponent as SnowNightIcon } from '../../assets/icons/weather/snown.svg';
import { ReactComponent as LightSnowIcon } from '../../assets/icons/weather/chancesnow.svg';
import { ReactComponent as SleetDayIcon } from '../../assets/icons/weather/sleetd.svg';
import { ReactComponent as SleetNightIcon } from '../../assets/icons/weather/sleetn.svg';
import { ReactComponent as FogDayIcon } from '../../assets/icons/weather/fogd.svg';
import { ReactComponent as FogNightIcon } from '../../assets/icons/weather/fogn.svg';
import { ReactComponent as ClearSkyDayIcon } from '../../assets/icons/weather/cleard.svg';
import { ReactComponent as ClearSkyNightIcon } from '../../assets/icons/weather/clearn.svg';
import { ReactComponent as CloudyDayIcon } from '../../assets/icons/weather/cloudyd.svg';
import { ReactComponent as CloudyNightIcon } from '../../assets/icons/weather/cloudyn.svg';
import { ReactComponent as ScatteredCloudsDayIcon } from '../../assets/icons/weather/scatteredcloudsd.svg';
import { ReactComponent as ScatteredCloudsNightIcon } from '../../assets/icons/weather/scatteredcloudsn.svg';
import { ReactComponent as BrokenCloudsDayIcon } from '../../assets/icons/weather/mostlycloudyd.svg';
import { ReactComponent as BrokenCloudsNightIcon } from '../../assets/icons/weather/mostlycloudyn.svg';
import { ReactComponent as UnknownPrecipitationIcon } from '../../assets/icons/weather/unknown.svg';
import { ReactComponent as DefaultWeatherIcon } from '../../assets/icons/weather/default.svg';

let TypeToIconMap = {
  refreshBg: <RefreshBgIcon />,
  thunderstormRain: <ThunderstormRainIcon />,
  thunderstormDrizzle: <ThunderstormDrizzleIcon />,
  flurriesDay: <FlurriesDayIcon />,
  flurriesNight: <FlurriesNightIcon />,
  rain: <RainIcon />,
  showerRainDay: <ShowerRainDayIcon />,
  showerRainNight: <ShowerRainNightIcon />,
  snowDay: <SnowDayIcon />,
  snowNight: <SnowNightIcon />,
  lightSnow: <LightSnowIcon />,
  sleetDay: <SleetDayIcon />,
  sleetNight: <SleetNightIcon />,
  fogDay: <FogDayIcon />,
  fogNight: <FogNightIcon />,
  clearSkyDay: <ClearSkyDayIcon />,
  clearSkyNight: <ClearSkyNightIcon />,
  cloudyDay: <CloudyDayIcon />,
  cloudyNight: <CloudyNightIcon />,
  scatteredCloudsDay: <ScatteredCloudsDayIcon />,
  scatteredCloudsNight: <ScatteredCloudsNightIcon />,
  brokenCloudsDay: <BrokenCloudsDayIcon />,
  brokenCloudsNight: <BrokenCloudsNightIcon />,
  unknownPrecipitation: <UnknownPrecipitationIcon />,
};

TypeToIconMap = new Proxy(TypeToIconMap, {
  get: (target, type) => {
    if (type in target) {
      return target[type];
    }

    return <DefaultWeatherIcon />;
  },
});

const Icon = ({ type }) => TypeToIconMap[type];

Icon.propTypes = { type: PropTypes.string };

Icon.defaultProps = { type: '' };

export default Icon;
