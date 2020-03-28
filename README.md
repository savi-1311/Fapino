# FAPINO - A Food Trap
### Developed by- Somya Surendra Singh, Shambhavi Shandilya And Shashwat Agrawal

## A Website to Order And Rate Delicious Food !

A Website where customers can Order Food From different Registered Restaurants and Further Rate the dishes ordered.

## FEATURES

* __Both Customer and Restaurant Owners Can Register at the Website.__
  
  The Customer can Order the Dishes from various Registered Restaurants and look at their previous Ratings. After Ordering they can Rate   (or choose not to) the Dishes Ordered.
  The Restaurant Owners can Register their Restaurants, Add, Delete and Edit the Dishes.
* __Security Feature__

  The Customer cannot add items to the cart or the Restaurant Owner cannot add dishes without Logging In. Error pages are designed and
  redirected to Login Pages if the user does that.
  
  "bcrypt" Dependancy is used to store hashed passwords so that the website admin cannot access the profile of the customers Or the 
  Restaurant Owners.
* __Error Linking__

  If the user Logs In but the email isn't registered then he will be directed to the Register Page. Similarly, if the user registeres
  new but the email already exists the he will be directed to the Login Page. 404 Error Page is also designed.
* __The Cart can store the Previously ordered Dishes.__
  
  When the customer logs out without paying for the dishes and then Login Again, he can see the previously orderd items intact in the     Cart.
* __Rating Of The Dishes__

  Every Dish Is rated by the Average Rating of All the other customers who has rated the same dish. If the Restaurant Owner Deletes The   dish, all the ratings of that particular dish gets Deleted automatically. 
* __Ample Use of Javascript for Animations.__
  
  The Picture Slideshow with fading effects on the Home Page. The Sticky Navigation Bar in various pages. The Glowing Order Now Button.   The Modal Boxes. All have used Javascript for animation. (Screenshots attached)
* __Use Of JQuery__
  
  To explore more we have used JQuery to write the functions for Quantity Increment and Decrement Buttons in the Restaurant's Menu.
* __Responsive__
  
  Every Page is Responsive. The divs resize and rearrange themselves to fit in the frame and the data never gets hidden.
* __Used Loops with Conditional Statements__

  While rendering the pages dynamically, conditional statements have been used so that Pictures don't repeat themselves and are
  displayed according to the dish cuisine or the category.


## SCREENSHOTS

Attach a google drive link to a folder containing screenshots of your website. Make sure you have enabled link sharing to view the folder.

## VIDEO

[The Google Drive Link To The Screen Recording Of our Website](https://drive.google.com/file/d/15G2w_xc2_BVsiRkq8aw02WN4KvLo2n7o/view?usp=sharing)

## HOSTED WEBSITE LINK

[The Website Has been Hosted at fapino-a-food-trap.herokuapp.com](http://fapino-a-food-trap.herokuapp.com/)


