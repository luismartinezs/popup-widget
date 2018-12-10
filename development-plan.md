Description:
- Basic product page
    - Text / image description
    - Button that opens a pop up (modal)
- Modal widget:
    - 2 tabs:
        - Main product
        - Product recommendations
    - Sleek design

General tasks:
- Create basic product page
    - Heading
    - Content section: list of items
- imports data from API
- Product page shows basic info on some items:
    - Title
    - Thumbnail (use this: https://picsum.photos/ or something similar)
    - Button (+): on click, open modal
- Modal shows two tabs
- Tab1 shows additional item info

Specific tasks:
STEP 1: Create static UI
- Create single item view in page: title, img, button
    - all images have same size (use fixed size div and background-size: canvas)
- Create HOC that shows gallery of n items
- Make img box be of fixed size: 150, 200
- make each thumbnail be different
- Add '+' btn to each img
- make + btn open up a modal

- hide item title and subtitle
- on hover over img:
    - opacity mask
    - title and subtitle
    - + btn