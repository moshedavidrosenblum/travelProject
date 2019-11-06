//: יצירת מערך שמכיל בתוכו אובייקטים השדות הם האותיות הכחולות ואחרי הנקודותיים זה הכאך של השדה
let destenations = [ 
    { dest_code: 2, dest_name: 'australia', dest_price: 1600 },
    { dest_code: 3, dest_name: 'new zeeland', dest_price: 1800 },
    { dest_code: 4, dest_name: 'the karibian', dest_price: 1200 },
    { dest_code: 5, dest_name: 'zimbabooe', dest_price: 1000 },
    { dest_code: 6, dest_name: 'england', dest_price: 1100 }
];
  // יצירת מערך נוסף שמכיל בתוכו אובייקט 
let orders = [
    { total: 3200, passenger: 2, detenation: "australia", id: "5453", name: "avi", number: 2 },
    { total: 3600, passenger: 2, detenation: "new zeland", id: "45654", name: "david", number: 3 },
    { total: 1200, passenger: 1, detenation: "the karibian", id: "456463", name: "moshe", number: 4 }

]

  // שומרים במישתנה את המיקום המדוייק שנרצה לכתוב עליו במסך כאשר נשתמש במישתנה נוסיף את הפקודה: אינר אטש טי אם אל
    let myTableData = document.querySelector('.mytable-travel-deatals tbody');

    // myTableData.innerHTML = ""; // חשבנו שאולי האינר בהתחלה כשהוא ריק הוא משהו לא מוגדר ואם עושים +=זה יכול ליצור מצב שיעשה פלוס משהו לא מוגדר ואז כל מה שיכנס אליו יצור שגיאה , לבסוף התברר שהאינר מוגדר כסטרינג ריק
   
// לוקחים את המישתנה שמכיל בתוכו מערך של אובייקים שהאובייקט מייצג את היעדי נסיעה  ועוברים בלולאה על המערך הזה
    destenations.forEach(function (value) {
        myTableData.innerHTML += //  בכל איטרציה ניקח את הכתובת של הטבלה ונוסיף באינר את הנתונים כאשר כל איטרציה תכניס אובייקט שלם לפי השדה שקיים ונשלח גם לאיטשטיאמאל סגירת תיבות באיטש טי אם אל 
            "<tr><td>" + value.dest_code + "</td>" +
            "<td>" + value.dest_name + "</td>" +
            "<td>" + value.dest_price + "</td></tr>";
    })
 

   // הפונקציה הזו מטרתה היא להציג על המסך את ההזמנות   כולל יצירת טבלה                             // displayOrders(); 
function displayOrders() {
        let tableOrder = document.querySelector(".table_orders tbody")  // פה שומרים את הנתיב שאליו אנחנו רוצים לכתוב על האיטש טי אם אל
        let templateOrder = "<tr><td>#TOTAL</td><td>#PASSANGERS</td><td>#DESTENATION</td>" +  // פה אנחנו יוצרים טמפלט של טבלה שאנחנו רוצים ואנחנו מכניסים ערך מסוים בתוך כל קוביה בטבלה הרעיון הוא להראות שימוש בפונקציה שתחליף את הערכים הללו
            "<td>#PASID</td><td>#NAME</td><td>#ORDER</td>"
  // עכשיו אנחנו עושים לולאה כדי לעבור על המערך שיש בתוכו את האובייקטים של הזמנות
        orders.forEach(function(order)  {
            tableOrder.innerHTML += templateOrder.replace("#TOTAL", order.total) // לוקחים את המישתנה ששמר את הנתיב שבו יכתב טבלת ההזמנות כמובן שמוסיפים אינר  וקוראים לפונקציה ריפלייס שתפקידה לקבל ערך שאותו רוצים להחליף וערך נוסף שיוחלף במקום הערך הישן 
                .replace("#PASSANGERS", order.passenger) // הפונקציה ריפלייס עוברת על הטמפלת ומחפשת את הפרמטר הראשון שקיבלה ושם היא תשנה את הפרמטר הראשון שהיא קיבלה אם זה קיים במה שהיא רצה עחליו בפרמטר השני שהיא קיבלה במקרה שלנו הואבייקט נקודה השדה הספציפי וכן הלאה בכל שדה נקרא לפונקציה ריפלייס
                .replace("#DESTENATION", order.detenation)
                .replace("#PASID", order.id)
                .replace("#NAME", order.name)
                .replace("#ORDER", order.number);
        });
     
    }
// יצרנו טבלה שיש בתוך שדה אינפוט שמכניסים לשם שם בלבד וצריך שיופיע בטבלה הזו כל ההזמנות של של האדם 
// שהוכנס לתוך התיבת אינפוט . תפקידה של הפונקציה הבאה היא לעבור על טבלת ההזמנות ולהכניס לטבלה נוספת שניצור בפונקציה הזו את ההזמנות שהוזמנו
function findOrder() {

    let getNameFronInput = document.querySelector("#find-order-name").value; //  נשמור במישתנה את השם שהמשתמש הכניס ולכן אנחנו צריכים ללכת לכתובת של האינפוט ולשמור את מה שהמישתמש הכניס
    let tablFind = document.querySelector(".find_order_table tbody"); //  פה אנחנו שומרים במישתנה את הכתובת של הטבלה שבה יכנסו כל ההזמנות שנמצאו קיימות בחיפוש
    let templateOrder = "<tr><td>#TOTAL</td><td>#PASSANGERS</td><td>#DESTENATION</td>" + // פה יוצרים טמפלט שיתאים לטבלה שבה יוזנו הפרטים של הנוסע שעשה הזמנה ונמצא בחיפוש
        "<td>#PASID</td><td>#NAME</td><td>#ORDER</td><td>"
    orders.forEach(function(order) { // כל הזמנה שמבוצעת נכנסת לתוך המערך אורדרס שמכיל אובייטים, כל אובייקט מכיל הזמנה לאחר שלקחנו מהמשתמש את השם שהוזן אנחנו צריכים לעבור על מערך ההזמנות ולבדוק אם השם שהמשיתמש הכניס קיים באחד האובייקטים במערך אם השם קיים אנחנו צריכים להזין את האובייקט של הנוסע שנמצא  האובייקט יכלולו את כל הפרטים של הנסיעה של הנוסע שנמצא, חשוב לזכור שאת הפרטים של הנוסע שנמצא אנחנו צריכים להזין לתוך טבלה חדשה
        if (order.name == getNameFronInput) { // לאחר שאנחנו עוברים בלולאה על המערך של האובייקטים של הנסיעות אנחנו עושים תנאי ש:אם השם שהוכנס ע''י המשתמש קיים באחד האובייקטים שבמערך בשדה שם הנוסעה אז נמשיך לשורה הבאה
            tablFind.innerHTML += templateOrder.replace("#TOTAL", order.total) //לאחר שהתקיים התנאי ואנחנו נמצאים באובייקט הרצוי אנחנו קודם כל שולחים את התבנית של הטבלה למיקום הרצוי ונתחיל להכניס את הערכים של הנוסע שנמצא לתוך הטבלה 
                .replace("#PASSANGERS", order.passenger) 
                .replace("#DESTENATION", order.detenation)
                .replace("#PASID", order.id)
                .replace("#NAME", order.name)
                .replace("#ORDER", order.number);

        }
        

    });
}
// מטרת הטבלה הזו היא לקחת אינפוטים של פרטי הזמנה ולהוסיף אותם לטבלת הזמנות שכבר קיימת
function addOrderToTable() {
    let nameInput = document.querySelector("#inputName").value;  // בארבעת השורות הבאות אנחנו שומרים את מה שהמשתמש הכניס לתוך תיבות האינפוט
    let pesonalIdInput = document.querySelector("#inputPersonalId").value;
    let travelIdInput = document.querySelector("#inputTravelId").value;
    let passangerInput = document.querySelector("#inputPassangers").value;
    let userDestnationName; // יצרנו מישתנה ריק בשם יעד הנסיעה של המשתמש ועוד מעט נעשה במישתנה הזה שימוש
    let userPriceForDestenation;// יצרנו מישתנה ריק בשם מחיר הנסיעה של המשתמש ועוד מעט נעשה במישתנה הזה שימוש
    destenations.forEach(function (dest) { //  במערך דסטניישנס קיימים המקומות שאפשר לנסוע אליהם ולכל יעד יש קוד ולכן דבר ראשון אנחנו עוברים על המערך הזה
        if (dest.dest_code == travelIdInput) {// ובודקים אם מה שהמשתמש הכניס תואם את קוד הנסיעה של הנסיעות שקיימות ,לכל יעד יש קוד ואם המישתמש הכניס קוד נסיעה שלא קיים בטבלת מידע אז לא נוכל בכלל להמשיך לשורה הבאה
            userDestnationName = dest.dest_name; // לאחר שעברנו את התנאי שבאמת קיים בטבלת מידע הקוד של הנסיעה שהמשתמש הכניס אז מבקשים דבר ראשון לשמור במישתנה את היעד הזה וזה עושים ע''י שאנחנו יודעים שכאשר הלולאה נמאת באובייקט שיש לו קוד נסיעה תואם למה שהוכנס ע''י המישתמש אנחנו מבקשים לקחת את השדה של של היעד שנמצא באותו האובייקט ושומרים אותו במישתנה
            userPriceForDestenation = dest.dest_price * passangerInput; // אנחנו צריכים להכניס לטבלה את מחיר אנסיעה וזה תלוי במחיר הקבוע של שיש ליעד הנבחר כפול מספר הנוסעים ולכן נשמור במישתנה מחיר סופי שזה שווה למחיר שנמצא באובייקט כפול האינפוט שהתקבל ממספר הנוסעים

        }
    });
    // בהתחלה יצרנו מערך בשם אורדורס שבתוכו יש אובייקטים שכל אובייקט מכיל את יעד הנסיעה מחיר כמות נוסעים וכו ניצור אובייקט מאותו הסוג  עם הפרטים החדשים שיש לנו משורות הקודמות
    let newOrder = {
        total: userPriceForDestenation, passenger: passangerInput,
        detenation: userDestnationName, id: pesonalIdInput, name: nameInput
    }
    orders.push(newOrder); // מכניסים לתוך מערך של האובייקטים הזמנות את ההזמנה החדשה
    let orderTable = document.querySelector(".table_orders tbody "); // שומרים את הכתובת של המיקום שאליו יכנס הטבלה החדשה
    orderTable.innerHTML += "<tr><td>" + userPriceForDestenation + "</td><td>" + passangerInput + "</td>" + // מכניסים את צורת הטבלה פלוס הערכים החדשים
        "<td>" + userDestnationName + "</td><td>" + pesonalIdInput + "</td><td>" + nameInput + "</td><td>" + travelIdInput + "<td></tr>"


}
function findOrde(){
    let selectedDestenation= document.getElementById("order-search").value
    let tableFind=document.querySelector(".box-find-order-destenation tbody")
    tableFind.innerHTML=""
    let templateOrder = "<tr><td>#TOTAL</td><td>#PASSANGERS</td><td>#DESTENATION</td>" +
        "<td>#PASID</td><td>#NAME</td><td>#ORDER</td><td>"
    orders.forEach((order) => {
        if (order.detenation == selectedDestenation) {
            tableFind.innerHTML += templateOrder
                .replace("#TOTAL", order.total)
                .replace("#PASSANGERS", order.passenger)
                .replace("#DESTENATION", order.detenation)
                .replace("#PASID", order.id)
                .replace("#NAME", order.name)
                .replace("#ORDER", order.number);

        }

    });


}
displayOrders();
