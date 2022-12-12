import { IContent } from '../@types';
import contentJSON from '../content/content.json';

function getContent(): IContent {
    return contentJSON as IContent
}

export default getContent;