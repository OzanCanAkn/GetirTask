![image](https://user-images.githubusercontent.com/48286710/145713370-9c2b02a4-8368-4ddc-aa8c-838264dffdfb.png)


## Development Proccess

### `Structure: `
At project structure I tried to use component based structure for making my work reusable. Then I collect them at the components directory in src. Used scripts named “Api” for fetching data from my fake json server. Decided to use the Heroku app for hosting my fake-json server.  And also I wrote an arrow function which returns http get request query according to changed filters. I decided to use redux so nearly didn’t use prop drilling.


### `Styling: `
Material.ui library used generally for creating my components and that is easy to style because of override ability .
I used jss for my styling events because reading and copying css in js elements are easy. 
The checkbox and radio button items were hard to create for me because I styled them from span.
### `Responsive Design: `
For browser compatibility I used flex boxes in nearly every component I use. Tried nearly every combination and designed again for compatibility. And I got approximately 90 points on the accessibility part of the lighthouse a11y test.
### `Layouts: `
For making the app more responsive I decided to implement two different layouts one of them for large screens and the other for small screens. When the small screen layout opens our filters and cart opens when we click buttons. Large screen layout is the same as the one given in the .fig file.
### `Tests: `
For understanding whether a component is rendered without crush I wrote a test file. But I know it wasn't complicated. In complex projects components need more complexible tests.
### `Redux: `
For managing my states I used Redux. I think redux is more usable when we 
compare according to the dynamism of the program. I have 8 different reducer types.

`Reducers: `
##### dataReducer:
Basically holds the data which will be displayed.
##### brandsReducer:
Stores brands tooks three different values => (map) for shirts brands,(map) mug brands,(list) checked (map structure is {brand-slug:{brand-name:count} for counting easy)
##### tagsReducer:
Stores tags tooks three different values => (map) for shirts tags,(map) mug tags,(list) checked (map structure is {tag:count})
##### chartReducer:
It holds items which are in the cart and quantities of those items.
##### itemTypeReducer:
Variable for determining whether an item is a mug or shirt.
##### pageReducer:
Contains initial page number and total pages number.
##### sortReducer:
For defining a type of sort that contains just an index which is index of array in sort component in shown order.
### `Lighthouse:`
Tried to improve performance but some compress techniques needed I guess. And I didn't want to give width and height values of images for responsiveness but that reduced performance a bit.

![image](https://user-images.githubusercontent.com/48286710/145710863-fe2c37f8-a24f-44ed-aa8a-fceb59ca25d5.png)
