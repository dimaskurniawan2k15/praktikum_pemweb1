let chats = [];
            function send(){
                let chatbox = document.getElementById("chat");
                let message = document.getElementById("message");
                chats.push("<div class=\"chat\">"+message.value+"</div>");
                chatbox.innerHTML = chats.join("");
                chatbox.scrollTop = chatbox.scrollHeight;
                message.value = "";
            }

            function checkKey(event){
                let key = event.keyCode
                if (key == 13){
                    send()
                }
            }