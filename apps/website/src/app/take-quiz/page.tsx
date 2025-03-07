"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, SkipForward, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Sample quiz data
const quizData = [
  {
    id: 1,
    question: "How do you prefer to organize your study materials?",
    options: [
      "Digital notes with tags and categories",
      "Physical notebooks with color-coding",
      "Mind maps and visual diagrams",
      "Audio recordings and voice notes",
    ],
  },
  {
    id: 2,
    question: "When learning new information, what helps you remember it best?",
    options: [
      "Reading and highlighting key points",
      "Discussing the topic with others",
      "Creating flashcards and testing yourself",
      "Teaching the concept to someone else",
    ],
  },
  {
    id: 3,
    question: "What environment helps you focus most effectively?",
    options: [
      "Complete silence in a private space",
      "Ambient background noise like a café",
      "Nature sounds or white noise",
      "Instrumental music without lyrics",
    ],
  },
  {
    id: 4,
    question: "How do you approach a complex problem or assignment?",
    options: [
      "Break it down into smaller, manageable tasks",
      "Research thoroughly before starting",
      "Discuss with peers to gather different perspectives",
      "Start immediately and refine as you go",
    ],
  },
  {
    id: 5,
    question: "What time of day are you most productive for studying?",
    options: ["Early morning", "Mid-day", "Evening", "Late night"],
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const progress = (currentQuestion / quizData.length) * 100

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    }
  }

  const handleSkipQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
        isDarkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-gray-50 to-gray-100"
      }`}
    >
      <div className="absolute top-4 right-4">
        <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <Card className="w-full max-w-xl shadow-lg">
        <CardHeader className="pb-2">
          <Progress value={progress} className="h-2" />
        </CardHeader>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-6">{quizData[currentQuestion].question}</h2>

              <div className="grid gap-3">
                {quizData[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "default" : "outline"}
                    className={`h-auto py-4 px-6 justify-start text-left transition-all ${
                      selectedAnswer === index ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </motion.div>
        </AnimatePresence>

        <CardFooter className="flex flex-col gap-2 pt-4">
          <div className="w-full flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {quizData.length}
            </span>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSkipQuestion}
                className="flex items-center gap-1 text-muted-foreground"
              >
                Skip <SkipForward className="h-4 w-4" />
              </Button>

              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="flex items-center gap-1"
              >
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

