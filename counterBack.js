function counterInTheMiddle() {

    var seconds = 5;

    let counter = 0; // it will make sure the process does not happen many times.
    let message = document.getElementById('middle'); //creating  a variable to put the message later

    function decrementSeconds() {
        if (seconds == 0) {
            document.getElementById("middle").style.display = "none";  //when second==0 the message(you have #secoind left) is not longer showed
            document.getElementById("flex-box-result").style.display = "none";  //when second==0 the cars will disappear

        }
        if (seconds == (-1) && (counter == 0)) {
         //this is the second counter round after the card disapeared.
            seconds = 5;
            document.getElementById("middle").style.display = "inline";
            counter++;
            userCard();   //only in the second round(5 second remaining , the card would be read.
        }

        message.innerText = seconds + " seconds."; //message
        seconds -= 1;
    }


    var showingCards = setInterval(decrementSeconds, 1000); //it will run the fuction decrementSeconds every second.


}
