# js-store-locator

## GOAL
Build a Google Maps Store Locator to allow users to find stores near to them. 
User Stories

* As a user, I want to see a list of all stores available so that I can see where all the stores are.
* As a user, I want to enter my zip code, so that I can see the stores near to me.
* As a user, I want to see a list of stores around my zip code so that I can find a store close to me.
* As a user, I want to be able to see all the locations of the stores on the map so that I know where they are located. 
* As a user, I want to click on a store and have the location show up on the map with more information about the store.
* As a user, I want to be able to click directions, so that I can get directions to the store.
* As the user I want to be able to click on the phone number of the store, so that I can call it

Diagrams


## Business Requirements

* Allow a user to to find the stores near zip code
* Show the user a list of stores 2 miles within the zip code
* Allow a user to view more information about the store
* Allow a user to make directions from their location 
* Allow a user to call directly to the store
* Show: 
    * Address
    * Phone number
    * Open status
    * Store name
	
## Technical Requirements
* Use the google maps API: https://developers.google.com/maps/documentation/javascript/tutorials
* Use MongoDb Atlas for Database
* Use Google Maps Geocoder to geocode user’s zip code: https://developers.google.com/maps/documentation/geocoding/start 
* API endpoints: 
    * GET /stores
        * Return all the stores from the db
    * GET /stores/{zip_code}
        *  Return the stores around the zip_code
    * POST /stores
        * Save stores in the DB
