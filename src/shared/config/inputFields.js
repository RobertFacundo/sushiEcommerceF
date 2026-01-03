export const authFields = [
    { name: 'name', labelKey: 'authentication.name', type: 'text', showIn: ['register'] },
    { name: 'email', labelKey: 'authentication.email', type: 'email', showIn: ['login', 'register'] },
    { name: 'password', labelKey: 'authentication.password', type: 'password', showIn: ['login', 'register'] },
    { name: 'confirmPassword', labelKey: 'authentication.confirmPassword', type: 'password', showIn: ['register'] },
]