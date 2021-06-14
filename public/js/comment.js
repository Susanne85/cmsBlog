const commentHandler = async (event) => {
    event.preventDefault();
    const blogId = document.querySelector('#blog_id').value.trim();
    console.log('Comment JS' ,blogId);
    sessionStorage.setItem("blogId", blogId);
    document.location.replace('/dashboard/newComment');
};

document.querySelector('.newComment-form').addEventListener('submit', commentHandler)