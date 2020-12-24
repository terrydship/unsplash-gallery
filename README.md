# Unsplash Gallery Demo

It is a coding challenge bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### General Info

* This application loads a list of random photos using `Unsplash` API, and displays them in `PhotoGrid` while preserving their original aspect ratios.
* User can scroll down on `PhotoGrid` infinitely to load more photos until it reaches the `LOADING_THRESHOLD` as configured in `Main`.
* User can click the icon on a photo in `PhotoGrid` to open `PhotoViewer` and show it in full screen mode.
* `PhotoViewer` shows the photo description and provides arrows to navigate user to the previous/next photo if available.
* Upon closing `PhotoViewer`, user will be taken back to `PhotoGrid` and scrolled to the last photo seen in the `PhotoViewer`.

### Prerequisites

* Install Node.js.
* Install the local IDE (i.e. IntelliJ).

### Run in a local IDE

* Clone the project from [GitHub](https://github.com/terrydship/unsplash-gallery) to your local IDE.
* Resolve all the npm dependencies by running the following command in the project directory.
```
npm install
```
* Start the application by running the following command in the project directory.
```
npm start
```
