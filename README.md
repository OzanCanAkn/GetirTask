## Development Proccess

In the project directory, you can run:

### `Structure: `
At project structure I tried to use component based structure for making my work reusable. Then I collect them at the components directory in src. Used scripts named “Api” for fetching data from my fake json server. Decided to use the Heroku app for hosting my fake-json server.  And also I wrote an arrow function which returns http get request query according to changed filters. I decided to use redux so nearly didn’t use prop drilling.
###`Redux:`
	For managing my states I used Redux. I think redux is more usable when we compare according to the dynamism of the program. I have 8 different reducer types.
###`Styling: `
	Material.ui library used generally for creating my components and that is easy to style because of override ability . I used jss for my styling events because reading and copying css in js elements are easy. The checkbox and radio button items were hard to create for me because I styled them from span.
###`Responsive Design:`
	For browser compatibility I used flex boxes in nearly every component I use. 
Tried nearly every combination and designed again for compatibility. And I got approximately 90 points on the accessibility part of the lighthouse a11y test.
###`Layouts:`
	For making the app more responsive I decided to implement two different layouts one of them for large screens and the other for small screens. When the small screen layout opens our filters and cart opens when we click buttons. Large screen layout is the same as the one given in the .fig file.
###`Tests:`
	For understanding whether a component is rendered without crush I wrote a test file. But I know it wasn't complicated. In complex projects components need more complexible tests..

