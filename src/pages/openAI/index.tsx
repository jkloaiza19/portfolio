/* eslint-disable @typescript-eslint/unbound-method */
import React, { useState } from "react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// components
import ReactMarkdown from 'react-markdown'

// api
import { api } from "node_modules/utils/api";

interface StateProperties {
  question?: string;
  answer?: string;
}

const OpenAI: NextPage = () => {
  // state
  const [chatInputValue, setChatInputValue] = useState('')
  // const [chatOutputValue, setChatOutputValue] = useState('')
  const [currentChats, setCurrentChats] = useState<StateProperties []>([])
  const { data } = useSession()
  const { replace } = useRouter()

    if (!data) {
      replace('/')
    }

  /* The code `const { mutate: generateText, isLoading } = api.openIA.generateText.useMutation({ ...
  })` is using the `useMutation` hook from the `api.openIA.generateText` module. */
  const { mutate: generateText, isLoading } = api.openIA.generateText.useMutation({
    onSuccess: (data) => {
      console.log(data)
      const value = data?.data?.generatedText
      const chats = [
        ...currentChats,
        {
          question: chatInputValue,
          answer: value,
        }
      ]

      // setChatOutputValue(value ?? '')
      setCurrentChats([...chats])
    },
  })

/**
 * The function updates the value of a chat input field in a React component.
 * @param e - React.ChangeEvent<HTMLTextAreaElement>
 */
  const handleChatInputchange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setChatInputValue(e.target.value)

/**
 * The function `handleChatInputKeyUp` triggers a click event when the Enter key is pressed in a
 * textarea element.
 * @param e - The parameter `e` is of type `React.KeyboardEvent<HTMLTextAreaElement>`. It represents
 * the keyboard event that occurred.
 */
  const handleChatInputKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault()

    if (e.code === 'Enter') {
      handleGenerateText()
      return
    }
  }

/**
 * The function `handleGenerateText` calls a function `generateText` with a specific text parameter.
 */
const handleGenerateText = () =>
  generateText({
    text: chatInputValue,
})

  return (
    <div className="page mt-14 ">
      <div className="chat-wrapper">
        <div>
          {!currentChats.length && 
            <h3 className="text-2xl dark:text-white font-bold mb-8">
              Type any question to get an answer
            </h3>
          }
          {isLoading && <p>Writing your answer...</p>}
          {!isLoading && !!currentChats.length &&
            currentChats.map((chat, index) => (
              <div
                key={`chat-${index}`} 
                id="chat-output"
                className="chat-output-wrapper">
                <div className="text-input-grey ">{chat.question}</div>  
                <ReactMarkdown>{chat.answer ?? ''}</ReactMarkdown>
              </div>
            ))
          }
          {/* {!isLoading && chatOutputValue && (
            <div className="text-lg">
              <div
                id="chat-output"
                className="chat-output-wrapper">
                <div className="text-input-grey ">{chatInputValue}</div>  
                <ReactMarkdown>{chatOutputValue}</ReactMarkdown>
              </div>
            </div>
          )} */}
        </div>
        <div className="chat-input">
           <div className="text-lg">
              <textarea
                id="chat-input"
                placeholder="Ask me anything →"
                className="text-input-grey resize-none"
                onChange={handleChatInputchange}
                onKeyUp={handleChatInputKeyUp}
              />
            </div>
            {/* <button
              type="button"
              onClick={handleGenerateText}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Send
            </button> */}
          </div>
    </div>
  </div>
  )
}

export default OpenAI