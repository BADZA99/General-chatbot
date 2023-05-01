
//General Chatbot - let user start the conversation 




//elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');
var ticket = new Date().getTime();

var user = {message:""};



function getDate(){

var date = new Date();
var day = date.getDay(); 
var month = date.getMonth(); 
var dayOfMonth = date.getDate();

var dayArray = ['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Saturday'];
var monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul',"Aug",'Sep','Oct','Nov','Dec'];

return dayArray[day] + " , " +  monthArray[month] + " " + dayOfMonth;

}


var arrayOfPossibleMessages = [

    {"message":"how are you?", "response":"I'm great"},
    {"message":"hi", "response":"hi!"},
    {"message":"who are you?", "response":"I'm your assistant"},
    {"message":"what's your name?", "response":"I'm a chatbot"},
    {"message":"what is your name?", "response":"I'm a chatbot"},
    {"message":"how old are you?", "response":"I'm ageless"},
    {"message":"do you have kids?", "response":"No I don't!"},

    {"message":"do you sleep early?", "response":"No I don't!"},
    {"message":"do you have a car?", "response":"I travel th,rough space :)"},
    {"message":"can you dance?", "response":"yes,tango."},
    {"message":"what's your fav food?", "response":"Pizza"},
    {"message":"what is your fav food?", "response":"fish"},
    {"message":"do you have a job?", "response":"yes"},
    {"message":"where do you live?", "response":"in the web"},
    {"message":"where were you born?", "response":"on mars"},
    {"message":"do you have siblings?","response":"Yes, I have got 3"},
    {"message":"find me a job", "response":"<a href='https://www.indeed.com/jobs?q=engineer&l=' target='_blank'>Click here</a>"},
    {"message":"today's date","response":getDate()}


];





function chatbotSendMessage(messageText){


    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin ="10px";
    messageElement.style.padding ="5px";

    messageElement.innerHTML = "<span>Chatbot: </span>"+
    "<span style="+"margin-top:10px; padding:10px"+">"+ messageText +"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000}); 
    chatContainer.appendChild(messageElement);

     //scroll to last message
     chatContainer.scrollTop = chatContainer.scrollHeight;
    
}



function sendMessage(messageText){

     var messageElement = document.createElement('div');
     messageElement.classList.add('w-50');
     messageElement.classList.add('float-right');
     messageElement.classList.add('shadow-sm');
     messageElement.style.margin ="10px";
     messageElement.style.padding ="5px";

     messageElement.innerHTML = "<span>You: </span>"+
     "<span style="+"margin-top:10px; padding:10px"+">"+ messageText +"</span>";

     messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000}); 
   
     chatContainer.appendChild(messageElement);

     //scroll to last message
      chatContainer.scrollTop = chatContainer.scrollHeight;
   

}


//let user start convo 
function processMessage(){


     if(user.message.length > 5 || user.message.includes('hi')){
                    //array of results
               var result =  arrayOfPossibleMessages.filter(val=>  val.message.includes(user.message.toLowerCase()));

               if(result.length > 0){
                                   var response = result[0].response;

                                   setTimeout(function(){
                                        chatbotSendMessage(response);
                                   },1000);
                         }else{

                              setTimeout(function(){
                                   chatbotSendMessage("I don't understand!");
                              },1000);

                         }
      } else if (user.message == "how" || user.message == "who") {

          setTimeout(function(){
               chatbotSendMessage("?");

          },1000);
        
      }  else{

          setTimeout(function(){
               chatbotSendMessage("Please send me a complete sentence");

          },1000);

         
      }             
               

}







sendBtn.addEventListener('click', function(e){

    if(textbox.value == ""){
     alert('Please type in a message');

    }else{
         
     let messageText = textbox.value.trim();   
     user.message = messageText;
     sendMessage(messageText); 
     textbox.value = "";  
     
    
     processMessage();
    


    }
});



textbox.addEventListener('keypress',function(e){

     //if user hits the enter button on keyborad (13)
      if(e.which == 13){
          if(textbox.value == ""){
               alert('Please type in a message');
          
              }else{
                   
               let messageText = textbox.value.trim();
               user.message = messageText;
               sendMessage(messageText); 
               textbox.value = "";  
      
                processMessage();
          
  
          
             
              }


      }


});



