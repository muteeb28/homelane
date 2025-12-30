export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'quick_reply' | 'whatsapp_redirect';
}

export interface QuickReply {
  text: string;
  action: string;
}

export interface ChatBotResponse {
  text: string;
  quickReplies?: QuickReply[];
  whatsappRedirect?: boolean;
}