export interface Company {
  id: 'visma' | 'nmbrs' | 'economic' | 'vodafone' | 'sky' | 'viaphoton' | 'pontagrande';
  alt: string;
}

export const companies: Company[] = [
  { id: 'visma', alt: 'Visma' },
  { id: 'nmbrs', alt: 'Nmbrs' },
  { id: 'economic', alt: 'e-conomic' },
  { id: 'vodafone', alt: 'Vodafone' },
  { id: 'sky', alt: 'Sky' },
  { id: 'viaphoton', alt: 'viaPhoton' },
  { id: 'pontagrande', alt: 'Ponta Grande Resort' },
];
