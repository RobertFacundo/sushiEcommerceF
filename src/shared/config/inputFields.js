export const authFields = [
    { name: 'name', label: 'Name', type: 'text', showIn: ['register'] },
    { name: 'email', label: 'Email', type: 'email', showIn: ['login', 'register'] },
    { name: 'password', label: 'Password', type: 'password', showIn: ['login', 'register'] },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password', showIn: ['register'] },
]