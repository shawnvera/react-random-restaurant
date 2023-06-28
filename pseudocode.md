**Procedural**

BEGIN

*MoSCoW*

    Must haves:

    1.	Wireframes for the website design include as photos and/or screenshots
    2.	Generate the following information:
        2a. -   Lex eat! 
            -   coffeeCode
            -   Bold Burritos
        2b. - 0 Wildcat space Lexington, KY 40511
        2c. - Tuesday - Sunday 11 am - 11 pm
    3.	Create a dynamic restaurant menu
        5a. Choose a specific menu section type to display (Appetizers, Pasta, Sandwiches)
        5b. Dynamically render at least 15 menu items.
        5c. The menu section you decide to display should have its own view as an organism (for example, a bootstrap accordion or nav tabs)
        5d. Each menu item must be a molecule (for example, using a bootstrap card or list item with the name, and the price, etc)
    6.	Manage the React Component State
    7.	Website must be responsive
    8.	Website must be styled

    Should haves:

    1. Pepper Emojis/icons/pictures for spicy level
    2. Change menu display based on the time of day (breakfast, brunch, lunch, etc)
    3. Create an MVP assigning points to user stories using the Fibonacci method.
    4. Modify your Title and Meta Tags using create-react-app.

    Could haves:

    1. Use NPM to embed a Google Map component showing the location of the restaurant.
    2. Include a different 'specials' menu for each day of the week that the restaurant is open and show that menu based on the current day (should prove to work throughout the week) as well as what was on the specials menu yesterday/ what will be on the specials menu tomorrow. Can be done randomly and keep in localStorage so it never changes.
    3. Use React Context
    4. Parse the results of the API call to show a list of sides available for substitution (either in addition to or instead of listing sides with each entree). Show spicy level with some indication. Group by cuisine. Lots of options here to go above and beyond.

    Won’t haves:

    1.	Implement DoorDash style online ordering with parent-child component state management and a 'shopping cart' to save data for purchase.
    2.	Create your own JSON and upload to the jsonkeeper.com to customize your items. (Structure could also change)

State:

1. User's cart
2. Current menu section displayed


INIT load into the splash menu page (menu may change depending on the time of day?)

RENDER the restaurant name and location will show at the top of the page

There will be a organism at the top of the page with the information about the restaurant and the NAVBAR

Restaurant name is an atom as well as the location

Restaurant and location together is a molecule?

The menu items will display under the NAVBAR 

The menu will contain at least 15 items

Each item will have it's own price

Maybe each item could have it's own emoji?

Each item will be it's own molecule with bootstrap styling (maybe a card?)

Background color of the menu should be a less saturated color

Maybe chroma colors?

Use adobe colors to select color pallette

Include pictures on the page?

END

**Functional**

Variables:

menuItems = [at least 15 items]


Functions:



**OOP**

menu = {

    menuSections = {

        appetizers = [],
 
        lunch = [],
 
        dinner = []
 
    }
}


**React JS**

Components:

NavBar 
Menu
Footer
Header