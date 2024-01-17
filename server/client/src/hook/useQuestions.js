import { useState } from "react";
import { BASE_URL } from "../constants/data";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export default function useQuestions() {
    const [error, setError] = useState({});
    const [success, setSuccess] = useState("");
    const [questions, setQuestions] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(false);

    const saveQuestion = (data) => {
        setLoading(true)
        fetch(`${BASE_URL}/questions/create`, {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        }).then((response) => response.json()).then((response) => {
            setSuccess(response);
            setLoading(false)
        }).catch((error) => {
            setError(error);
            setLoading(false)
        })
    }

    const getQuestions = () => {
        setLoading(true)
        fetch(`${BASE_URL}/questions/list`, {
            method: "GET",
            headers
        }).then((response) => response.json()).then((response) => {
            console.log('response : ', response)
            setQuestions(response)
            setLoading(false)
        }).catch((error) => {
            setError(error);
            setLoading(false)
        })
    }

    const answerQuestion = (questionId, selectedAnswer) => {
        setLoading(true)
        fetch(`${BASE_URL}/questions/${questionId}/answer`, {
            method: "POST",
            headers,
            body: JSON.stringify(selectedAnswer)
        }).then((response) => response.json()).then((response) => {
            setCorrectAnswer(response)
            setLoading(false)
        }).catch((error) => {
            setError(error);
            setLoading(false)
        })
    }

    return {
        saveQuestion,
        getQuestions,
        answerQuestion,
        success,
        questions,
        isLoading,
        correctAnswer,
        error
    }
}