const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username; 

    return (
        // Checks if the given message is the first message. If that is so, then you should display the avatar profile pic at the first. \
        // For reference, check this link: https://parl.ai/docs/_static/img/messenger-example.png
        <div className="message-row">
            {isFirstMessageByUser && (
                <div 
                    className="message-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
        {/* If the given message is not the first message by that particular user, then you just continue to display
        the message of that user without showing the avatar/profile pic bubbles */}
        {message?.attachments?.length > 0
                ?(    
                    <img 
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{marginLeft: isFirstMessageByUser? "4px":"48px"}}
                    />
                ) : (
                    <div className="message" style={{float:"left", backgroundColor:"#CABCDC", marginLeft: isFirstMessageByUser? "4px":"48px"}}>
                        {message.text.replace(/<[^>]+>/g, '')}
                    </div>
                )
            }
        </div>
    );
}

export default TheirMessage;
