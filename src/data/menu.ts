export const menuStructure = [
  {
    id: 'coffee',
    noteCount: 0,
    items: [
      { id: 'espresso', price: '4.50' },
      { id: 'americano', price: '5.00' },
      { id: 'drip_coffee', price: '4.50' },
      { id: 'cold_brew', price: '6.50' },
      { id: 'latte', price: '6.50' },
      { id: 'cappuccino', price: '6.50' },
      { id: 'flat_white', price: '6.75' }
    ],
  },
  {
    id: 'specialty',
    noteCount: 0,
    items: [
      { id: 'matcha_latte', price: '7.00' },
      { id: 'iced_matcha', price: '7.00' },
      { id: 'golden_milk_latte', price: '7.25' },
      { id: 'london_fog', price: '7.00' },
      { id: 'chai_latte', price: '7.00' }
    ],
  },
  {
    id: 'signature',
    noteCount: 0,
    items: [
      { id: 'candied_orange_latte', price: '7.50' },
      { id: 'lavender_latte', price: '7.50' },
      { id: 'coconut_palm_latte', price: '7.75' },
      { id: 'rum_latte', price: '9.50' }
    ],
  },
  {
    id: 'kitchen',
    noteCount: 0,
    items: [
      { id: 'yogurt_fruit_granola_bowl', price: '8.50' },
      { id: 'fruit_bowl', price: '7.50' },
      { id: 'cinnamon_bun_house_made', price: '6.50' },
      { id: 'chocolate_croissant', price: '5.50' },
      { id: 'plain_croissant', price: '5.50' },
      { id: 'biscotti', price: '4.50' },
      { id: 'madeleine_cookies', price: '4.50' },
      { id: 'chocolate_chip_cookie', price: '4.50' },
      { id: 'strawberry_tart', price: '6.50' },
      { id: 'chocolate_cake', price: '7.50' },
      { id: 'tres_leches_cake', price: '7.50' }
    ],
  },
  {
    id: 'savory',
    noteCount: 0,
    items: [
      { id: 'half_baguette_blt_served_with_sun_chips', price: '9.50' },
      { id: 'cheese_plate', price: '10.50' },
      { id: 'hummus_and_vegetables', price: '9.50' }
    ],
  },
] as const;
