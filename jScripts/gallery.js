var curSlide = 0; //משתנה שמגדיר ערך 0 ועוקב אחר השקופית המוצגת במצגת כעת
var images = ["images/gallery/cake.jpg", "images/gallery/cupcakeBday.jpg", "images/gallery/donats.jpg", "images/gallery/icecream.jpg", "images/gallery/straubarrey.jpg", "images/gallery/macaroons.jpg"] //מערך של כל  התמונות
function preSlides() { //פונקציה זו משמשמת על מנת לעבור לשקופית חזור .
    curSlide++; //הגדלת המשתנה ב1
    var choice = document.getElementsByClassName('demo'); //מערך של התמונות בתפריט התחתון
    if (curSlide >= choice.length) { //במידה והוא חורג מאורך המערך מאפסים למקום הראשון
        curSlide = 0; //
    }

    changePics(curSlide); //קריאה לפונקציה שמציגה את התמונה שהועבר במשתנה 
}

function nextSlides() { //פונקציה זו נקראת כאשר המשתמש רוצה לעבור לשקופית הבאה
    curSlide--; //מקטין את המשתנה ב1
    if (curSlide < 0) { //במידה והמערך קטן מאפס
        var choice = document.getElementsByClassName('demo');//מערך של התמונות בתפריט התחתון
        curSlide = choice.length - 1; //תציג לי את התמונה במקום האחרון במערך
    }
    changePics(curSlide); //קריאה לפונקציה שמציגה את התמונה שהועבר במשתנה 

}

function changePics(currentSlide) { // נקראת כאשר המשתמש לוחץ על תמונה מתוך התפריט התחתון או כשקוראים לו מתוך החצים 
    var caption = document.getElementById('caption'); // שינוי הכותרת בהתאם
    var choice = document.getElementsByClassName('demo'); //  סימון בחירה מתוך התפריט בהתאם לבחירת התמונה
   
    document.getElementById("bigPicture").setAttribute("src", images[currentSlide]); // מחליף את המקור של התמונה הגדולה בהתאם
    document.getElementById("bigPictureCounter").innerHTML = (currentSlide + 1) + " / " + images.length; //מחליף את המיספור של התמונות בהתאם למיקום הנוכחי

    for (i = 0; i < choice.length; i++) { // לולאה שמכניסה את כל התמונות בתפריט התחתון למצב לא בחור
        choice[i].className = choice[i].className.replace(" active", ""); // מסירה את האקטיב מכל התמונות
    }
   
    choice[currentSlide].className += " active"; // לסמן את התמונה הבחורה בתפריט התחתון
    caption.innerHTML = choice[currentSlide].alt; //מציג בכותרת את הכיתוב המופיע באלט של התמונה על פי התמונה הבחורה
    curSlide = currentSlide; //עידכון המשתנה שמכיל את התמונה הנוכחית להצגה
}