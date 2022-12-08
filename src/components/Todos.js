import { useEffect, useState } from "react";
import { useMutation, useQueries, useQuery, useQueryClient } from "react-query";
import { fetchState, fetchTodos, putTodo } from "../api/todo";

const Todos = () => {

    const queryClient = useQueryClient();

    const {isLoading, data, isError, error} = useQuery("todos", fetchTodos);

    const todoMutation = useMutation("putTodos", ()=> putTodo(1,{todo: "react-query! useMutation! invalidateQueries"}),{
        onSuccess: () => {
            // postTodo가 성공하면 todos로 맵핑된 useQuery api 함수를 실행합니다.
            queryClient.invalidateQueries("todos");
          }
    });

    const todoEdit = () => {
        todoMutation.mutate();
    }

    if(todoMutation.isLoading || isLoading){
        return <div>Loading...</div>
    }

    if(todoMutation.isError || isError){
        return <div>error!</div>
    }


    // console.log(data);

    // if(isLoading){
    //     return <div>Loading...</div>
    // }

    // if(isError){
    //     return<div>{error}</div>
    // }


    return(
        <>
        <h1>TODO LIST</h1>
        <button onClick={todoEdit}>EDIT</button>
            <ul>
                {
                    data?.map((todo, index) => (
                        <li key={index}>{todo.todo}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Todos;