import { ImageItem } from '../../common/entities/imageEntities';

const converter = ({ urls: { raw } }) => new ImageItem({ url: `${raw}&w=1650&dpr=2` });

export default converter;
