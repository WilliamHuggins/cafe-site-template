export const menuStructure = [
  {
    id: 'signature_lattes',
    noteCount: 4,
    items: [
      { id: 'tahitian_vanilla_bean', price: '$7' },
      { id: 'miso_caramel', price: '$7' },
      { id: 'ube', price: '$7.5' },
      { id: 'black_sesame', price: '$7' },
      { id: 'okinawa_brown_sugar', price: '$7' },
      { id: 'mission_mocha', price: '$7.5' },
    ],
  },
  {
    id: 'coffee',
    noteCount: 2,
    items: [
      { id: 'pour_over_blend', price: '$5' },
      { id: 'single_origin_pour_over', price: 'MP' },
      { id: 'cold_brew_blend', price: '$5' },
      { id: 'slow_drip_cold_brew', price: 'MP' },
    ],
  },
  {
    id: 'espresso',
    noteCount: 3,
    items: [
      { id: 'espresso', price: '$4' },
      { id: 'espresso_tonic', price: '+$2' },
      { id: 'cortado', price: '$4.5' },
      { id: 'flat_white', price: '$5' },
      { id: 'latte', price: '$5.5' },
      { id: 'mocha', price: '$7.5' },
      { id: 'single_origin_espresso', price: 'MP' },
    ],
  },
  {
    id: 'matcha_hojicha',
    noteCount: 4,
    items: [
      { id: 'matcha_americano', price: '$5' },
      { id: 'matcha_latte', price: '$7' },
      { id: 'hojicha_latte', price: '$7.5' },
      { id: 'strawberry_matcha', price: '$8' },
      { id: 'earl_grey_matcha_latte', price: '$8' },
    ],
  },
  {
    id: 'tea',
    noteCount: 0,
    items: [
      { id: 'earl_grey_supreme', price: '$3' },
      { id: 'iron_goddess_of_mercy', price: '$4' },
      { id: 'moonlight_jasmine', price: '$4' },
      { id: 'scarlett', price: '$5' },
      { id: 'london_fog', price: '$6' },
    ],
  },
  {
    id: 'toast',
    noteCount: 2,
    items: [
      { id: 'pb_and_banana', price: '$7' },
      { id: 'ricotta_toast', price: '$11' },
      { id: 'avocado_toast', price: '$15' },
      { id: 'smoked_salmon_toast', price: '$15' },
    ],
  },
] as const;
