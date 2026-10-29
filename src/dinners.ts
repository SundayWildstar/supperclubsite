export interface Course {
  num: string;
  name?: string;
  detail?: string;
}

export interface Dinner {
  slug: string;
  theme: string;
  // Path under public/; defaults to the shared menu background.
  background?: string;
  courses: Course[];
}

// Courses are revealed over time; unnamed courses show as "?".
export const grimm: Dinner = {
  slug: 'grimm',
  theme: "Grimm's Fairy Tales",
  background: '/grimm-background.jpg',
  courses: [{ num: 'I' }, { num: 'II' }, { num: 'III' }, { num: 'IV' }, { num: 'V' }, { num: 'VI' }],
};

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

// Course VI was never revealed on the original Prometheus site, so it stays "?".
export const prometheus: Dinner = {
  slug: 'prometheus',
  theme: 'Prometheus',
  background: '/prometheus-background.jpg',
  courses: [
    {
      num: 'I',
      name: 'Pebbles',
      detail: 'golden potatoes, kaolin clay, ash salt, spiced aioli',
    },
    {
      num: 'II',
      name: 'Coal to Ember',
      detail: 'popover, smoked honey, charcoal, rosemary, chili butter',
    },
    {
      num: 'III',
      name: 'Before the Flame',
      detail: 'salmon, dry ice, yuzu gelée, chive oil, toasted scallions',
    },
    {
      num: 'IV',
      name: 'The Body',
      detail:
        'bone marrow brûlée, grilled pain au crystal, pickled parsley & shallots, blackberry, foie gras',
    },
    {
      num: 'V',
      name: 'The Bird',
      detail: 'quail, blood orange, leek confit, lavender, jammy tomato',
    },
    { num: 'VI' },
  ],
};

// Most recent first.
export const pastDinners: Dinner[] = [metamorphosis, prometheus];
