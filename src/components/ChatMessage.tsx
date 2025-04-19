
import { cn } from '@/lib/utils';

type ChatMessageProps = {
  content: string;
  isUser: boolean;
  timestamp: Date;
};

const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const ChatMessage = ({ content, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("flex gap-2", isUser ? "justify-end" : "justify-start")}>
      <div className="chat-bubble">
        <div className={isUser ? "chat-message-user" : "chat-message-ai"}>
          {content}
        </div>
        <span className="text-xs text-muted-foreground px-2">
          {formatTime(timestamp)}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
