import { CategoryEnum, SortEnum } from '@/types';

import { getSelectData } from '../helpers/getSelectData';

export const CATEGORIES = getSelectData(CategoryEnum);

export const SORTS = getSelectData(SortEnum);
