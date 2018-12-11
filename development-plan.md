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

- hide item title and subtitle
- on hover over img:
    - opacity mask
    - title and subtitle
    - + btn

- make + btn open up a modal
- modal fills most of the window up to a specific max height and width
- there is a margin between the modal border and the window border
- modal has 2 tabs:
    - tab1: "item", has info title, description, director, producer, year, rating, large image, etc: same layout as I have in ghibli project
    - tab2: has list of related items "you may also like"

- API gets called and passed data to each item
- Modal shows data relative to image that was clicked, and shows the same image

Maybe:
- When click "love" button, heart pieces come out and vanish
- Sometimes the picsum API returns error, handle it >> decreased max image index
- Given an ID, the image returned by picsum API is different for different image sizes