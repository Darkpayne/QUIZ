import React, {useState} from 'react'

const Question = () => {

    const Question = [
        {
            questionText : "Which of these characters is the strongest?",
            answerOptions:[
                    {answerText:'Goku', isCorrect: false,},
                    {answerText:'Luffy', isCorrect: false,},
                    {answerText:'Naruto', isCorrect: false,},
                    {answerText:'Saitama', isCorrect: true,},
            ],
        },
        {
            questionText : "Which of these players did not win a trophy this season ?",
            answerOptions:[
                    {answerText:'Messi', isCorrect: false,},
                    {answerText:'Ronaldo', isCorrect: true,},
                    {answerText:'DeBruyne', isCorrect: false,},
                    {answerText:'Ibramovic', isCorrect: false,},
            ],
        },
        {
            questionText : "Who is the richest woman in the world?",
            answerOptions:[
                    {answerText:'Alice Walton', isCorrect: false,},
                    {answerText:'Francoise Meyers', isCorrect: true,},
                    {answerText:'Mackenzie Scott', isCorrect: false,},
                    {answerText:'Julia Koch', isCorrect: false,},
            ],
        },
        {
            questionText : "What programming language is popularly used for both frontend and backend?",
            answerOptions:[
                    {answerText:'Javascript', isCorrect: true,},
                    {answerText:'Python', isCorrect: false,},
                    {answerText:'PHP', isCorrect: false,},
                    {answerText:'Java', isCorrect: false,},
            ],
        },
        {
            questionText : "Which of these players always carry last in blur?",
            answerOptions:[
                    {answerText:'Jon-lee', isCorrect: true,},
                    {answerText:'Davioe', isCorrect: false,},
                    {answerText:'Entropy', isCorrect: false,},
                    {answerText:'DarkPayne', isCorrect: false,},
            ],
        },
        {
            questionText : "What is the capital city of canada?",
            answerOptions:[
                    {answerText:'Canada', isCorrect: false,},
                    {answerText:'Ottawa', isCorrect: true,},
                    {answerText:'Quebec', isCorrect: false,},
                    {answerText:'Toronto', isCorrect: false,},
            ],
        },
        {
            questionText : "what country is the richest country in the world?",
            answerOptions:[
                    {answerText:'China', isCorrect: true,},
                    {answerText:'Germany', isCorrect: false,},
                    {answerText:'United States', isCorrect: false,},
                    {answerText:'France', isCorrect: false,},
            ],
        },
        {
            questionText : "How many bones are in the body?",
            answerOptions:[
                    {answerText:'209', isCorrect: false,},
                    {answerText:'208', isCorrect: false,},
                    {answerText:'207', isCorrect: false,},
                    {answerText:'206', isCorrect: true,},
            ],
        },
        {
            questionText : "What is the capital city of Malaysia ?",
            answerOptions:[
                    {answerText:'Selangor', isCorrect: false,},
                    {answerText:'Kuala Lumpur', isCorrect: true,},
                    {answerText:'Putrajaya', isCorrect: false,},
                    {answerText:'Perak', isCorrect: false,},
            ],
        },
        {
            questionText : "How old is Drake?",
            answerOptions:[
                    {answerText:'38', isCorrect: false,},
                    {answerText:'37', isCorrect: false,},
                    {answerText:'36', isCorrect: false,},
                    {answerText:'35', isCorrect: true,},
            ],
        },
    ]

    const [currQuestion, setCurrQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const [finalScore, setFinalScore] = useState([])
   
    const handleAnswerButtonClicked = (isCorrect) =>{

        if (isCorrect === true) {
            setScore(score + 1)
        }
        const nextQuestion = currQuestion + 1;
        if (nextQuestion < Question.length){
            setCurrQuestion(nextQuestion);
        }else{
            setShowScore(true);
            setFinalScore(prevState => prevState.concat(score))
        }
        
    }
    const handleReset = () =>{
        setShowScore(false);
        setScore(0);
        setCurrQuestion(0);
    }
   
  return (
    <div>
        <div className="h-screen w-screen ">
            <div className="lg:container lg:mx-auto">
                <div className="h-96 content-center">
                    <div class="flex items-center justify-center h-screen ">

                        <div className="shadow-lg bg-slate-200 rounded-lg p-5  min-w-[600px] lg:w-[800px]">
                           {showScore ? <div className='flex flex-col p-6 justify-center items-center'>
                               <h3 className='text-3xl'>You scored <span>{score}</span> out of {Question.length}</h3>
                                <div className='mt-4'>
                              {finalScore.map((x, index)=> (
                                  <h1 className='text-xl font-medium text-gray-500  p-1' key={index}><span className='mr-4'>{index + 1}.</span>{x}</h1>
                              ))}
                                </div>

                               <button onClick={()=>handleReset()} className='p-3 mt-9 px-9 mx-7 bg-blue-500  rounded-3xl hover:bg-white border-blue-700 duration-500 transition-all border-2 text-white hover:text-blue-700'>Play again</button>
                           </div>
                           :                          
                            <div className='flex justify-between'>                        
                                <div className="">
                                    <div className="flex items-baseline">
                                    <h1 className='text-3xl'>Question</h1>  <span  className='text-3xl'>{currQuestion + 1}</span>  <span className='font-medium text-xl'> / {Question.length}</span>
                                    </div>
                                    <div className="">
                                        <h2 className='text-lg font-medium my-5'>{Question[currQuestion].questionText}</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col w-[300px] lg:w-[350px] flex-shrink-0">
                                    {
                                        Question[currQuestion].answerOptions.map((answer)=>(
                                            <button onClick={()=>handleAnswerButtonClicked(answer.isCorrect)} className='p-3 mx-5 bg-blue-500 my-4 rounded-3xl hover:bg-white border-blue-700 duration-500 transition-all border-2 text-white hover:text-blue-700'>{answer.answerText}</button>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question