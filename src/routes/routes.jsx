import GitSearch from '../pages/GitSearch/GitSearch'
import {} from 'react-router-dom'
import PomodoroTimer from '../pages/PomodoroTimer/PomodoroTimer'



export const routes = [
    {path: '/git-search', element: GitSearch},
    {path: '/timer', element: PomodoroTimer},
]
