const MyMessage = ( { message }) => {
    // Note: if the message attachments' length is greater than 0, that means that the incoming message is an image
    if(message?.attachments?.length > 0){
        return (
            <img 
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float:"right"}}
            />
        )
    }

    return (
        <div className="message" style={{float:"right", marginRight:'18px', color:"white", backgroundColor:"#3B2A50"}}>
            {    message.text.replace(/<[^>]+>/g, '') /* Filters the pre-existing HTML tags */}

        </div>
    );
}

export default MyMessage
