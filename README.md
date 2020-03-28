# FAPINO - A Food Trap
### Developed by- [Somya Surendra Singh](https://github.com/tend2infinity), [Shambhavi Shandilya](https://github.com/savi-1311) And Shashwat Agrawal

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
 
 ## Explaining the important features in screenshots , capture(for pics of website) and code(for pics of code)
 * __capture 23 , 24 , 25 , 26 , 27 , 28__
 So , this is our home/landing pages as soon as one browse our website . The icon used at the top , is designed by us as well . The top bar is sticky . Below the top bar there is an automatic slideshow which changes the images after every 4 seconds !! refer to code 10 , 11 for styling and code 14 for the javascript used . Apart from that the grid panel used has a special responsive and transform effect too , refer to code 13 . capture 27 and 28 shows the responsive effect and also how we've used media quiery for changing the styles at the particular window size .

* __capture 1 , 2 , 3 , 4 , 5 , 6__
 These images represent the registration and login pages . Here we have used an "I'm a restaurant button" to separate the customer and restaurant owner database .
 Created the form using HTML forms and style it accordingly !! Also the responsiveness is shown in cap 5 and 6 . Plz refer to code 1 and 2 .
 
 * __capture 7 , 8 , 9 , 10 , 11 , 12 __
 These are our restaurant's menu pages . Divided the dishes in three sections named "starters" , "main course" and "dessert and refreshments" . The blinking ORDER NOW button is a highlight , for that refer code 3 .
 The arrangement of the blocks as inline blocks is another imp. feature which is responsive at the same time , refer to code 4 .
 The red coloured increment and decrement buttons are implemented using combined css and jquery refer to code 15 .
 Capture 11 and 12 clearly shows how the blocks get in a single line when reduced to a certain screen size .
 
  * __capture 13 , 14__
  These are our cart pages . Anything from the restaurant's menu can be added to cart , once you have logged in . If you have'nt then you will be directed to the login page first . There is special use of javascript for these pages . Refer to code 15 and 16 , it basically states that if there's nothing in the cart , then it will display cart is empty . Otherwise it will display the items added to the cart .
 
 * __capture 15 , 16__ 
 These are our payment pages . When we click the "PAY" button the modal box appears , refer to code 6 and 5 for viewing the style and animations used there .
 
 * __capture 17 , 18__
 These are our "rating list" and "ratings" pages . An important feature used in rating page is the "slider", we can slide it for 5 discrete values .The average of these values is shown in the restaurant's menu page when you order !! To know about the styles and javascript used for that refer to code 7 and 19 . 
 
  * __capture 19 , 20 , 21__
  These are our "restaurant dashboard pages" once you login as the restaurant owner you will be directed to these pages . Here we can add a dish , edit or delete it and save our changes too . A modal box will open as soon as you click on "ADD DISH" , refer to code 8 , 9 fow viewing the styling and animation of the modal boxes and code 17 , 18 for the javascript used . Radio buttons are used in the modal box to categorise the dishes in "cuisine" , "category" and "type" .
  
   * __capture 22__
   Our "404 page" , nothing much to say , just a cute "donut" in there!!
  
  
  
 
 


## SCREENSHOTS

[The google drive link for the screenshots of our website](https://drive.google.com/open?id=17782eS9Xgofwu29rQbjFghPzAkMWEixo)

## VIDEO

[The Google Drive Link To The Screen Recording Of our Website](https://drive.google.com/file/d/15G2w_xc2_BVsiRkq8aw02WN4KvLo2n7o/view?usp=sharing)

## HOSTED WEBSITE LINK

[The Website Has been Hosted at fapino-a-food-trap.herokuapp.com](http://fapino-a-food-trap.herokuapp.com/)


