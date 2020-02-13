/**
 * @return the HTML code for the exam page
 */
public static String getHtmlCode() {
	// declear constan variable for Magic string "/n"
	String Enter_ReturnValue = "/n";
    String Title_1 = "<h1>" + "Code review exam" + "</h1>" +  Enter_ReturnValue;
    String Paragrap_1 = "<p>" + "Question 1" + "</p>" +  Enter_ReturnValue;
    String Paragrap_2 = "<p>" + "Question 2" + "</p>" +  Enter_ReturnValue;
    String Title_2 = "<h1>" + "The last question" + "</h1>" +  Enter_ReturnValue;
    String Paragrap_3 = "<p>" + "And the last question is 3" + "</p>" +  Enter_ReturnValue;
	// caltulate HtmlCode  and return HtmlCode
    String BodyContent = title1 +paragrap1 + paragrap2 + title2 + paragrap3;
    
    return "<html><body>" + bodyContent + "</html></body>";
}



//////////////

    public static void drawTriangle() {
        int drawTriangle;
        int drawRectangle;
        String turtle ="";
        for (int i = 0; i < 3 || 4; i++) {
            turtle.forward(50);
            turtle.turn(120);
            turtle.forward(100);
            turtle.turn(90);
        }
    }


    /////////


    //We will use the same class for all questions of this exercise:
public class Library {

    private List<Book> books;  
    
    public class Book {
        public String author;
        return author;

        public int publishYear;
         return publishYear ;
        public double price;
        return price;
}
    public boolean doOperation(Book xx) {
        boolean yy  = this.books.contains(xx);
        if (yy) {
            this.books.remove(xx);
        }
        return yy;
    }

       private List<Book> books;  
    
    public class Book {
        public String author;
        public int publishYear;    
        public double price;
		public void setAuthor(String author) {
			System.out.println(author);
			
		}
		public void setPrice(double price ) {
			System.out.println(price);	
		}
     
}
    public boolean doOperation(Book xx) {
        boolean yy  = this.books.contains(xx);
        if (yy) {
            this.books.remove(xx);
        }
        return yy;
    }
}
    



/// 
 public int doOperation(int year) {
        int getYearOfBook = 0;
    


    // drawTriangle and drawRectangle 
      public static void drawTriangle(turtle,120,100 );
            drawRectangle = new turtle();
            turtle.forward(50);
            turtle.turn(120);
            drawTriangle();
            drawRectangle.turn();
            public static void drawRectangle() {
            for (int i = 0; i < 3 || 4; i++) 
            turtle.forward(100);
            turtle.turn(90);
            
        };
    turtle.forward();
    

    


    public boolean doOperation(Book xx) {
        // return book if have in List<Book> books and remove  book if have or already have in List<Book> books
        boolean  getBookIfContains = this.books.contains(xx);
        if (getBookIfContains) {
            this.books.remove(xx);
        }
        return getBookIfContains;
    }

\





















  

 