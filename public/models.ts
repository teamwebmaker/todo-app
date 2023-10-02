type todo = {
    id: string
    title: string,
    completed: boolean,
    status: 'low' | 'middle' | 'high', 
    action: 'waiting' | 'running' | 'finished'
}