import type { Company } from './companies.data';

import economic from '@/shared/assets/company-logos/economic.svg';
import nmbrs from '@/shared/assets/company-logos/nmbrs.svg';
import pontagrande from '@/shared/assets/company-logos/pontagrande.svg';
import sky from '@/shared/assets/company-logos/sky.svg';
import viaphoton from '@/shared/assets/company-logos/viaphoton.svg';
import visma from '@/shared/assets/company-logos/visma.svg';
import vodafone from '@/shared/assets/company-logos/vodafone.svg';

export const logoImages: Record<Company['id'], string> = {
  visma,
  nmbrs,
  economic,
  vodafone,
  sky,
  viaphoton,
  pontagrande,
};
