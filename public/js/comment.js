const commentHandler = async (event) => {
    console.log('Comment JS');
    event.preventDefault();
    const blogId = document.querySelector('#blog_id').value.trim();
    sessionStorage.setItem("blogId", blogId);
    document.location.replace('/newComment');
};

document.querySelector('.newComment-form').addEventListener('click', commentHandler)