import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import Header from "@/components/customHeader"
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm"
import AI from '@/components/customMessageForms/AI'
import  AiCode from "@/components/customMessageForms/AiCode"
import AiAssist from '@/components/customMessageForms/AiAssist'

const Chat = ({ user, secret}) => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        user,
        secret
    )
  return <div style={{flexBasis: "100%"}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...chatProps}
    style={{ height: "100vh"}}
    renderChatHeader={(chat) => <Header chat={chat}/>}
    renderMessageForm={(props) => {
      if(chatProps.caht?.title.startWith("AiChat_")){
        return <AI props={props} activeChat={chatProps.chat} />;
      }
      if(chatProps.caht?.title.startWith("AiCode_")){
        return <AiCode props={props} activeChat={chatProps.chat} />;
      }
      if(chatProps.caht?.title.startWith("AiAssist_")){
        return <AiAssist props={props} activeChat={chatProps.chat} />;
      }
      
      
      
      return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
        )
    }}
    />
  </div>
};
export default Chat