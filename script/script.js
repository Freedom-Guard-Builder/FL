tailwind.config = {
    darkMode: 'class',
    safelist: [
        'dark:bg-gray-900',
        'dark:text-gray-100',
        'dark:bg-gray-700',
        'dark:bg-red-900',
        'dark:text-red-300',
        'dark:hover:bg-gray-600',
        'dark:hover:bg-blue-600',
        'dark:bg-purple-500',
        'dark:hover:bg-purple-600'
    ]
};

document.addEventListener('DOMContentLoaded', () => {

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

});