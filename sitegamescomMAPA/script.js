document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('postForm');
    const postContent = document.getElementById('postContent');
    const postsContainer = document.getElementById('posts');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Exibir postagens ao carregar a página
    posts.forEach(post => addPost(post));

    postForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const content = postContent.value.trim();
        if (content !== '') {
            addPost(content);
            posts.push(content);
            localStorage.setItem('posts', JSON.stringify(posts));
            postContent.value = '';
        }
    });

    function addPost(content) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        const postContent = document.createElement('p');
        postContent.textContent = content;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function () {
            postDiv.remove();
            const index = posts.indexOf(content);
            if (index !== -1) {
                posts.splice(index, 1);
                localStorage.setItem('posts', JSON.stringify(posts));
            }
        });
        postDiv.appendChild(postContent);
        postDiv.appendChild(deleteButton);
        postsContainer.appendChild(postDiv);
    }
});
