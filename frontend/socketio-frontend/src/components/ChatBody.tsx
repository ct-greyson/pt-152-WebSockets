import React, { useEffect, useState } from 'react'
import { Card, CardBody } from 'react-bootstrap';
import { Socket } from 'socket.io-client';

interface SocketProps {
    socket: Socket
}

interface Message {
    data: string
}

const ChatBody = ({ socket }: SocketProps) => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {

        socket.on("message", (message) => {
            // console.log("message event listener")
            // console.log(message)
            // ["message1", "anotherMessage", "howdy!"]
            // ["message1", "anotherMessage", "howdy!", "NEW MESSAGE!"]
            // no ... => [["message1", "anotherMessage", "howdy!"], "NEW MESSAGE"]
            // [[["message1", "anotherMessage", "howdy!"], "NEW MESSAGE"], "NEWER MESSAGE"]
            setMessages([...messages, message])
            //[[]]
        })

    },[messages, socket])

  return (
    <>
        {messages.map((message) => (
            <Card className='my-3'>
                <Card.Body>
                    {message.data}
                </Card.Body>
            </Card>
        ))}
    </>
  )
}

export default ChatBody