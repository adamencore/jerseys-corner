// Jersey's Corner — full menu data, transcribed from menu photos

const MENU_DATA = [
  {
    id: 'starters',
    name: 'Starters',
    blurb: 'Snacks, shareables, and the small stuff.',
    items: [
      { name: 'Fry Basket', desc: 'Choice of coil or flat crispy. Served with house fry sauce. Add nacho cheese +$1.', price: '5' },
      { name: 'Onion Tangler Basket', desc: 'Crispy fried onions served with house chipotle garlic ranch.', price: '6' },
      { name: 'Tater Ring Basket', desc: 'Served with house fry sauce. Top with nacho cheese for $1.', price: '6.50' },
      { name: 'Fried Pickles', desc: 'Hand-breaded and served with house creole aioli.', price: '8' },
      { name: 'Mac & Cheese Bites', desc: 'Golden, crispy, and served with house chipotle garlic ranch.', price: '6.50' },
      { name: 'Chicken Wings', desc: 'Plain, garlic parm, sweet teriyaki, BBQ, buffalo, hot honey garlic, or mango habanero. Served with ranch.', price: '11.50', meta: ['8 pcs'] },
      { name: 'Boneless Wings', desc: 'Tossed in any wing sauce. Served with ranch or blue cheese.', price: '12' },
      { name: 'Chicken Pesto Flatbread', desc: 'Grilled chicken, pesto, mozzarella, sun-dried tomatoes, and a balsamic glaze drizzle.', price: '12.50' },
      { name: 'Chicken Bacon Ranch Flatbread', desc: 'Crispy chicken, cheddar, bacon, and ranch with a jalapeño ranch drizzle.', price: '12.50' },
      { name: 'Cheddar Jalapeño Poppers', desc: 'Six poppers, served with house ranch.', price: '8.50' },
    ],
  },
  {
    id: 'salads',
    name: 'Salads',
    blurb: 'Dressings: ranch, blue cheese, italian, 1000 island, honey mustard, blood orange shallot vinaigrette.',
    items: [
      { name: 'House Salad', desc: 'Green leaf lettuce, grape tomatoes, cucumbers, cheddar, and croutons with choice of dressing.', price: '6.50' },
      { name: 'Orange Chicken Salad', desc: 'Crispy or grilled chicken, shredded carrots, tomatoes, cucumbers, crispy noodles, and mandarin oranges with blood orange shallot vinaigrette.', price: '14.50' },
      { name: 'Chef Salad', desc: 'Grilled chicken, grape tomatoes, shredded carrots, cucumbers, cheddar, swiss, and hardboiled egg with choice of dressing.', price: '14.50' },
    ],
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches & Wraps',
    blurb: 'Served with flat fries, coil fries, onion tanglers, or a side salad.',
    items: [
      { name: 'Original Chicken Sandwich', desc: 'Grilled or crispy chicken breast with chipotle mayo, red onion, tomato, and lettuce on brioche bun.', price: '15.50', meta: ['House Favorite'], featured: true },
      { name: 'Hot Honey Garlic Chicken', desc: 'Crispy chicken breast tossed in hot honey garlic sauce with house ranch and pickles on brioche bun.', price: '15.50', meta: ['Spicy'] },
      { name: 'Pastrami Reuben', desc: 'Pastrami, swiss, sauerkraut, and house 1000 island on grilled marble rye.', price: '15' },
      { name: 'Philly Cheesesteak', desc: 'Thin sliced beef, grilled onions, red peppers, and mushrooms topped with cheese sauce on garlic toasted hoagie.', price: '17' },
      { name: 'Bacon Mac Grilled Cheese', desc: 'House mac & cheese, bacon, cheddar, and chipotle aioli on grilled sourdough.', price: '16' },
      { name: "Not Yo Mama's Grilled Cheese", desc: 'Shredded beef, house pickled onions, swiss, blackberry jam, and lettuce on grilled sourdough.', price: '17' },
      { name: 'Veggie Sandwich', desc: 'Cucumber, red onion, tomato, avocado, shredded carrots, sprouts, lettuce, and chipotle mayo on croissant.', price: '14.50', meta: ['Veggie'] },
      { name: 'Chicken Bacon Ranch Wrap', desc: 'Crispy or grilled chicken, bacon, cheddar, lettuce, and house ranch in plain or tomato basil tortilla.', price: '15' },
      { name: 'Veggie Wrap', desc: 'Cream cheese, cucumber, red onion, tomato, avocado, shredded carrots, sprouts, lettuce, and chipotle aioli in plain or tomato basil tortilla.', price: '15', meta: ['Veggie'] },
    ],
  },
  {
    id: 'burgers',
    name: 'Burgers',
    blurb: '6oz patties on brioche buns. Gluten free bun +$2.50. Served with choice of fries, tanglers, or a side.',
    items: [
      { name: 'Plain Jane', desc: 'American cheese, onion, tomato, lettuce, and house burger sauce.', price: '13' },
      { name: 'Garlic Lovers', desc: 'American cheese, grilled onions, and garlic aioli.', price: '14' },
      { name: 'Western', desc: 'American cheese, onion tanglers, and BBQ sauce. Add bacon +$2.', price: '14' },
      { name: 'Mac Attack', desc: 'Cheddar, bacon, house mac & cheese, and chipotle aioli.', price: '16' },
      { name: 'Pastrami Burger', desc: 'Swiss, pastrami, onion, tomato, lettuce, and house burger sauce.', price: '16.50' },
      { name: 'TKO', desc: 'Pepper jack cheese, jalapeño poppers, bacon, and jalapeño ranch.', price: '16', meta: ['Spicy'] },
      { name: 'Farm Burger', desc: 'American cheese, bacon, fried egg, onion, tomato, lettuce, and house burger sauce.', price: '16.50' },
      { name: 'Gyro Burger', desc: 'Topped with lamb/beef gyro meat, onion, tomato, lettuce, tzatziki, and feta.', price: '17' },
      { name: 'Big Bad Boy', desc: 'Three 6oz patties layered with bacon, pastrami, grilled onions, pepper jack, swiss, tomato, onion, lettuce, and burger sauce.', price: '25', meta: ['Big appetite'], featured: true },
    ],
  },
  {
    id: 'localfaves',
    name: 'Local Faves',
    blurb: 'Served with choice of side.',
    items: [
      { name: 'Smash Burger Tacos', desc: 'Mini bacon smash burgers in street tacos: beef, diced pickles, cheddar, bacon, lettuce, and chipotle garlic ranch in flour tortillas. Three to an order.', price: '14.35', featured: true },
      { name: 'Carnita Tacos', desc: 'Shredded pork, avocado, salsa verde, oaxaca cheese, and crispy chicharrones in warm corn tortillas. Three to an order.', price: '13.95' },
      { name: 'Greek Gyro', desc: 'Lamb and beef gyro meat with red onion, tomato, lettuce, tzatziki, and feta in a warm pita. Served with greek seasoned flat fries.', price: '17' },
      { name: 'Pig Pen', desc: 'Shredded pork, jalapeños, house BBQ, pepper jack, and onion tanglers on a brioche bun.', price: '16' },
      { name: 'Bubba Mac', desc: 'Crispy chicken breast, house mac and cheese, black truffle hot sauce, and mayo on a brioche bun.', price: '16' },
      { name: 'Dirty South Grilled Cheese', desc: 'House mac and cheese, BBQ pulled pork, and cheddar on grilled sourdough.', price: '17' },
      { name: 'Bacon Mushroom Swiss Burger', desc: '6oz patty, grilled mushrooms, bacon, swiss, and burger sauce on a brioche bun.', price: '16' },
    ],
  },
  {
    id: 'dinner',
    name: 'Dinner Platters',
    blurb: 'Hearty mains, plated up.',
    items: [
      { name: 'Chicken Parmesan', desc: 'Breaded chicken breast with marinara, melted mozzarella, and parmesan on linguine. Side salad and roll.', price: '19.50' },
      { name: 'Chicken Basil Alfredo', desc: 'Fire-braised chicken on linguine with house basil alfredo and parmesan. Side salad and roll.', price: '19.50' },
      { name: 'Herb Butter Rib Eye', desc: '12oz ribeye with house herb butter, basil pesto mashed potatoes, garlic green beans, side salad, and a roll.', price: '32', featured: true },
    ],
  },
  {
    id: 'kids',
    name: 'For the Kiddos',
    items: [
      { name: 'Fluffernutter Sandwich', desc: 'Creamy peanut butter and marshmallow cream on grilled texas toast with coil fries.', price: '8.50' },
      { name: 'Grilled Cheese', desc: 'American cheese on grilled texas toast with coil fries.', price: '7.50' },
      { name: 'Chicken Finger Basket', desc: 'Four chicken fingers with coil fries and ranch.', price: '12.50' },
      { name: 'Flatbread Pizza', desc: '5-inch flatbread with marinara and choice of cheese or pepperoni.', price: '8.50' },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    items: [
      { name: 'Fountain Soda', desc: 'Coke, Diet Coke, Dr. Pepper, Sprite, Orange Fanta, Pink Lemonade.', price: '2.50' },
      { name: 'Iced or Hot Tea', desc: '', price: '2' },
      { name: 'Coffee', desc: '', price: '2' },
      { name: 'Hot Chocolate', desc: '', price: '2.50' },
      { name: 'Cappuccino', desc: 'Vanilla or mocha.', price: '2.50' },
      { name: 'Juice', desc: 'Orange or apple.', price: '2' },
      { name: 'Milk', desc: '', price: '2' },
    ],
  },
];

window.MENU_DATA = MENU_DATA;
