# Andorra Hikes with API - re-development: 5th May 2025

> [!NOTE]
> The original project was made in around a week: from 11th March to 19th March 2025. See Screenshot One.

This was one of the first ideas that I had when I started out on my own as it's something that I do a lot in my free time so I knew that I would be much more motivated to develop the idea instead of doing something generic as part of a course, as I had been doing.

Upon completing the original app, I came across another idea for various English language apps (see my Reported Speech and Gerunds and Infinitives Dominoes apps) and those took me right up to the end of April. The plan is now to do a review of this project both to see how it has aged in line with my abilities and also to add a the Leaflet API.

> [!CAUTION]
> Below are the notes from the original project which I will leave here for my own perusal

### User Story Original

- These are all of the hikes in Andorra. I have them as individual physical leaflets but it would be good to search for them by difficulty and area.
- At the moment you just search by number.
- Time, distance and elevation gain and loss needs to be added for more interactivity.
- The final goal is to get the requested data using Promises in JS.
- For example, I want to do a hike in Encamp and I want something under two hours but difficult ('blue' or 'red').
- There will also be a selection for 'circular' or not, meaning that the trail is based on a loop that ends where it started and not by using the same trail to descend.

### To improve original - 11th March 2025

- capability to save hikes to favourites and toggle done etc.; add to to-do
- figure out the best way to get the hikes from local JSON file - DONE
- utilise innerHTML more - DONE using object destructuring
- use ID from the beginning. The hikes do actually come with a number...
- SORT function - DONE
- images are not really of concern here but maybe a carousel would be good
- clean HTML design with nice clear transitions and search fields - opted against search fields
- randomise button - DONE

# Version Two

### Improvements

I would really like to host the data somewhere as if it were a real API. By far the most labour-intensive task here was inputting the data from the physical leaflets to the JSON file. There was no other obvious way to do this as it isn't in as much detail online - one of the driving factors behind the project.

These are the aspects that I'm going to focus on for v2:

- removing anything that is not required: Sort by option - DONE
- add map using Leaflet - DONE
- (possibly with current location request) - DONE
- add color guidance or borders to activate once the hikes have been sorted by parish and difficulty - DONE
- add animation to the 'key' - clickme bounce - DONE
- add counter - DONE
- add functionality to check-in to refuge - not sure about this one - NOT DONE
- digital passport which would digitize the currently available one - NOT DONE
- add to favourites - DONE.. >> REMOVE FROM FAVOURITES >> DONE
- a suggestion was to have a short video of each showing what they are really like
- ADD HUTS and rating - NOT DONE
- Route maps?? hard work - LOOKED INTO BUT NOT GOING TO DO

### Screenshots

1. Showing the original project that was made in around a week. I was very happy with the result despite its basic appearance. The addition of the Leaflet API should fit nicely into the available space.

![screenshot-one](src/images/screenshot-one.png)

2. After a couple of hours work there is a change in design and I've added user options to the right of the hike information card: favourite, completed and to-do. I'm going to have these as fully functional and save the events in a menu area or pop-up window.

![screenshot-two](src/images/screenshot-two.png)

3. This was the first task that I got stuck on. I was trying to figure out how to organise the hikes into various colour-coded groups AFTER clicking the 'Parish' sort option. As outlined above, I wasn't sure whether to have them individually coloured or in large blocks, by parish:

![screenshot-three](src/images/screenshot-three.png)

4. I got stuck for a couple of hours trying to figure out how Leaflet works as I have not utilised it since using it as part of a course last year. I went straight ahead and put it into its own module but it was not displaying after troubleshooting everything including Webpack configuration to the import CSS line of code. What I have to do next is connect the individual hike info to the Leaflet coordinates:

![screenshot-four](src/images/screenshot-four.png)

5. This screenshot shows the same issue as outlined in Screenshot Three with some progress made. See Difficulties Three below:

![screenshot-five](src/images/screenshot-five.png)

6. The below screenshot shows the following progress being made: grid layout and calculations amended; colours added to hike list depending on filter; map transformations on hover; favourites logic and container added to column; counter added; small Keyframes animation added (not seen in screenshot):

![screenshot-six](src/images/screenshot-six.png)

7. After trying multiple different calculations and variants, I decided that it would be worth re-formatting the layout with Flex. You can see that the right-hand column of the grid is encroaching on the left-hand space when given chance. Using Flex with space-between or something would resolve it:

![screenshot-seven](src/images/screenshot-seven.png)

8. Showing some more progress as I come to the end of this Version of the app. We have the favourites, completed, and to-do options floating in the top-right corner: toggle mode activates the correct div on click and gets the data. I've also added a nice notifications pop-up to the bottom-left corner which notifies on adding to favourites, completed and to-do; and also checks that it doesn't already exist within these categories. A warning pops up if so.

![screenshot-eight](src/images/screenshot-eight.png)

### Difficulties

1. The first main issue I had with version two was the dragging element of Leaflet becoming inactive after clicking on a second hike from the list. From what I read online, this is a common issue with Leaflet as the Map element must be empty when another event is fired to re-initialise the map - which is exactly what I was trying to do.

- _RESOLVED_ using:

```
 document.querySelector(".hike-card-container").innerHTML = "";

      if (map) {
        map.remove();
      }
```

Although the solution is simple, it took many different orders, modules and variations to get it correct due to Leaflet being quite fussy.

2. The next one wasn't so much problematic as long-winded as I had to find the coordinates for 50+ hikes. I used ChatGPT to see if it could handle the request but it repeatedly returned ten or so hikes with questionable coordinates. It has to be done manually for peace of mind >> it's taken around one day to correct.

3. This task relates to Screenshots Three and Five. The borders were responding to the logic - changing their colour to the key on the right based on Difficulty - but the `switch` statement was only picking up the final result, as seen in the console. It is something to do with the final condition in the switch statement and the final result in the console so I will continue working on it until it's sorted.

- _RESOLVED_ by adding a class dynamically on creation - a new move for me

4. I had to dedicate a fair amount of time to trying to figure out a way to get the filtered parish options first to display in the hike list master container and then to get the colours to apply using the existing IDs. The main issue is the format: #Andorra-la-Vella - capitalised and hyphenated:

![difficulty-one](src/images/difficulty-one.png)

- _RESOLVED_ by grafting the `target` variable onto the `replace()` method:

```
toArrayHikes.forEach((hike) => {
        if (hike.dataset.set === target) {
          console.log(hike);
          newArray = arrayOfAll.filter((hikeObj) => hikeObj.area === target);
          console.log(newArray);
        }
        hikeListMaster.innerHTML = "";
        const hyphenatedTarget = target.replace(/\s+/g, "-");

        for (const hike of newArray) {
          hikeListMaster.innerHTML += `<div class="hike-cards" data-set="${hike.area}" id="${hyphenatedTarget}">${hike.trail}</div>`;
        }
})
```

5. After connecting my laptop to the larger screen on my desktop set-up, the dreaded issue of scalability and responsive design - which I hadn't accounted for - cropped up, so I had to dedicate some hours to re-modelling the structre of the body and the containers. I found that the `REM` didn't always work as expected, nor did `VW`. On the other hand, `VH` seemed to scale things up and down quite well when used alongside REM.

_RESOLUTIONS:_

- moving away from `PX` and using `REM` where possible
- re-instating the factory margin reset etc.
- had a dabble with media queries which I hadn't used before
- using percentages. Remember to try `FLEX: 1, FLEX: 3` next time
- to start small with the next project and scale up, not down
- started looking into React

6. Container elements pushing outside or not downsizing on screen minimise:

![difficulty-two](src/images/difficulty-two.png)

I have tried a few different things here including changing the box to `Flex`. In the end, after playing with media queries etc., the resolution was to `clamp` the left container to a minimum screen width. That seemed to be the best way to fix it for the time being without having to do a full revision of the layout.

> [!NOTE]
> Next time I'll be focusing on making the app's layout responsive from the outset => mobile orientation

## Concluding Version Two

This is what the project looks like towards the end after another two weeks (22nd May):

![conclusion-one](src/images/conclusion-one.png)

_Features:_

- functionality to filter the left master container with the hikes by: Alphabetical, Area (Parish), Difficulty (green, blue, red, black) and Random option. Options are colour-coded throughout the app using logic.

- a key for Parish or Difficulty that is colour-coded and has a small Keyframes feature.

- hike information card containing de-structured data (including coordinates and SVGs) and a list of user options with hover titles and 'animations'. The final SVG connects to the Map below => Find Me

- Leaflet map that clears and changes according to each card. More features here would have been nice but I'm not going to continue with it for now. I added a Polyline and it was completely rigid and straight from A to B.

- user options menu on the right which is fixed and takes priority when minimised. They inherit their colours programmatically. To finish off I need to add more functionality: maybe drag and drop and delete/remove from category; and also hide when hovering away.

- user's actions are confirmed with a nice notification in the bottom left corner. This stops them re-adding hikes to the categories.

- there is an issue with Leaflet rendering when Randomise is clicked first.

It seems that I've added or improved the things which I set out to. Some things that will distract me too much from progressing with my skills have been ignored, such as adding pictures, videos, or reviews. The last thing that I might add is whether or not the hikes are based around mountain peak climbs and whether or not there is a mountain refuge on the way. A search bar with validation would also be a nice touch.

After believing that I was close to finishing, and happy with the user options menu on the right, I noticed that the browser zoom had been set to 67% all along. The change to 100% results in this mess:

![conclusion-two](src/images/conclusion-two.png)

Following the correction, I made a list of all of the minor issues that need to be finished in order for me to feel that the project is completed:

- close options menu on hover-off - already started - Not going to do
- make hike info card smaller with screen minimise - DONE
- to make the options menu responsive first click - this is due to the click event being embedded - Not going to do
- return the hike card on options menu click - DONE with re-factor of getHikeInfo -> conditional logic
- difficulty colour full list on filter by difficulty - DONE but logic could be better
- the triple click event on the options menu - DONE

### Final Product

The project will not be perfect at this level but I'm happy with different elements of functionality and the visual design of the app. The final version is:

![conclusion-three](src/images/conclusion-three.png)

There are several interactive features that add to the overall feeling of the app such as Keyframes animations and click events firing simple design features like adding a border to the div instead of all the way around the hike div, which causes it to push the DOM outwards in all directions.

I decided not to start messing around with the menu on the right in a bid to make it disappear on hover-off events as I felt that the small details of the project were beginning to get into my head and distracting me from developing my skills on a more fundamental level.

I'd like to have a go at this project using React: it seems like the perfect use case for React as all of the components are relying on each other yet here they are not exactly 'linked' - I've forced them to connect via a series of functions and I've often had to use array and string methods to re-locate the objects by name or difficulty etc.

30th May 2025.
