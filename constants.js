export const color = {
    primary: '#65a30d',
    secondary: 'white',
    black: 'black',
    hijau: 'green'
}

export const INITIAL_API_RESPONSE = 
{
    status_code: 500,
    status: 'Internal Server Error',
    message: 'Internal Server Error. Please contact your system administrator.',
    data: []
}

export const API_RESPONSE_200 = 
{
    status_code: 200,
    status: 'success',
    message: 'success',
    data: []
}

export const API_RESPONSE_400 = 
{
    status_code: 400,
    status: 'Bad Request',
    message: 'One of your parameter is invalid or undefined.',
    data: []
}

export const API_RESPONSE_500 = 
{
    status_code: 500,
    status: 'Internal Server Error',
    message: 'Internal System Error. Please contact your system administrator.',
    data: []
}