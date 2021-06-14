const newPostHandler = async (event) => {
    event.preventDefault();
    console.log('Dashboard JS');
    document.location.replace('/dashboard/newPost');
};

document.querySelector('.newPost-form').addEventListener('submit', newPostHandler)