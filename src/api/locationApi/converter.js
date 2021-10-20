import { LocationItem } from '../../common/entities/locationEntities';

const converter = ({ results: [{ components }] }) => (
  new LocationItem({ locality: components.city, country: components.country })
);

export default converter;
