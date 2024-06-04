import React, { useEffect } from "react";

const ChatBot = () => {
    useEffect(() => {
        const chatbot_e = document.createElement("script");
        chatbot_e.src = "https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.2/libs/oversea/index.js";
        chatbot_e.async = true;
        chatbot_e.onload = () => {
            new CozeWebSDK.WebChatClient({
                config: {
                    bot_id: "7375549987277242376",
                },
                componentProps: {
                    title: "ChatBot hỗ trợ",
                },
            });
        };

        document.body.appendChild(chatbot_e);

        return () => {
            document.body.removeChild(chatbot_e);
        };
    }, []);

    return (
        <div id="chatbot-container">
        </div>
    );
};

export default ChatBot;
