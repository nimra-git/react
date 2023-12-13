import React, { useEffect, useState } from 'react';
import bgImage from './images/bgImage.jpg';

function Quiz() {
    const [data, setData] = useState([]);
    const [start, setStart] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [result, setReseult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const quizStart = () => {
        setStart(true);
    }
    const nextQuestion = () => {
        // Reset the answer state for the new question
        setAnswer("");
        setIsCorrect(null);
        // Implement logic to move to the next question
        if (questionIndex < data.length - 1) {
            setQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            setReseult(true);
        }

    }
    const handleOptionClick = (option) => {
        setAnswer(option);
        setSelectedOption(option); // Update the selected option state

        const correctAnswer = data[questionIndex]?.correct_answer;

        if (option === correctAnswer) {
            setScore(score + 1);
            setIsCorrect(true)
        } else {
            setIsCorrect(false);
        }

        // Automatically move to the next question
        setTimeout(() => {
            nextQuestion();
        }, 1000); // Adjust the delay as needed
    };

    const tryAgain = () => {
        setReseult(false);
        setQuestionIndex(0);
        setSelectedOption("");
        setScore(0)
    }

    const modifiedDataFunction = (result) => {
        // Modify the data structure to include the correct answer in the array of incorrect answers
        const modifiedData = result.results.map(question => {
            const incorrectAnswersWithCorrect = [...question.incorrect_answers, question.correct_answer];
            // Shuffle the array to randomize the order of options
            const shuffledOptions = incorrectAnswersWithCorrect.sort(() => Math.random() - 0.5);

            return {
                ...question,
                options: shuffledOptions, // Rename incorrect_answers to options
            };
            //console.log('all data', allData)
        });
        console.log('modified', modifiedData)
        return modifiedData;
    }
    //console.log('answer', answer)
    console.log('score', score)
    const fetchQuestions = async () => {
        try {
            setLoading(true); // Set loading to true before fetching
            setError(null); // Reset error state before fetching
            const response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
            if (!response.ok) {
                throw new Error('Failed to fetch questions');
            }
            const result = await response.json();
            setData(modifiedDataFunction(result));
        } catch (error) {
            console.error('Error fetching questions:', error);
            setError('Failed to fetch questions. Please try again.');
        } finally {
            setLoading(false); // Set loading to false after fetching, regardless of success or failure
        }
    };

    useEffect(() => {
        if (start) {
            fetchQuestions();
        }
    }, [start]);

    return (
        <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }} className='h-screen flex justify-center items-center'>
            {
                start ?
                    (
                        <div className='mx-auto'>
                            <h1 className='text-8xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 inline-block text-transparent bg-clip-text'>Quiz App</h1><br />
                            {loading ? (
                                <p className='text-4xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 inline-block text-transparent bg-clip-text'>Loading...</p>
                            ) : error ? (
                                <div>
                                    <p className=' bg-orange-200 px-2 py-4 text-orange-700 rounded mb-3'>{error}</p>
                                    <button onClick={fetchQuestions} className='text-orange-200 font-medium px-10 py-2 text-xl rounded bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700'>Retry</button>
                                </div>
                            ) : (<>
                                {
                                    result ? (
                                        <>
                                            <p className=' text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 inline-block text-transparent bg-clip-text'>Result Card</p>
                                            <div className='bg-yellow-200 rounded-lg px-2 py-6 w-full flex justify-center items-center'>
                                                <div>
                                                    <p className='border border-orange-700 rounded p-3 text-3xl font-bold text-orange-700'>Your Score : {score}</p><br />
                                                    <p className='border border-orange-700 rounded p-3 text-3xl font-bold text-orange-700'>Total : {data.length}</p>
                                                </div>
                                            </div>
                                            <div className='mt-4'>
                                                <button onClick={tryAgain} className='text-orange-200 font-medium px-10 py-2 text-xl rounded bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700'>Try Again</button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p className={`text-5xl font-bold mb-6 ${isCorrect === true ? 'text-green-600' : isCorrect === false ? 'text-red-600' : 'bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 inline-block text-transparent bg-clip-text'}`}
                                            >Score : {score}</p>
                                            <div className='bg-yellow-200 rounded-lg p-4 w-full flex justify-center items-center'>
                                                <div>
                                                    <p className='text-orange-700 mb-3 font-bold text-xl'>Question {questionIndex + 1} / {data.length}</p>
                                                    <div className='mb-4 border border-orange-700 rounded p-2 text-left text-orange-700'>
                                                        <b>{questionIndex + 1} - </b>{data[questionIndex]?.question}
                                                    </div>
                                                    <div className='grid grid-cols-2 gap-4'>
                                                        {data[questionIndex]?.options.map((option, i) => {
                                                            return <>
                                                                <button onClick={() => handleOptionClick(option)}
                                                                    disabled={answer !== ""}
                                                                    key={i} className={`border border-orange-700 rounded p-3 text-left  ${selectedOption === option ? 'bg-orange-700 text-orange-200' : 'text-orange-700 hover:bg-orange-700 hover:text-orange-200'}`}>
                                                                    {i + 1}<span> - </span>{option}
                                                                </button>
                                                            </>
                                                        })}
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='mt-4'>
                                                <button onClick={nextQuestion} className='text-orange-200 font-medium px-10 py-2 text-xl rounded bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700'>Next</button>
                                            </div>
                                        </>
                                    )
                                }
                            </>)}
                        </div>
                    ) :
                    (
                        <div>
                            <h1 className='text-8xl font-bold mb-16 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 inline-block text-transparent bg-clip-text'>Quiz App</h1>
                            <h3 className='text-orange-700 text-4xl font-semibold mb-7'>General Knowledge</h3>
                            <button onClick={quizStart} className='bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 text-orange-300 px-4 py-2 text-2xl rounded w-full'>Start Now</button>
                        </div>
                    )
            }

        </div>
    );
}

export default Quiz;
