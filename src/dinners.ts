export interface Course {
  num: string;
  name?: string;
  detail?: string;
}

export interface Dinner {
  slug: string;
  theme: string;
  courses: Course[];
}

export const metamorphosis: Dinner = {
  slug: 'metamorphosis',
  theme: 'Metamorphosis',
  courses: [
    {
      num: 'I',
      name: 'Philemon and Baucis',
      detail: 'focaccia, tomato, olive, ricotta, honey, butter',
    },
    {
      num: 'II',
      name: "Midas' Touch",
      detail: 'pomme purée, blackened onion, gold tuile',
    },
    {
      num: 'III',
      name: 'Minotaur',
      detail: 'sirloin, quail egg, capers, twice-fried chips, porcini labyrinth',
    },
    {
      num: 'IV',
      name: 'Glaucus',
      detail: 'monkfish mosaic, frozen passion fruit, fermented beurre monté, chive oil',
    },
    {
      num: 'V',
      name: 'Medusa',
      detail: 'squid ink pasta, roe, python, stone',
    },
    {
      num: 'VI',
      name: 'Echo and Narcissus',
      detail: 'lemon tart, cream, reflection',
    },
  ],
};

// TODO: fill in the Prometheus courses; unnamed courses show as "?".
export const prometheus: Dinner = {
  slug: 'prometheus',
  theme: 'Prometheus',
  courses: [{ num: 'I' }, { num: 'II' }, { num: 'III' }, { num: 'IV' }, { num: 'V' }, { num: 'VI' }],
};

// Most recent first.
export const pastDinners: Dinner[] = [metamorphosis, prometheus];
